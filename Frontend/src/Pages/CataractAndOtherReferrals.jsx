import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CataractAndOtherReferrals = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Cataract and Other Referrals</h2>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                We do direct referrals of Cataracts and other eye problems to the hospital. The referral pathway through the general practitioner is not necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CataractAndOtherReferrals;