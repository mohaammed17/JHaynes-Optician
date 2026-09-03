import { Link } from 'react-router-dom';

const openingTimes = [
  ['Monday', 'By appointment only'],
  ['Tuesday', '9:30 am to 1:00 pm'],
  ['Wednesday', '10:00 am to 4:00 pm'],
  ['Thursday', '10:00 am to 4:00 pm'],
  ['Friday', '10:00 am to 4:00 pm'],
  ['Saturday', 'By appointment only'],
  ['Sunday', 'Closed'],
];

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero py-5" aria-labelledby="contact-heading">
        <div className="container text-center">
          <p className="section-kicker mb-2">We’re here to help</p>
          <h1 id="contact-heading" className="page-title">Contact J Haynes Optician</h1>
          <p className="lead text-muted contact-intro mx-auto">
            Speak to our friendly team, request an appointment or plan your visit to our Loughborough practice.
          </p>
        </div>
      </section>

      <section className="contact-details-section pb-5" aria-label="Contact details">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <a className="contact-detail-card h-100" href="tel:01509260023">
                <span className="contact-detail-icon"><i className="bi bi-telephone-fill" aria-hidden="true" /></span>
                <h2 className="h5">Call us</h2>
                <span>01509 260023</span>
              </a>
            </div>
            <div className="col-md-4">
              <a className="contact-detail-card h-100" href="mailto:jhaynesoptician@gmail.com">
                <span className="contact-detail-icon"><i className="bi bi-envelope-fill" aria-hidden="true" /></span>
                <h2 className="h5">Email us</h2>
                <span>jhaynesoptician@gmail.com</span>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="contact-detail-card h-100"
                href="https://share.google/23I8ABdBMp5cA5UcN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-detail-icon"><i className="bi bi-geo-alt-fill" aria-hidden="true" /></span>
                <h2 className="h5">Visit us</h2>
                <address className="mb-0">35 High Street, Loughborough, Leicestershire, LE11 2PZ</address>
              </a>
            </div>
          </div>

          <div className="contact-actions d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Link className="btn btn-primary px-4" to="/book-appointment">Request an Appointment</Link>
            <a
              className="btn btn-success px-4"
              href="https://wa.me/447860479997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp me-2" aria-hidden="true" />WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="contact-visit-section py-5 bg-light" aria-labelledby="visit-heading">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="card rounded-4 p-4 h-100">
                <h2 id="visit-heading" className="text-start">Opening Times</h2>
                <dl className="opening-hours-list mb-3">
                  {openingTimes.map(([day, hours]) => (
                    <div className="opening-hours-row" key={day}>
                      <dt>{day}</dt>
                      <dd>{hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="small text-muted mb-0"><strong>Closed on bank holidays.</strong></p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-map h-100">
                <iframe
                  src="https://www.google.com/maps?q=J%20Haynes%20Optician%2C%2035%20High%20Street%2C%20Loughborough%2C%20LE11%202PZ&output=embed"
                  title="Map showing J Haynes Optician in Loughborough"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://share.google/23I8ABdBMp5cA5UcN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
