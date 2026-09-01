import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import slide2 from '../assets/slide2.png';
import img1 from '../assets/img1.jpg'; // background image for Glasses & Lenses
import mustafaKid from '../assets/mustafa-kid.jpeg'; // new promotional image

const ChildrenZone = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-primary">Children's Eye Care Service</h2>
          <p className="lead text-muted">Your child's eye health taken care of</p>
        </div>

        <div className="row g-4">
          {/* "Why Children’s Eye Care Matters" card */}
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className="card shadow border-0 rounded-4 p-4 h-100"
              style={{
                background: `linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${slide2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div
                className="card-body"
                style={{
                  color: "#111",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)"
                }}
              >
                <h5 className="text-info fw-bold" style={{ fontSize: '1.75rem' }}>Why Children’s Eye Care Matters</h5>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  As most schools no longer offer Eye Tests, fewer children are having their eyes checked regularly. That's why we want to make it easy and affordable to ensure your child's eyes are being properly cared for.
                </p>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  Vision and learning are closely related. More than 80% of what children learn is through vision, so diagnosing problems early is extremely important to ensure that children of all ages reach their full academic potential.
                </p>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  With 1 in 5 children having undetected eye problems, we recommend that every child's eyes should be checked at least once a year as part of their overall health regime.
                </p>
                <p className="text-success fw-semibold">
                  Note: In the United Kingdom, all children under the age of 16, and those aged 16 to 18 in full-time education, are entitled to a free eye test and a contribution towards the cost of glasses, funded by the NHS.
                </p>
              </div>
            </div>
          </div>

          {/* "Children’s Glasses & Lenses" card */}
          <div className="col-lg-6" data-aos="fade-left">
            <div
              className="card shadow border-0 rounded-4 p-4 h-100"
              style={{
                background: `linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div
                className="card-body"
                style={{
                  color: "#111",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)"
                }}
              >
                <h5 className="text-info fw-bold" style={{ fontSize: '1.75rem' }}>Children’s Glasses & Lenses</h5>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  All of our frames offer exceptional durability and comfort, not to mention features like sprung hinges and memory metals.
                </p>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  Our collections are handpicked to include stylish designs from various brands, so your child feels confident wearing their glasses.
                </p>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  All children’s lenses include scratch-resistant coating as standard. Based on their lifestyle or prescription, we may also recommend specialized lenses to enhance durability and comfort.
                </p>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  We also offer sports glasses and contact lenses for children.
                </p>
                <div className="text-center mt-3">
                  <a href="/book-appointment" className="btn btn-primary px-4">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Promotional Block */}
        <div data-aos="fade-up" className="mt-5 p-4 border rounded bg-white shadow-sm">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="text-primary fw-bold">Don't Underestimate Your Child's Eyecare</h2>
              <p className="lead text-muted">
                A bright smile begins with great vision. Ensure your child’s eyes are well cared for – book a sight test today!
              </p>
              <p className="fs-4 fw-bold">
                Call: <span style={{ color: '#0d6efd' }}>0116 287 4357</span>
              </p>
            </div>
            <div className="col-md-4">
              <img 
                src={mustafaKid} 
                alt="Child with eyeglasses" 
                className="img-fluid rounded" 
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ChildrenZone;
