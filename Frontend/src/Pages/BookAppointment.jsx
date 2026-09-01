import React, { useState } from "react";
import "animate.css";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BookAppointment = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    address1: "",
    address2: "",
    postcode: "",
    phone: "",
    contactHours: "",
    appointmentDate: "",
    appointmentTime: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const { firstName, lastName, dob, address1, postcode, phone, contactHours, appointmentDate, appointmentTime } = formData;

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!dob.trim()) newErrors.dob = "Date of birth is required.";
    //else if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) newErrors.dob = "Date of birth must be in dd-mm-yyyy format.";

    if (!address1.trim()) newErrors.address1 = "Address line 1 is required.";
    if (!postcode.trim()) newErrors.postcode = "Postcode is required.";
    if (!phone.trim()) newErrors.phone = "Phone number is required.";

    if (!contactHours) newErrors.contactHours = "Preferred contact hours is required.";
    if (!appointmentDate.trim()) newErrors.appointmentDate = "Appointment date is required.";
    //else if (!/^\d{2}-\d{2}-\d{4}$/.test(appointmentDate)) newErrors.appointmentDate = "Date must be in dd-mm-yyyy format.";
    
    if (!appointmentTime) newErrors.appointmentTime = "Appointment time is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setIsLoading(true); // Show loading
      try {
        const response = await fetch(`${apiUrl}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setModalMessage(data.message);
          setFormData(initialState);
        } else {
          setModalMessage("Failed to book appointment.");
        }
        setShowModal(true);
      } catch (error) {
        console.error("Error:", error);
        setModalMessage("Server error. Please try again later.");
        setShowModal(true);
      } finally {
        setIsLoading(false); 
      }
    }
  };

  return (
    <div className="container py-5 animate__animated animate__fadeIn">
      <h2 className="text-center text-primary fw-bold mb-4">Book Appointment</h2>
      <div className="card shadow border-0 rounded-4 p-4">
        <form onSubmit={handleSubmit}>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First Name*</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label>Last Name*</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label>Date of Birth* <small className="text-muted">(dd-mm-yyyy)</small></label>
            <input
              type="date"
              className="form-control"
              name="dob"
              max={getTodayDate()}
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>

          <div className="mb-3">
            <label>Address Line 1*</label>
            <input
              type="text"
              className="form-control"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
            />
            {errors.address1 && <div className="text-danger">{errors.address1}</div>}
          </div>

          <div className="mb-3">
            <label>Address Line 2</label>
            <input
              type="text"
              className="form-control"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Postcode*</label>
              <input
                type="text"
                className="form-control"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
              />
              {errors.postcode && <div className="text-danger">{errors.postcode}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label>Phone Number*</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="^07\d{9}$"
                placeholder="07XXXXXXXXX"
              />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label>Preferred Contact Hours*</label>
            <select
              className="form-select"
              name="contactHours"
              value={formData.contactHours}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Either">Either</option>
            </select>
            {errors.contactHours && <div className="text-danger">{errors.contactHours}</div>}
          </div>

          <div className="mb-3">
            <label>Preferred Appointment Date* <small className="text-muted">(dd-mm-yyyy)</small></label>
            <input
              type="date"
              className="form-control"
              name="appointmentDate"
              min={getTodayDate()}
              value={formData.appointmentDate}
              onChange={handleChange}
            />
            {errors.appointmentDate && <div className="text-danger">{errors.appointmentDate}</div>}
          </div>

          <div className="mb-3">
            <label>Preferred Appointment Time*</label>
            <select
              className="form-select"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Either">Either</option>
            </select>
            {errors.appointmentTime && <div className="text-danger">{errors.appointmentTime}</div>}
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal animate__animated animate__zoomIn">
            <div className="modal-header bg-primary text-white rounded-top">
              <h5 className="modal-title text-center">Thank You!</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body text-center p-4">
              <i className="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
              <p className="fs-5">{modalMessage}</p>
              <button
                className="btn btn-primary mt-3 px-4"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
