from flask import Flask, request, jsonify
from flask_cors import CORS
import os, sys
from dotenv import load_dotenv
import requests
import json
from datetime import datetime

sys.path.insert(0, os.path.dirname(__file__))

# Load environment variables from .env
load_dotenv()
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
DOCTOR_EMAIL = os.getenv("DOCTOR_EMAIL")  # The email to which the appointment emails will be sent
SENDER_EMAIL = os.getenv("SENDER_EMAIL")  # The email from which the emails will be sent
PORT = int(os.getenv("PORT", "5000"))
API_KEY = os.getenv("SENDINBLUE_API_KEY")

app = Flask(__name__, static_url_path='/backend/static')
app.config['APPLICATION_ROOT'] = '/backend'
CORS(app)

def send_sendinblue_email(data):
    # Use the doctor email from .env as the recipient
    to_email = DOCTOR_EMAIL
    # Use SENDER_EMAIL from .env or fallback to a default value
    sender_email = SENDER_EMAIL or "postmaster@jhaynesoptician.com"
    
    # Create the email subject with a timestamp
    subject = f"Booking request: {data.get('FName', '')} {data.get('LName', '')} -> {datetime.now().strftime('%d-%m-%Y %H:%M')}"
    
    # Build the HTML email message with a formatted table
    html_message = f"""
    <html>
      <body style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
        <h3>Booking Appointment Request</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr style="background-color: #f2f2f2;">
            <th align="left">Field</th>
            <th align="left">Value</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>{data.get('FName', '')} {data.get('LName', '')}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{data.get('DOB', '')}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              {data.get('Address', '')}<br>
              {data.get('AddressTwo', '')}
            </td>
          </tr>
          <tr>
            <td>Postcode</td>
            <td>{data.get('PCode', '')}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{data.get('PhoneNumber', '')}</td>
          </tr>
          <tr>
            <td>Preferred Contact Time</td>
            <td>{data.get('PCH', '')}</td>
          </tr>
          <tr>
            <td>Appointment Date</td>
            <td>{data.get('PAD', '')}</td>
          </tr>
          <tr>
            <td>Appointment Time</td>
            <td>{data.get('PAT', '')}</td>
          </tr>
        </table>
        <p>Please contact during business hours to confirm the appointment.<br>
           This is an automated message. Do not reply.</p>
      </body>
    </html>
    """
    
    # Prepare payload according to Sendinblue API; note we use htmlContent
    payload = {
        "sender": {
            "email": sender_email,
            "name": "Webmaster"
        },
        "to": [
            {
                "email": to_email,
                "name": "Glenfield opticians"
            }
        ],
        "subject": subject,
        "htmlContent": html_message
    }
    
    # Set HTTP headers including the API key
    headers = {
        "Accept": "application/json",
        "Api-Key": API_KEY,
        "Content-Type": "application/json"
    }
    
    # Make the POST request to Sendinblue's SMTP API endpoint
    response = requests.post("https://api.sendinblue.com/v3/smtp/email",
                             headers=headers,
                             data=json.dumps(payload))
    return response

@app.route("/", methods=["POST"])
def appointment():
    formData = request.get_json()
    if not formData:
        return jsonify({"success": False, "message": "Invalid input"}), 400

    # Map front-end fields to Sendinblue expected keys
    email_data = {
        "FName": formData.get("firstName", ""),
        "LName": formData.get("lastName", ""),
        "DOB": formData.get("dob", ""),
        "Address": formData.get("address1", ""),
        "AddressTwo": formData.get("address2", ""),
        "PCode": formData.get("postcode", ""),
        "PhoneNumber": formData.get("phone", ""),
        "PCH": formData.get("contactHours", ""),
        "PAD": formData.get("appointmentDate", ""),
        "PAT": formData.get("appointmentTime", "")
    }

    try:
        r = send_sendinblue_email(email_data)
        if r.status_code in [200, 201]:
            return jsonify({"success": True, "message": "Appointment submitted successfully. You will be contacted shortly."}), 200
        else:
            print("Sendinblue API error:", r.text)
            return jsonify({"success": False, "message": "Failed to send appointment email via Sendinblue."}), 500
    except Exception as e:
        print("Exception while sending email via Sendinblue:", e)
        return jsonify({"success": False, "message": "Failed to send appointment email."}), 500

if __name__ == "__main__":
    app.run(port=PORT, debug=True)