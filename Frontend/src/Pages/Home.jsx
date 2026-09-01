import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from '../Components/Testimonials';
import { Link } from 'react-router-dom';

import slide1 from '../assets/slide1.png';
import homevisitng from '../assets/homevisitng.png';
import slide3 from '../assets/slide3.jpg';
import brandGraphic from '../assets/mustafa-eye.jpeg';
import blueBlock from '../assets/bluelock.jpeg';  // Blue Block main image
import photofun from '../assets/photofun.jpeg';     // Second image for Blue Block slide
import safetywear from '../assets/safetywear.png'; // New Safety Eyewear image
import audiologist from '../assets/audiologist.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const carouselElement = document.getElementById('carouselExampleIndicators');
      if (carouselElement && window.bootstrap) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel',
          pause: 'hover'
        });
      }
    }, 100); // adjust the delay as needed
  }, []);

  const slides = [
    {
      image: slide1,
      title: "Welcome to Glenfield Opticians",
      subtitle: "Your trusted local optician in Leicester",
      button: "Learn More",
      path: "#about"
    },
    {
      image: homevisitng,
      title: "Your Home Visiting Optician",
      subtitle: "Bringing quality eyecare to your doorstep",
      button: "Book a Visit",
      path: "/book-appointment"
    },
    {
      image: slide3,
      title: "Try Contacts for Free!",
      subtitle: "One-month free trial for new users",
      button: "Get Trial",
      path: "/book-appointment"
    },
    {
      image: brandGraphic,
      title: "Glenfield Opticians",
      subtitle: "Your local community optometrist.",
      button: "Our Services",
      path: "#services"
    },
    {
      image: blueBlock,
      title: "BLUEBLOCK",
      subtitle: "Reduces Digital Eye Strain!<br>Effective Protection: Blocks 98% of blue rays.",
      button: "Get Blue Block Lenses",
      path: "/blueblock"
    },
    {
      // Updated Safety Eyewear slide with a shorter subtitle
      image: safetywear,
      title: "SAFETY EYEWEAR",
      subtitle: "Essential protection for industrial environments.",
      button: "Learn More",
      path: "/safety-glasses"
    },
    {
      // New slide for Hearing Test & Audiology Services
      image: audiologist,
      title: "Hearing Test & Audiology Services",
      subtitle: "Check Your Hearing Today - Expert Care You Can Trust",
      button: "Learn More",
      path: "/hearing-test"
    }
  ];

  return (
    <div className="home-page">
      <section className="pt-0 pb-5 mt-0 bg-light">
        {/* Carousel Section */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="hover"
        >
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((slide, index) => {
              // For the Blue Block slide with two images, keep as is.
              if (slide.image === blueBlock) {
                return (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      className="carousel-slide-wrapper"
                      style={{ height: '500px', backgroundColor: '#000' }}
                    >
                      <div className="carousel-overlay" />
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                          <img
                            src={blueBlock}
                            alt="Blue Block Lenses Advertisement"
                            style={{ width: '50%', height: '500px', objectFit: 'contain' }}
                          />
                          <img
                            src={photofun}
                            alt="PhotoFun UV3G Hyper Protective Lens Advertisement"
                            style={{ width: '50%', height: '500px', objectFit: 'contain' }}
                          />
                        </div>
                        <div className="carousel-content text-center position-absolute w-100" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                          <h1 className="text-white fw-bold">Advanced Lens Solutions</h1>
                          <p className="text-light fs-5">
                            Dual protection for modern lifestyles.<br />
                            Reduce digital strain indoors and enjoy adaptive clarity outdoors.
                          </p>
                          <a href="#services" className="btn btn-primary mt-3">
                            Discover Our Advanced Lenses
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Default slide layout for non-blueBlock slides - change backgroundSize to cover for the Safety Eyewear slide as well.
                const slideStyle = {
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '500px'
                };
                return (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      className="carousel-slide-wrapper"
                      style={slideStyle}
                    >
                      <div className="carousel-overlay" />
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-content text-center">
                          <h1 className="text-white fw-bold">{slide.title}</h1>
                          <p className="text-light fs-5" dangerouslySetInnerHTML={{ __html: slide.subtitle }} />
                          <a href={slide.path} className="btn btn-primary mt-3">
                            {slide.button}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Rest of your content */}
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 mb-4">
            <div data-aos="zoom-in-up" className="card h-100 shadow-sm border-0 rounded-4 p-3">
              <h5 className="fw-bold text-info text-center"><strong>About Us</strong></h5>
              <p className="text-muted fw-bold" style={{ textAlign: 'justify' }}>
                We are independent opticians in Glenfield, Leicester, and since 2009 we have been dedicated to looking after your eyes. We pride ourselves on providing a professional, personal, and friendly service to the community, which may not always be possible at regular high-street practices. Whether you require spectacles or not, we are committed to delivering the highest level of eye care. We offer private eye care and have been awarded a contract by the National Health Service (NHS) to provide NHS-funded eye-care services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Times Section */}
      <section className="opening-times-section py-5 bg-light">
        <div data-aos="zoom-in-up" className="container text-center">
          <h2 className="mb-4">Opening Times</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-primary">
                <tr>
                  <th>Day</th>
                  <th>Opening Times</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>9.30am to 5.00pm</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9.30am to 5.00pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>9.30am to 5.00pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>9.30am to 5.00pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9.30am to 5.00pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>By appointments only</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <strong>Closed on Sundays, bank holidays, and between 12:00 PM and 2:00 PM on Fridays.</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="services-section py-5">
        <div data-aos="zoom-in-up" className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          
          <div className="row">
            {/* Eye Tests */}
            <div className="col-md-3 mb-4">
              <Link to="/freeeyetest" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-eyeglasses fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Eye Tests</h5>
                    <p className="card-text">Comprehensive eye tests at your home or in-clinic.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Home Visits */}
            <div className="col-md-3 mb-4">
              <Link to="/home-visit" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-house-door fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Home Visits</h5>
                    <p className="card-text">We bring quality care to your doorstep.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Dispensing of Eye Glasses */}
            <div className="col-md-3 mb-4">
              <Link to="/dispensingofeyeglasses" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-bag fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Dispensing of Eye Glasses</h5>
                    <p className="card-text">Choose from over 500 frames with expert guidance.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Cataract & Other Referrals */}
            <div className="col-md-3 mb-4">
              <Link to="/cataract-and-other-referrals" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="fa fa-hospital-o fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Cataract & Other Referrals</h5>
                    <p className="card-text">Direct referrals to hospital without GP involvement.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="row">
            {/* Contact Lens Consultation */}
            <div className="col-md-3 mb-4">
              <Link to="/contact-lens-consultation" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-eye fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Contact Lens Consultation</h5>
                    <p className="card-text">Thorough testing and training for contact lenses.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Corporate Eye Care */}
            <div className="col-md-3 mb-4">
              <Link to="/corporate-eye-care" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-laptop fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Corporate Eye Care</h5>
                    <p className="card-text">On-site eye care services for companies and employees.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Sale of Optical Product */}
            <div className="col-md-3 mb-4">
              <Link to="/sale-of-optical-product" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-shop fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Sale of Optical Product</h5>
                    <p className="card-text">A wide range of frames, lenses, and accessories.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Hearing Test */}
            <div className="col-md-3 mb-4">
              <Link to="/hearing-test" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-ear fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Hearing Test</h5>
                    <p className="card-text">Professional hearing assessments by specialists.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="row">
            {/* Safety Glasses */}
            <div className="col-md-3 mb-4">
              <Link to="/safety-glasses" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-shield-check fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Safety Glasses</h5>
                    <p className="card-text">Protective eyewear to safeguard your vision in hazardous environments.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Glazing of Spectacles */}
            <div className="col-md-3 mb-4">
              <Link to="/glazing-of-spectacles" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-tools fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">Glazing of Spectacles</h5>
                    <p className="card-text">New lenses fitted into your existing frames for a cost-effective vision update.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Optical Coherence Tomography (OCT) */}
            <div className="col-md-3 mb-4">
              <Link to="/optical-coherence-tomography" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 shadow-sm bg-white service-item">
                  <div className="card-body text-center">
                    <i className="bi bi-camera-video fs-1 text-primary"></i>
                    <h5 className="card-title mt-3">OCT</h5>
                    <p className="card-text">Advanced retinal imaging for early detection of eye conditions.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Extra empty column to fill the row for spacing consistency */}
            <div className="col-md-3 mb-4"></div>
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container">
          <div data-aos="fade-up" className="text-center mb-4">
            <h2 className="text-primary fw-bold">Testimonials</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Find Us Section */}
      <section className="location-section py-5">
        <div data-aos="zoom-in-up" className="container text-center">
          <h2>Find Us</h2>
          <p>93 Dominion Road, Glenfield, Leicestershire, LE3 8JB</p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.620340897055!2d-1.196255084188007!3d52.64499317984143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775e1878d02ad9%3A0xef2a72f482e58b6d!2sGlenfield%20Opticians!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              height="300"
              style={{ width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glenfield Opticians Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
