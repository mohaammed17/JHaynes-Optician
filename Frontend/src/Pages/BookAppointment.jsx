import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const apiUrl = import.meta.env.VITE_API_URL
  || (import.meta.env.PROD ? 'https://j-haynes-optician.vercel.app' : 'http://localhost:5000');

const initialState = {
  firstName: '',
  lastName: '',
  dob: '',
  address1: '',
  address2: '',
  postcode: '',
  phone: '',
  contactHours: '',
  appointmentDate: '',
  appointmentTime: '',
  website: '',
};

const getLocalDateValue = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const FieldError = ({ id, message }) => (
  message ? <div id={id} className="text-danger mt-1" role="alert">{message}</div> : null
);

const BookAppointment = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [submissionSucceeded, setSubmissionSucceeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (!showModal) return undefined;

    lastFocusedElementRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const handleModalKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = [...modalRef.current.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )];
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleModalKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleModalKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedElementRef.current?.focus();
    };
  }, [showModal]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
  };

  const handleAppointmentDateChange = ({ target: { value } }) => {
    const selectedDay = value ? new Date(`${value}T12:00:00`).getDay() : null;

    if (selectedDay === 0) {
      setFormData((previous) => ({ ...previous, appointmentDate: '', appointmentTime: '' }));
      setErrors((previous) => ({
        ...previous,
        appointmentDate: 'Sundays are unavailable. Please choose Monday to Saturday.',
      }));
      return;
    }

    setFormData((previous) => ({
      ...previous,
      appointmentDate: value,
      appointmentTime: selectedDay === 2 && previous.appointmentTime === 'Afternoon'
        ? ''
        : previous.appointmentTime,
    }));
    setErrors((previous) => {
      const next = { ...previous };
      delete next.appointmentDate;
      delete next.appointmentTime;
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};
    const today = getLocalDateValue();
    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!formData.dob) nextErrors.dob = 'Date of birth is required.';
    else if (formData.dob > today) nextErrors.dob = 'Date of birth cannot be in the future.';
    if (!formData.address1.trim()) nextErrors.address1 = 'Address line 1 is required.';
    if (!formData.postcode.trim()) nextErrors.postcode = 'Postcode is required.';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    else if (phoneDigits.length < 10 || phoneDigits.length > 12) nextErrors.phone = 'Enter a valid UK phone number.';
    if (!formData.contactHours) nextErrors.contactHours = 'Select your preferred contact hours.';
    if (!formData.appointmentDate) nextErrors.appointmentDate = 'Preferred appointment date is required.';
    else if (formData.appointmentDate < today) nextErrors.appointmentDate = 'Choose today or a future date.';
    else if (new Date(`${formData.appointmentDate}T12:00:00`).getDay() === 0) nextErrors.appointmentDate = 'The practice is closed on Sundays.';
    if (!formData.appointmentTime) nextErrors.appointmentTime = 'Select your preferred appointment time.';
    else if (
      formData.appointmentDate
      && new Date(`${formData.appointmentDate}T12:00:00`).getDay() === 2
      && formData.appointmentTime === 'Afternoon'
    ) nextErrors.appointmentTime = 'Tuesday appointments are available in the morning only.';

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      document.getElementById(Object.keys(formErrors)[0])?.focus();
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmissionSucceeded(true);
        setModalMessage(data.message || 'Your appointment request has been sent. The practice will contact you to confirm availability.');
        setFormData(initialState);
      } else {
        setSubmissionSucceeded(false);
        setModalMessage(data.message || 'We could not send your request. Please call 01509 260023 or try again later.');
      }
      setShowModal(true);
    } catch (error) {
      console.error('Appointment request error:', error);
      setSubmissionSucceeded(false);
      setModalMessage('We could not connect to the appointment service. Please call 01509 260023 or try again later.');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const describedBy = (field) => errors[field] ? `${field}-error` : undefined;
  const selectedAppointmentDay = formData.appointmentDate
    ? new Date(`${formData.appointmentDate}T12:00:00`).getDay()
    : null;
  const isTuesdayAppointment = selectedAppointmentDay === 2;
  const appointmentTimeDescribedBy = [
    isTuesdayAppointment ? 'appointmentTime-help' : '',
    errors.appointmentTime ? 'appointmentTime-error' : '',
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div className="container py-5 animate__animated animate__fadeIn">
      <h1 className="text-center text-primary fw-bold mb-3">Request an Appointment</h1>
      <p className="appointment-intro text-muted text-center mx-auto mb-4">
        Tell us your preferred date and time. This is a request rather than a confirmed booking; the practice will contact you to confirm availability.
      </p>
      <div className="card shadow border-0 rounded-4 p-4">
        <form onSubmit={handleSubmit} noValidate aria-label="Appointment request form" aria-busy={isLoading}>
          <div className="booking-honeypot" hidden>
            <label htmlFor="website">Leave this field blank</label>
            <input id="website" name="website" type="text" value={formData.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First Name*</label>
              <input id="firstName" type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" required aria-invalid={Boolean(errors.firstName)} aria-describedby={describedBy('firstName')} />
              <FieldError id="firstName-error" message={errors.firstName} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last Name*</label>
              <input id="lastName" type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="family-name" required aria-invalid={Boolean(errors.lastName)} aria-describedby={describedBy('lastName')} />
              <FieldError id="lastName-error" message={errors.lastName} />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="dob">Date of Birth*</label>
            <input id="dob" type="date" className="form-control" name="dob" max={getLocalDateValue()} value={formData.dob} onChange={handleChange} autoComplete="bday" required aria-invalid={Boolean(errors.dob)} aria-describedby={describedBy('dob')} />
            <FieldError id="dob-error" message={errors.dob} />
          </div>

          <div className="mb-3">
            <label htmlFor="address1">Address Line 1*</label>
            <input id="address1" type="text" className="form-control" name="address1" value={formData.address1} onChange={handleChange} autoComplete="address-line1" required aria-invalid={Boolean(errors.address1)} aria-describedby={describedBy('address1')} />
            <FieldError id="address1-error" message={errors.address1} />
          </div>

          <div className="mb-3">
            <label htmlFor="address2">Address Line 2</label>
            <input id="address2" type="text" className="form-control" name="address2" value={formData.address2} onChange={handleChange} autoComplete="address-line2" />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="postcode">Postcode*</label>
              <input id="postcode" type="text" className="form-control" name="postcode" value={formData.postcode} onChange={handleChange} autoComplete="postal-code" required aria-invalid={Boolean(errors.postcode)} aria-describedby={describedBy('postcode')} />
              <FieldError id="postcode-error" message={errors.postcode} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone">Phone Number*</label>
              <input id="phone" type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" inputMode="tel" placeholder="e.g. 01509 260023 or 07123 456789" required aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy('phone')} />
              <FieldError id="phone-error" message={errors.phone} />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="contactHours">Preferred Contact Hours*</label>
            <select id="contactHours" className="form-select" name="contactHours" value={formData.contactHours} onChange={handleChange} required aria-invalid={Boolean(errors.contactHours)} aria-describedby={describedBy('contactHours')}>
              <option value="">-- Select --</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Either">Either</option>
            </select>
            <FieldError id="contactHours-error" message={errors.contactHours} />
          </div>

          <div className="mb-3">
            <label htmlFor="appointmentDate">Preferred Appointment Date*</label>
            <input id="appointmentDate" type="date" className="form-control" name="appointmentDate" min={getLocalDateValue()} value={formData.appointmentDate} onChange={handleAppointmentDateChange} required aria-invalid={Boolean(errors.appointmentDate)} aria-describedby={errors.appointmentDate ? 'appointmentDate-help appointmentDate-error' : 'appointmentDate-help'} />
            <div id="appointmentDate-help" className="form-text">Sundays cannot be selected. We are also closed on bank holidays. Monday and Saturday visits are by appointment only.</div>
            <FieldError id="appointmentDate-error" message={errors.appointmentDate} />
          </div>

          <div className="mb-3">
            <label htmlFor="appointmentTime">Preferred Appointment Time*</label>
            <select id="appointmentTime" className="form-select" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required aria-invalid={Boolean(errors.appointmentTime)} aria-describedby={appointmentTimeDescribedBy}>
              <option value="">-- Select --</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon" disabled={isTuesdayAppointment}>Afternoon{isTuesdayAppointment ? ' — unavailable on Tuesday' : ''}</option>
              <option value="Either">Either</option>
            </select>
            {isTuesdayAppointment && <div id="appointmentTime-help" className="form-text">Tuesday appointments are available in the morning only.</div>}
            <FieldError id="appointmentTime-error" message={errors.appointmentTime} />
          </div>

          <p className="small text-muted">
            Your details will only be used to respond to this request. See our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4" disabled={isLoading}>
              {isLoading ? 'Sending Request…' : 'Send Appointment Request'}
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="custom-modal-backdrop" role="presentation">
          <div ref={modalRef} className="custom-modal animate__animated animate__zoomIn" role="dialog" aria-modal="true" aria-labelledby="appointment-result-title" aria-describedby="appointment-result-message">
            <div className="modal-header bg-primary text-white rounded-top">
              <h2 id="appointment-result-title" className="modal-title h5 text-white mb-0">
                {submissionSucceeded ? 'Request Received' : 'Request Not Sent'}
              </h2>
              <button ref={closeButtonRef} type="button" className="btn-close btn-close-white" aria-label="Close appointment result" onClick={closeModal} />
            </div>
            <div className="modal-body text-center p-4" aria-live="polite">
              <i className={`bi ${submissionSucceeded ? 'bi-check-circle-fill text-success' : 'bi-exclamation-circle-fill text-danger'} fs-1 mb-3`} aria-hidden="true" />
              <p id="appointment-result-message" className="fs-5">{modalMessage}</p>
              <button type="button" className="btn btn-primary mt-3 px-4" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="loading-overlay" role="status" aria-live="polite" aria-label="Sending appointment request">
          <div className="spinner" aria-hidden="true">
            <div className="circle circle1" />
            <div className="circle circle2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
