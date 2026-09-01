import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.bmp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function Navbar() {
  const [top, setTop] = useState(true);
  const collapseRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => setTop(window.pageYOffset <= 5);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleNavLinkClick = () => {
    if (collapseRef.current && collapseRef.current.classList.contains("show")) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <motion.header
      className={`main-navbar fixed-top ${top ? '' : 'scrolled'}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
        <div className="container-fluid px-4">
          {/* Brand/Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <motion.img
              src={logo}
              alt="logo"
              className="logo-img me-2 rounded shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1, rotate: 0 }}  // Ensures no tilt when tapped
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            // Remove data-bs-* attributes to avoid automatic handling
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              if (collapseRef.current) {
                const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
                if (bsCollapse) {
                  bsCollapse.toggle();
                } else {
                  new window.bootstrap.Collapse(collapseRef.current, { toggle: true });
                }
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div ref={collapseRef} className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'Eye Care', to: '/eyecare' },
                { label: 'Contact Lenses', to: '/contactlenses' },
                { label: 'Special Offers', to: '/specialoffers' },
                { label: 'Children Zone', to: '/childrenzone' }
              ].map((link, i) => (
                <motion.li className="nav-item" key={i} whileHover={{ scale: 1.1 }}>
                  <NavLink to={link.to} className="nav-link" onClick={handleNavLinkClick}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}

              <li className="nav-item dropdown">
                <motion.a
                  className="nav-link d-flex align-items-center gap-1"
                  href="#"
                  data-bs-toggle="dropdown"
                  whileHover={{ scale: 1.05 }}
                >
                  Services <i className="bi bi-caret-down-fill"></i>
                </motion.a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/freeeyetest" className="dropdown-item" onClick={handleNavLinkClick}>
                      Eye Examination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dispensingofeyeglasses" className="dropdown-item" onClick={handleNavLinkClick}>
                      Dispensing of Eye Glasses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/corporate-eye-care" className="dropdown-item" onClick={handleNavLinkClick}>
                      Corporate Eye Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/home-visit" className="dropdown-item" onClick={handleNavLinkClick}>
                      Home Visit
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hearing-test" className="dropdown-item" onClick={handleNavLinkClick}>
                      Hearing Test
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cataract-and-other-referrals" className="dropdown-item" onClick={handleNavLinkClick}>
                      Cataract & Other Referrals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact-lens-consultation" className="dropdown-item" onClick={handleNavLinkClick}>
                      Contact Lens Consultation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sale-of-optical-product" className="dropdown-item" onClick={handleNavLinkClick}>
                      Sale of Optical Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/safety-glasses" className="dropdown-item" onClick={handleNavLinkClick}>
                      Safety Glasses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/glazing-of-spectacles" className="dropdown-item" onClick={handleNavLinkClick}>
                      Glazing of Spectacles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/optical-coherence-tomography" className="dropdown-item" onClick={handleNavLinkClick}>
                      Optical Coherence Tomography (OCT)
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Book Button */}
            <motion.div className="d-flex justify-content-lg-end justify-content-center" whileHover={{ scale: 1.05 }}>
              <NavLink to="/book-appointment" className="btn btn-primary px-3 py-2 rounded-pill border-0 shadow-sm" onClick={handleNavLinkClick}>
                Book an Appointment 
              </NavLink>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
