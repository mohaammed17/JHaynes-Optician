import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const CorporateEyeCare = () => {
  return (
    <section className="py-5 bg-light corporate-eyecare">
      <div className="container">
        <div className="row justify-content-center animate__animated animate__fadeInUp">
          <div className="col-lg-10">
            {/* Heading moved outside of the white card */}
            <h2 className="text-center text-primary fw-bold mb-4">Corporate Eyecare Plans</h2>
            <div className="card shadow border-0 rounded-4 p-4">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Allow your business to see clearly.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                With the growing number of patients using a VDU screen, it is important that employers comply with the 
                <strong> Health and Safety (Display Screen Equipment) Regulations 1992</strong>. At Glenfield Opticians, we offer a simple, straightforward Eyecare scheme:
              </p>
              <ul className="text-muted ps-3">
                <li>Provide your employees with our Eyecare plan</li>
                <li>Your employee will then contact us to make an appointment</li>
                <li>Our qualified Optometrist will complete the eye test and provide your employee with a report</li>
                <li>Your employee will then choose from a wide range of spectacles depending on the plan they are on</li>
                <li>Making the process hassle-free for both employer and employee</li>
              </ul>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                If your company is already affiliated with an Eyecare voucher scheme, we can provide spectacles to suit all.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Please contact us on <strong ><a href="tel:01162874357">0116 2874357</a></strong> for further information on how Glenfield Opticians can work with your company,
                or email us at <a href="mailto:info@glenfieldopticians.co.uk">info@glenfieldopticians.co.uk</a>.
              </p>
              <div className="text-center mt-4">
                <Link to="/book-appointment" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateEyeCare;
