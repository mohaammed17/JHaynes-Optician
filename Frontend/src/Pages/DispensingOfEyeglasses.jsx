import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dispensingJourney from '../assets/dispensingjounrey.png';

const DispensingOfEyeglasses = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Dispensing of Eye Glasses</h2>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Following your eye examination, our experienced staff will help you choose the right spectacles that suit your prescription and face. There is a selection of over 500 frames in our collection. If you choose to have yourself photographed to see how you look with the spectacles, then that option is also available. The qualified dispensing optician will then double-check your choice and take the final measurements to make your glasses.
              </p>
            </div>
          </div>
        </div>

        {/* New Two-column Layout for Dispensing Journey */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              {/* Make the text column responsive */}
              <div className="col-md-7 col-12">
                <div className="card border-0 shadow rounded-4 p-4 bg-white h-100">
                  <h5 className="text-info fw-bold mb-3">Why Choose Our Dispensing Service?</h5>
                  <ul className="text-muted" style={{ textAlign: 'justify' }}>
                    <li>Expert guidance from qualified dispensing opticians.</li>
                    <li>Access to over 500 high-quality frames from leading brands.</li>
                    <li>Personalised fittings, including a photography session to preview your look.</li>
                    <li>Accurate measurements for a perfect fit.</li>
                    <li>Comprehensive after-care and follow-up support.</li>
                  </ul>
                  <p className="mt-3 text-muted" style={{ textAlign: 'justify' }}>
                    We ensure every patient leaves with glasses that not only suit their prescription but also enhance their style and confidence. Experience our professional dispensing service today.
                  </p>
                  <div className="text-center mt-4">
                    <a href="/book-appointment" className="btn btn-primary px-4">
                      Book Your Appointment
                    </a>
                  </div>
                </div>
              </div>
              {/* Make the image column responsive and center on mobile */}
              <div className="col-md-5 col-12 d-flex align-items-center justify-content-md-end justify-content-center mt-4 mt-md-0">
                <img 
                  src={dispensingJourney} 
                  alt="Spectacles Dispensing Journey" 
                  className="img-fluid rounded shadow"
                  loading="lazy"
                  style={{ 
                    maxHeight: '500px', 
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out', 
                    opacity: 0 
                  }}
                  onLoad={(e) => e.target.style.opacity = 1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DispensingOfEyeglasses;