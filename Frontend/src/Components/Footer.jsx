import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '../App.css';
import annexsysLogo from '../assets/Annexsyslogo.png';

export default function Footer() {
  return (
    <motion.footer
      className="d-flex mt-auto bg-white shadow-sm text-black pt-4"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-fluid px-5">
        <div className="row">
          {/* About Us + Contact Info */}
          <motion.div
            className="col-md-4 mb-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5>Glenfield Opticians</h5>
            <p>
              Glenfield Opticians Leicester is a trading name of Glenfield Eyecare Limited.<br />
              Registered in England company registration number #06670441<br />
              Registered Office: 93 Dominion Road, Glenfield, Leicestershire, LE3 8JB<br />
              VAT No: 11693155<br />
              GOC Registration Number: CO-3663
            </p>
            <p className="mt-2">
              <strong>Contact:</strong><br />
              <motion.a
                href="mailto:info@glenfieldopticians.co.uk"
                className="text-decoration-none text-black d-inline-block mb-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                info@glenfieldopticians.co.uk
              </motion.a>
              <br />
              <motion.a
                href="tel:01162874357"
                className="text-decoration-none text-black d-inline-block"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="bi bi-telephone-fill me-2"></i>
                +44 116 287 4357
              </motion.a>
              <br />
              <motion.a
                href="tel:+447860479997"
                className="text-decoration-none text-black d-inline-block"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="bi bi-telephone-fill me-2"></i>
                +44 7860 479997
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
            className="col-md-4 mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          {/* Social Icons */}
          <motion.div
            className="col-md-4 mb-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              {[
                { href: "https://www.facebook.com/Glenfield-Opticians-1562092864044502/", icon: "facebook" },
                { href: "https://twitter.com/glenfieldeyecar", icon: "twitter" },
                { href: "https://www.instagram.com/glenfield_eyecare?igsh=MXczN3U5MXE3OHV0aQ==", icon: "instagram" },
              ].map(({ href, icon }, i) => (
                <motion.li
                  key={i}
                  className="list-inline-item me-3"
                  whileHover={{ scale: 1.3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <a href={href} target="_blank" rel="noreferrer" className="text-black">
                    <i className={`bi bi-${icon}`}></i>
                  </a>
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
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="col-md-6 text-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Glenfield Opticians. All rights reserved.</p>
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
              <img src={annexsysLogo} alt="AnnexSys Logo" style={{ maxHeight: '80px' }} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
