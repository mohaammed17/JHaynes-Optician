import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import annexsysLogo from '../assets/Annexsyslogo.webp';

export default function Footer() {
  return (
    <motion.footer
      className="site-footer d-flex mt-auto pt-5"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-fluid px-5">
        <div className="row">
          {/* About Us + Contact Info */}
          <motion.div
            className="col-md-6 mb-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h5>J Haynes Optician</h5>
            <p>
              Zahra Eyecare Ltd trading as J Haynes Optician.<br />
              Company registration number: 12927169<br />
              35 High Street, Loughborough, Leicestershire, LE11 2PZ
            </p>
            <p className="mt-2">
              <strong>Contact:</strong><br />
              <motion.a
                href="mailto:jhaynesoptician@gmail.com"
                className="text-decoration-none text-black d-inline-block mb-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                jhaynesoptician@gmail.com
              </motion.a>
              <br />
              <motion.a
                href="tel:01509260023"
                className="text-decoration-none text-black d-inline-block"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="bi bi-telephone-fill me-2"></i>
                01509 260023
              </motion.a>
            </p>
            <a
              href="https://wa.me/447860479997"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '1.2rem' }}></i>
              WhatsApp
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-md-6 mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
               {[
                { path: "/privacy-policy", label: "Privacy Policy" },
                { path: "/freedom-of-information", label: "Freedom of Information" },
                { path: "/terms-and-conditions", label: "Terms and Conditions" },
              ].map(({ path, label }, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={path} className="text-decoration-none text-black">
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        <motion.hr
          className="mb-4 border-dark"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Footer Bottom Section */}
        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="col-md-6 text-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} J Haynes Optician. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end d-flex justify-content-end align-items-center">
            <span className="me-2">Developed by</span>
            <motion.a 
              href="https://annexsys.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-flex align-items-center"
              whileHover={{ scale: 1.05 }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={annexsysLogo}
                alt="AnnexSys Logo"
                width="320"
                height="342"
                loading="lazy"
                decoding="async"
                style={{ maxHeight: '80px', width: 'auto' }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
