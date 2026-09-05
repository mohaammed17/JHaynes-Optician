import React, { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'bootstrap/js/dist/carousel';
import Testimonials from '../Components/Testimonials';
import TrustSection from '../Components/TrustSection';
import FaqSection from '../Components/FaqSection';
import { Link } from 'react-router-dom';

import slide1 from '../assets/slide1.webp';
import homevisitng from '../assets/homevisitng.webp';
import slide3 from '../assets/slide3.webp';
import brandGraphic from '../assets/mustafa-eye.webp';
import blueBlock from '../assets/bluelock.webp';
import photofun from '../assets/photofun.webp';
import safetywear from '../assets/safetywear.webp';
import audiologist from '../assets/audiologist.webp';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    const setupTimer = window.setTimeout(() => {
      const carouselElement = document.getElementById('carouselExampleIndicators');
      if (carouselElement) {
        Carousel.getOrCreateInstance(carouselElement, {
          interval: 5000,
          ride: 'carousel',
          pause: 'hover'
        });
      }
    }, 100);

    return () => window.clearTimeout(setupTimer);
  }, []);

  const slides = [
    {
      image: slide1,
      title: "Welcome to J Haynes Optician",
      subtitle: "Your trusted local optician in Loughborough",
      button: "Learn More",
      path: "#about"
    },
    {
      image: homevisitng,
      title: "Your Home Visiting Optician",
      subtitle: "Bringing quality eyecare to your doorstep",
      button: "Request an Appointment",
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
      title: "J Haynes Optician",
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
      imagePosition: "32% 28%",
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
              if (slide.image === blueBlock) {
                return (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="carousel-slide-wrapper carousel-dual-slide">
                      <div className="carousel-overlay" />
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-dual-images" aria-hidden="true">
                          <img
                            src={blueBlock}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <img
                            src={photofun}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="carousel-content text-center position-absolute w-100">
                          <h2 className="carousel-heading text-white fw-bold">Advanced Lens Solutions</h2>
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
                return (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="carousel-slide-wrapper">
                      <img
                        className="carousel-bg-image"
                        src={slide.image}
                        alt=""
                        aria-hidden="true"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : 'low'}
                        decoding={index === 0 ? 'sync' : 'async'}
                        style={{ objectPosition: slide.imagePosition || 'center' }}
                      />
                      <div className="carousel-overlay" />
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-content text-center">
                          {index === 0 ? (
                            <h1 className="carousel-heading text-white fw-bold">{slide.title}</h1>
                          ) : (
                            <h2 className="carousel-heading text-white fw-bold">{slide.title}</h2>
                          )}
                          <p className="text-light fs-5" dangerouslySetInnerHTML={{ __html: slide.subtitle }} />
                          {slide.path.startsWith('#') ? (
                            <a href={slide.path} className="btn btn-primary mt-3">{slide.button}</a>
                          ) : (
                            <Link to={slide.path} className="btn btn-primary mt-3">{slide.button}</Link>
                          )}
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
        <div className="row justify-content-center mx-0">
          <div className="col-12 col-md-10 col-lg-8 mb-4">
            <div data-aos="zoom-in-up" className="card h-100 shadow-sm border-0 rounded-4 p-3">
              <h2 className="h5 fw-bold text-info text-center"><strong>About Us</strong></h2>
              <p className="text-muted fw-bold" style={{ textAlign: 'justify' }}>
                We are an independent optician in Loughborough, dedicated to looking after your eyes. We pride ourselves on providing a professional, personal, and friendly service to the community, which may not always be possible at regular high-street practices. Whether you require spectacles or not, we are committed to delivering the highest level of eye care. We offer private eye care and have been awarded a contract by the National Health Service (NHS) to provide NHS-funded eye-care services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

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
                  <td>By appointment only</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9:30 am to 1:00 pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>10:00 am to 4:00 pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>10:00 am to 4:00 pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>10:00 am to 4:00 pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>By appointment only</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <strong>Closed on bank holidays.</strong>
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
                    <i className="bi bi-hospital fs-1 text-primary"></i>
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

      <FaqSection />

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container">
          <div data-aos="fade-up" className="text-center mb-4">
            <h2 className="text-primary fw-bold">Google Reviews</h2>
            <p className="text-muted mb-0">Selected summaries from five-star customer reviews</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Find Us Section */}
      <section className="location-section py-5">
        <div data-aos="zoom-in-up" className="container text-center">
          <h2>Find Us</h2>
          <p>35 High Street, Loughborough, Leicestershire, LE11 2PZ</p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.google.com/maps?q=J%20Haynes%20Optician%2C%2035%20High%20Street%2C%20Loughborough%2C%20LE11%202PZ&output=embed"
              height="300"
              style={{ width: "100%", border: 0 }}
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="J Haynes Optician location"
            ></iframe>
          </div>
          <a
            href="https://share.google/23I8ABdBMp5cA5UcN"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
