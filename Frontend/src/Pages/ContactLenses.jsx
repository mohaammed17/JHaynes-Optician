import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import lensesImage from '../assets/lenses.png'; // Import the image

const ContactLenses = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-up" className="text-center mb-5">
          <h2 className="text-primary fw-bold">Contact Lenses</h2>
          <p className="lead text-muted">Quality contact lenses at affordable prices</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              data-aos="zoom-in-up"
              className="card border-0 shadow rounded-4 p-4"
              style={{
                backgroundImage: `url(${lensesImage})`, // Use the imported image here
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "lighten",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
            >
              <div className="card-body" style={{ color: "#111", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}>
                <p style={{ textAlign: "justify" }}>
                  We offer contact lens consultations for new fittings and aftercare for existing contact lens wearers.
                </p>

                <h5 className="fw-bold mt-4 text-info" style={{ color: "#111" }}>We provide all varieties of lenses:</h5>
                <ul style={{ textAlign: "justify", color: "#111" }}>
                  <li>Conventional yearly lenses</li>
                  <li>Monthly disposable lenses</li>
                  <li>Biweekly disposable lenses</li>
                  <li>Daily disposable lenses</li>
                  <li>Soft coloured cosmetic lenses</li>
                </ul>

                <h5 className="fw-bold mt-4 text-info" style={{ color: "#111" }}>We sell:</h5>
                <ul style={{ textAlign: "justify", color: "#111" }}>
                  <li>Single vision</li>
                  <li>Toric lenses (for astigmatism)</li>
                  <li>Progressive contact lenses</li>
                </ul>

                <p className="mt-3" style={{ textAlign: "justify" }}>
                  We also do contact lens fitting and aftercare for rigid gas permeable lenses.
                </p>

                <div className="text-center mt-4">
                  <a href="/book-appointment" className="btn btn-primary px-4">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLenses;
