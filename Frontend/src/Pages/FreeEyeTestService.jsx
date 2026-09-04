import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import eyeExamImage from '../assets/eyeexam.webp';

const FreeEyeTestService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: () => window.innerWidth < 768, // disable AOS on devices with width less than 768px
    });
  }, []);
  
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-primary">Free Eye Test</h2>
          <p className="lead text-muted">Check your eligibility for a free NHS sight test</p>
        </div>

        {/* New Comprehensive Eye Examination Replacement Section */}
        <div className="row mb-5" data-aos="fade-up" data-aos-offset="100">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              {/* New Content Start */}
              <h5 className="text-info fw-bold mb-3">The importance of regular eye examinations</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Your eyesight is your most precious sense and deserves the highest standards of professional care.
                After all, without good vision it is difficult to enjoy most everyday activities, including reading, driving and watching TV.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                But poor sight may also indicate the presence of potentially serious eye diseases such as glaucoma and macular degeneration, or general health problems like diabetes and high blood pressure.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Because eye conditions often develop slowly and can be painless, you may not notice any initial symptoms. That’s why it is essential to have your eyes examined regularly by an optometrist or ophthalmic medical practitioner. The sooner any problem is detected, the greater the chance of it being treated successfully.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                This leaflet explains what happens during an eye examination at our practice and how we will take care of your vision. We recommend that you read it carefully as it will help you to understand and look after your eyesight.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                If you have any concerns about your vision, you should contact us immediately. We provide quality eyecare and will always take as much time as necessary to examine your eyes thoroughly and answer any questions you may have.
              </p>
              
              <h5 className="text-info fw-bold mt-4 mb-3">Your eye examination explained</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                There is much more to your eye examination at our practice than finding out if you need spectacles or contact lenses. We also carry out a range of tests to assess the health of your eyes. And because everyone’s eyesight is different, we tailor the eye examination to your individual circumstances. This may include the following elements and other tests where appropriate, based on our professional evaluation of your visual requirements.
              </p>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ History and symptoms:</strong> First of all, we discuss any problems you might have with your eyesight and general health. Many eye conditions are health-related and it is important that you let us know if you are taking any medicines as these may affect your vision. To assess your visual needs, we also discuss your work and leisure activities.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Spectacles assessment:</strong> If you already wear spectacles or contact lenses, you should bring these to your appointment. We will then check the lenses to establish their type, optical power, and how well you can see with them.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Refraction:</strong> This part of the examination finds out whether you need an optical prescription and, if so, which lenses give you the best vision. We check your near vision (for reading), your distance vision (for driving or TV) and your intermediate vision (for hobbies or computer work). These refraction tests will reveal if you are short-sighted, long-sighted, presbyopic or have astigmatism. As everyone’s vision changes over time you may experience one or more of the above conditions. However, all can be corrected with spectacles or contact lenses.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Oculomotor balance:</strong> It is important that your eye muscles work together. This test checks that both your eyes are coordinated and that you have comfortable vision at all distances.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Pupil reflexes:</strong> The pupil controls the amount of light reaching the retina at the back of your eye and so affects images seen by the brain. An unusual pupil reflex may indicate neurological problems.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Intraocular pressure:</strong> This test measures the pressure inside your eyes. Too much pressure can indicate glaucoma, a disease which eventually leads to blindness if untreated. The test is usually carried out on people over 40 or those with glaucoma in the family. The results are evaluated in conjunction with a visual field test and ophthalmoscopy.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Visual field test:</strong> Testing your all-round vision can detect glaucoma and other neurological conditions. Particular attention is paid to your peripheral sight as losing your field of vision is one of the main signs of glaucoma.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ External and Internal examination:</strong> This is a very important part of your examination because it checks the health of your eyes, both internally and externally. This is done using instruments called a slit lamp and an ophthalmoscope. These enable us to see the internal parts clearly—such as your lens, retina, and optic nerve—and to check for problems like diabetes, cataracts, hypertension, glaucoma, and macular degeneration. In many cases, we may put drops in your eyes to dilate the pupils, giving us a better view of the back of the eye. We may also perform an OCT (Optical Coherence Tomography) scan for better diagnosis.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <p><strong>■ Visual Assessment:</strong> When your eye examination is finished, we give you an explanation of your vision and your eye health, plus a copy of your optical prescription. We then recommend a time for your next eye examination based on your visual needs. Our optometrist will also be happy to answer any questions you may have about your sight and the eye examination.</p>
                  </div>
                </div>
              </div>
              
              <h5 className="text-info fw-bold mt-4 mb-3">Looking after your eyesight</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                The key to good vision is having regular eye examinations. Their importance cannot be overstated because they provide an essential health check as well as helping you to see better with an up-to-date prescription.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                At your appointment you’ll receive expert advice on your vision and on choosing the most suitable eyewear for your needs. As independent opticians we are also free to select the best products from any manufacturer. This means we’re able to provide you with a wide choice of quality frames and advanced lenses at sensible prices.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Our practice offers both NHS and private eye examinations. Many people are also eligible for NHS help with the cost of their glasses, so please ask us for further details.
              </p>
              
              {/* Aesthetic Image */}
              <div className="text-center my-4">
                <img
                  src={eyeExamImage}
                  alt="The key to good vision is having regular eye examinations"
                  className="img-fluid rounded"
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: '60%', objectFit: 'cover' }} // decreased size here
                />
              </div>
              
              <h5 className="text-info fw-bold mt-4 mb-3">WHY YOUR EYE TEST IS IMPORTANT</h5>
              <h6 className="text-info fw-bold mb-2">How we can help you</h6>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Our practice is committed to the highest standards of professional eyecare. This means we will discuss your individual needs, examine your eyes thoroughly, use moder equipment, answer your questions, and offer you eyewear that meets your requirements. As independent opticians we also believe in giving you a friendly and personal service.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Everyone deserves the best possible eyesight at all times. So if you haven't had an eye examination within the last two years, or when specified by your optical practitioner, call us now for an appointment
              </p>
              {/* New Content End */}
            </div>
          </div>
        </div>

        {/* Free Eye Test Eligibility Sections */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card border-0 shadow rounded-4 h-100 p-4 bg-white">
              <h5 className="text-info fw-bold mb-3">You qualify for a free NHS sight test if:</h5>
              <ul className="text-muted small" style={{ textAlign: 'justify' }}>
                <li>You're under 16</li>
                <li>You're under 19 and in full-time education</li>
                <li>You're 60 or over</li>
                <li>You claim benefits such as Universal Credit, Working Tax Credit, Pension Credit, Guarantee Credit, or Employment and Support Allowance.</li>
                <li>You're registered as blind or partially sighted</li>
                <li>You have diabetes or glaucoma</li>
                <li>You're 40+ and a close relative has been diagnosed with glaucoma</li>
                <li>You've been advised by an ophthalmologist you're at risk of glaucoma</li>
                <li>You're a prisoner on leave from prison</li>
                <li>You're eligible for an NHS complex lens voucher</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="card border-0 shadow rounded-4 h-100 p-4 bg-white">
              <h5 className="text-info fw-bold mb-3">
                You're also entitled to free sight tests &amp; help with glasses if:
              </h5>
              <ul className="text-muted small" style={{ textAlign: 'justify' }}>
                <li>You're under 16 or under 19 in full-time education</li>
                <li>You receive Pension Credit Guarantee Credit</li>
                <li>You receive income-based Employment and Support Allowance</li>
                <li>You hold a valid NHS tax credit exemption certificate</li>
                <li>You're named on a valid NHS certificate for full help with health costs (HC2)</li>
                <li>If you're named on an HC3 certificate, partial help may still be available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unified appointment request button */}
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-10 mx-auto text-center">
            <Link to="/book-appointment" className="btn btn-primary px-4">
              Request an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeEyeTestService;
