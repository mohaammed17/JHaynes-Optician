import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const HearingTest = () => {
  return (
    <div className="container py-5 animate__animated animate__fadeIn">
        
      <h2 className="text-center text-primary fw-bold mb-4">Hearing Test & Audiology Services</h2>
      <div className="card shadow border-0 rounded-4 p-4">
        <h5 className="mt-4 text-info">
          <strong>Check Your Hearing Today – Expert Care You Can Trust</strong>
        </h5>
        <p className="text-muted">
          Hearing loss can leave individuals feeling disconnected from the world around them, negatively affecting communication, confidence, and overall quality of life. At Glenfield Opticians, we are dedicated to offering professional hearing care services designed to support your well-being.
        </p>
        <p className="text-muted">
          Our dedicated hearing care services include:
        </p>
        <ul className="text-muted">
          <li><strong>Hearing Consultations:</strong> Detailed assessments to evaluate your hearing health.</li>
          <li><strong>Wax Removal:</strong> Safe and effective procedures to remove excess earwax and improve clarity.</li>
          <li><strong>Hearing Devices:</strong> Personalized advice and fittings for hearing aids suited to your lifestyle and needs.</li>
          <li><strong>Home Visits:</strong> Convenient appointments in the comfort of your home for those who require them.</li>
          <li><strong>Noise Protection:</strong> Custom-fitted solutions to safeguard your hearing in noisy environments.</li>
        </ul>
        <p className="text-muted">
          If further assessment is required, a qualified audiologist will work with you to identify the most appropriate hearing solution and guide you through the process with care and clarity.
        </p>
        <p className="text-muted fw-semibold">
          Take the first step toward better hearing — book your hearing test with us today.
        </p>
        <div className="text-center mt-4">
          <a href="/book-appointment" className="btn btn-primary px-4">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default HearingTest;
