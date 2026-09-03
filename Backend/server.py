from datetime import date, datetime
from html import escape
import os
import re
import sys

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests


sys.path.insert(0, os.path.dirname(__file__))
load_dotenv()

APPOINTMENT_EMAIL = os.getenv("APPOINTMENT_EMAIL", "jhaynesoptician@gmail.com")
SENDER_EMAIL = os.getenv("SENDER_EMAIL") or "postmaster@jhaynesoptician.com"
PORT = int(os.getenv("PORT", "5000"))
API_KEY = os.getenv("SENDINBLUE_API_KEY")
DEFAULT_ORIGINS = {
    "https://jhaynesoptician.com",
    "https://www.jhaynesoptician.com",
    "https://frontend-psi-ten-66.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
}
CONFIGURED_ORIGINS = {
    origin.strip()
    for origin in os.getenv(
        "FRONTEND_ORIGINS",
        "",
    ).split(",")
    if origin.strip()
}
ALLOWED_ORIGINS = sorted(DEFAULT_ORIGINS | CONFIGURED_ORIGINS)

app = Flask(__name__, static_url_path="/backend/static")
app.config["APPLICATION_ROOT"] = "/backend"
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024
CORS(app, resources={r"/": {"origins": ALLOWED_ORIGINS, "methods": ["POST", "OPTIONS"]}})

FIELD_LIMITS = {
    "firstName": 80,
    "lastName": 80,
    "dob": 10,
    "address1": 160,
    "address2": 160,
    "postcode": 12,
    "phone": 30,
    "contactHours": 20,
    "appointmentDate": 10,
    "appointmentTime": 20,
}
REQUIRED_FIELDS = {
    "firstName": "First name",
    "lastName": "Last name",
    "dob": "Date of birth",
    "address1": "Address line 1",
    "postcode": "Postcode",
    "phone": "Phone number",
    "contactHours": "Preferred contact hours",
    "appointmentDate": "Preferred appointment date",
    "appointmentTime": "Preferred appointment time",
}
ALLOWED_PREFERENCES = {"Morning", "Afternoon", "Either"}


@app.after_request
def add_security_headers(response):
    response.headers["Cache-Control"] = "no-store"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "no-referrer"
    return response


def clean_text(value, maximum_length):
    if not isinstance(value, str):
        return ""
    return " ".join(value.strip().split())[:maximum_length]


def validate_appointment(data):
    cleaned = {
        field: clean_text(data.get(field, ""), limit)
        for field, limit in FIELD_LIMITS.items()
    }

    for field, label in REQUIRED_FIELDS.items():
        if not cleaned[field]:
            return None, f"{label} is required."

    phone_digits = re.sub(r"\D", "", cleaned["phone"])
    if not 10 <= len(phone_digits) <= 12:
        return None, "Enter a valid UK phone number."

    if not 3 <= len(cleaned["postcode"]) <= 12:
        return None, "Enter a valid postcode."

    if cleaned["contactHours"] not in ALLOWED_PREFERENCES:
        return None, "Select valid preferred contact hours."
    if cleaned["appointmentTime"] not in ALLOWED_PREFERENCES:
        return None, "Select a valid preferred appointment time."

    try:
        date_of_birth = date.fromisoformat(cleaned["dob"])
        appointment_date = date.fromisoformat(cleaned["appointmentDate"])
    except ValueError:
        return None, "Enter valid dates."

    if date_of_birth > date.today():
        return None, "Date of birth cannot be in the future."
    if appointment_date < date.today():
        return None, "Choose today or a future appointment date."
    if appointment_date.weekday() == 6:
        return None, "The practice is closed on Sundays."
    if appointment_date.weekday() == 1 and cleaned["appointmentTime"] == "Afternoon":
        return None, "Tuesday appointments are available in the morning only."

    return cleaned, None


def send_appointment_email(data):
    safe = {key: escape(value, quote=True) for key, value in data.items()}
    subject_name = re.sub(r"[\r\n]+", " ", f"{data['firstName']} {data['lastName']}")
    subject = f"Booking request: {subject_name} - {datetime.now().strftime('%d-%m-%Y %H:%M')}"

    html_message = f"""
    <html>
      <body style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
        <h3>J Haynes Optician Appointment Request</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr style="background-color: #f2f2f2;"><th align="left">Field</th><th align="left">Value</th></tr>
          <tr><td>Name</td><td>{safe['firstName']} {safe['lastName']}</td></tr>
          <tr><td>Date of Birth</td><td>{safe['dob']}</td></tr>
          <tr><td>Address</td><td>{safe['address1']}<br>{safe['address2']}</td></tr>
          <tr><td>Postcode</td><td>{safe['postcode']}</td></tr>
          <tr><td>Phone Number</td><td>{safe['phone']}</td></tr>
          <tr><td>Preferred Contact Time</td><td>{safe['contactHours']}</td></tr>
          <tr><td>Appointment Date</td><td>{safe['appointmentDate']}</td></tr>
          <tr><td>Appointment Time</td><td>{safe['appointmentTime']}</td></tr>
        </table>
        <p>Please contact the customer to confirm availability.<br>This is an automated message. Do not reply.</p>
      </body>
    </html>
    """

    payload = {
        "sender": {"email": SENDER_EMAIL, "name": "J Haynes Website"},
        "to": [{"email": APPOINTMENT_EMAIL, "name": "J Haynes Optician"}],
        "subject": subject,
        "htmlContent": html_message,
    }
    headers = {
        "Accept": "application/json",
        "Api-Key": API_KEY,
        "Content-Type": "application/json",
    }
    return requests.post(
        "https://api.sendinblue.com/v3/smtp/email",
        headers=headers,
        json=payload,
        timeout=12,
    )


@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "service": "J Haynes appointment service"}), 200


@app.route("/", methods=["POST"])
def appointment():
    form_data = request.get_json(silent=True)
    if not isinstance(form_data, dict):
        return jsonify({"success": False, "message": "Invalid appointment request."}), 400

    # A hidden field filled by automated bots. Return a neutral success response
    # without sending an email so the trap is not advertised to the bot.
    if clean_text(form_data.get("website", ""), 200):
        return jsonify({
            "success": True,
            "message": "Appointment request submitted successfully. The practice will contact you to confirm availability.",
        }), 200

    cleaned_data, validation_error = validate_appointment(form_data)
    if validation_error:
        return jsonify({"success": False, "message": validation_error}), 400

    if not API_KEY:
        app.logger.error("SENDINBLUE_API_KEY is not configured")
        return jsonify({"success": False, "message": "The appointment service is temporarily unavailable. Please call 01509 260023."}), 503

    try:
        response = send_appointment_email(cleaned_data)
        if response.status_code in (200, 201):
            return jsonify({
                "success": True,
                "message": "Appointment request submitted successfully. The practice will contact you to confirm availability.",
            }), 200

        app.logger.error("Brevo email request failed with status %s", response.status_code)
        return jsonify({"success": False, "message": "We could not send your request. Please call 01509 260023 or try again later."}), 502
    except requests.RequestException:
        app.logger.exception("Brevo email request failed")
        return jsonify({"success": False, "message": "We could not send your request. Please call 01509 260023 or try again later."}), 502


if __name__ == "__main__":
    app.run(port=PORT, debug=False)
