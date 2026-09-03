import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import logo from '../assets/j-haynes-logo.webp';

function Navbar() {
  const [top, setTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const collapseRef = useRef(null);

  useEffect(() => {
    let frameRequested = false;
    const scrollHandler = () => {
      if (frameRequested) return;

      frameRequested = true;
      window.requestAnimationFrame(() => {
        const nextTop = window.pageYOffset <= 5;
        setTop((currentTop) => currentTop === nextTop ? currentTop : nextTop);
        frameRequested = false;
      });
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleNavLinkClick = () => {
    if (collapseRef.current && collapseRef.current.classList.contains("show")) {
      const bsCollapse = Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className={`main-navbar fixed-top navbar-enter ${top ? '' : 'scrolled'}`}>
    <nav className="site-navbar navbar navbar-expand-lg py-2">
        <div className="container-fluid px-4">
          {/* Brand/Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="J Haynes Optician"
              className="logo-img me-2 rounded shadow-sm"
              width="900"
              height="145"
              decoding="async"
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            // Remove data-bs-* attributes to avoid automatic handling
            aria-controls="navbarContent"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => {
              if (collapseRef.current) {
                const bsCollapse = Collapse.getOrCreateInstance(collapseRef.current, { toggle: false });
                if (collapseRef.current.classList.contains('show')) {
                  bsCollapse.hide();
                  setMenuOpen(false);
                } else {
                  bsCollapse.show();
                  setMenuOpen(true);
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
                { label: 'Children Zone', to: '/childrenzone' },
                { label: 'Contact', to: '/contact' }
              ].map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink to={link.to} className="nav-link" onClick={handleNavLinkClick}>
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li className="nav-item dropdown">
                <button
                  className="nav-link nav-dropdown-toggle d-flex align-items-center gap-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                >
                  Services <i className="bi bi-caret-down-fill" aria-hidden="true"></i>
                </button>
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
            <div className="d-flex justify-content-lg-end justify-content-center">
              <NavLink to="/book-appointment" className="btn btn-primary px-3 py-2 rounded-pill border-0 shadow-sm" onClick={handleNavLinkClick}>
                Book an Appointment
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
