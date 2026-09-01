import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SaleOfOpticalProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Optical Products & Accessories</h2>
          <p className="lead text-muted">Extensive Range of Eyewear and Vision Care Essentials</p>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                At Glenfield Opticians, we take pride in offering a wide and carefully curated selection of optical products to meet the diverse needs of our patients. With over 500 frame styles available on display, you’ll find something to suit every age, face shape, and personal style.
              </p>
              <h5 className="mt-4 text-info">Eyewear Collection</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Our collection includes frames for men, women, and children, available in a variety of styles including full-rim, semi-rimless, and rimless designs. We offer options crafted in both metal and plastic, featuring designer as well as budget-friendly choices, along with a broad range of sunglasses for everyday and prescription use.
              </p>
              <h5 className="mt-4 text-info">Contact Lenses</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                We supply a wide variety of contact lenses to cater to your visual and lifestyle needs, including daily disposable lenses, as well as monthly and yearly conventional lenses. We also offer Gas Permeable (GP) lenses, complemented by essential contact lens accessories such as storage cases, cleaning solutions, eye drops, and suction cups.
              </p>
              <h5 className="mt-4 text-info">Accessories & Vision Aids</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                We also stock a range of eyewear accessories and visual aids – from glasses cases, chains, cords, and lens cleaning cloths to cleaning solutions, stick-on bifocals, ready readers, sunglass clip-ons, and various magnifiers designed to enhance your reading experience.
              </p>
              <h5 className="mt-4 text-info">Specialised Products</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                In addition, we offer prescription swimming goggles and sports glasses, as well as prescription safety eyewear that complies with BS EN ISO 9001 and AS9100 standards for industrial use.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Whether you need everyday eyewear, specialised vision aids, or accessories to support your eye care routine, our team is here to help you find exactly what you need with expert advice and professional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleOfOpticalProduct;