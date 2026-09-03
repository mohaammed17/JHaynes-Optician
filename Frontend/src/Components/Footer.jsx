import React from 'react';
import { Link } from 'react-router-dom';
import annexsysLogo from '../assets/Annexsyslogo.webp';

export default function Footer() {
  return (
    <footer className="site-footer d-flex mt-auto pt-5">
      <div className="container-fluid px-5">
        <div className="row">
          {/* About Us + Contact Info */}
          <div className="col-md-6 mb-3">
            <h5>J Haynes Optician</h5>
            <p>
              Zahra Eyecare Ltd trading as J Haynes Optician.<br />
              Company registration number: 12927169<br />
              GOC number: CO-33453<br />
              35 High Street, Loughborough, Leicestershire, LE11 2PZ
            </p>
            <p className="mt-2">
              <strong>Contact:</strong><br />
              <a
                href="mailto:jhaynesoptician@gmail.com"
                className="text-decoration-none text-black d-inline-block mb-2"
              >
                <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i>
                jhaynesoptician@gmail.com
              </a>
              <br />
              <a
                href="tel:01509260023"
                className="text-decoration-none text-black d-inline-block"
              >
                <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
                01509 260023
              </a>
            </p>
            <a
              href="https://wa.me/447860479997"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '1.2rem' }} aria-hidden="true"></i>
              WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
               {[
                { path: "/privacy-policy", label: "Privacy Policy" },
                { path: "/freedom-of-information", label: "Freedom of Information" },
                { path: "/terms-and-conditions", label: "Terms and Conditions" },
                { path: "/contact", label: "Contact Us" },
                { path: "/book-appointment", label: "Request an Appointment" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-decoration-none text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="mb-4 border-dark" />

        {/* Footer Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} J Haynes Optician. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end d-flex justify-content-end align-items-center">
            <span className="me-2">Developed by</span>
            <a
              href="https://annexsys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
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
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
