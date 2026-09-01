import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactLensMap from '../assets/contactlens.png';

const ContactLensConsultation = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Contact Lens Consultation</h2>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <div className="row">
                {/* Text Column */}
                <div className="col-md-7 col-12">
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    Thinking about the freedom of contact lenses—or simply want a health check on the pair you already wear? Our full contact-lens service slots in right after your routine eye exam and covers everything you need for crystal-clear, comfortable vision:
                  </p>
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    <strong>Precision Mapping</strong> – We take detailed corneal measurements and assess your tear film to ensure a flawless lens fit.
                  </p>
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    <strong>Ocular Health Checks</strong> – A dry-eye screen and fluorescein (yellow dye) test let us spot any surface issues before they become problems.
                  </p>
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    <strong>Real-World Trial</strong> – Trial lenses are inserted on the spot so you can experience the sharpness and comfort first-hand while we fine-tune your prescription.
                  </p>
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    <strong>Hands-On Training</strong> – You’ll practise safe insertion and removal techniques under expert guidance until you’re completely confident.
                  </p>
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    <strong>Take-Home Specs</strong> – Leave with a printed copy of your personalised contact-lens prescription and care instructions—ready to order whenever you choose.
                  </p>
                  <p className="text-muted" style={{ textAlign: 'justify' }}>
                    Book your contact-lens visit today and see the world with clarity and confidence.
                  </p>
                </div>
                {/* Image Column */}
                <div className="col-md-5 col-12 d-flex align-items-center justify-content-md-end justify-content-center mt-4 mt-md-0">
                  <img 
                    src={contactLensMap} 
                    alt="Contact lens consultation steps" 
                    className="img-fluid rounded shadow"
                    loading="lazy"
                    style={{ 
                      maxHeight: '500px', 
                      objectFit: 'cover',
                      transition: 'opacity 0.5s ease-in-out',
                      opacity: 0 
                    }}
                    onLoad={(e) => (e.target.style.opacity = 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLensConsultation;