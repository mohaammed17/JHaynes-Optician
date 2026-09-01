import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const SpecialOffers = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const offers = [
    "2 pairs of single vision glasses for £60",
    "2 Pairs of Varifocals or Bifocals for £139",
    "Single Vision Prescription Sunglasses for £55",
    "Varifocal or Bifocal sunglasses for £114",
    "Free NHS-funded glasses available for children and individuals receiving benefits.",
    "Free one month trial on contact lenses.",
    "We offer express on-the-hour glazing services for most single vision lens glasses."
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="text-primary fw-bold">Special Offers</h2>
          <p className="lead text-muted">Our in-store offers</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div data-aos="fade-up" className="card border-0 shadow rounded-4 p-4 bg-white">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {offers.map((offer, index) => (
                    <motion.li
                      key={index}
                      className="list-group-item bg-transparent text-muted"
                      data-aos-delay={index * 100}
                      style={{ textAlign: 'justify' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <i className="bi bi-check-circle text-success me-2"></i>
                      {offer}
                    </motion.li>
                  ))}
                </ul>

                {/* Note for the whole box */}
                <div className="text-center mt-3">
                  <p className="text-muted" style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                    <strong>Note:</strong> We also offer upgrades on frames and lenses at extra cost.
                  </p>
                </div>

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

export default SpecialOffers;
