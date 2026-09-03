const trustItems = [
  {
    icon: 'bi-shop',
    title: 'Independent and local',
    text: 'Providing personal eye care to the Loughborough community since 1993.',
  },
  {
    icon: 'bi-heart-pulse',
    title: 'NHS eye care',
    text: 'NHS-funded sight tests and optical support are available for eligible patients.',
  },
  {
    icon: 'bi-patch-check',
    title: 'GOC registered',
    text: 'Registered with the General Optical Council under number CO-33453.',
  },
  {
    icon: 'bi-people',
    title: 'Care for every age',
    text: 'Friendly support for children, adults, families and home-visit patients.',
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section py-5" aria-labelledby="trust-heading">
      <div className="container">
        <div className="text-center mb-4">
          <h2 id="trust-heading">Why Choose J Haynes Optician?</h2>
          <p className="text-muted trust-intro mx-auto mb-0">
            Professional eye care with the personal attention of an established independent practice.
          </p>
        </div>

        <div className="row g-3">
          {trustItems.map(({ icon, title, text }) => (
            <div className="col-sm-6 col-lg-3" key={title}>
              <article className="trust-card h-100 text-center">
                <span className="trust-icon" aria-hidden="true">
                  <i className={`bi ${icon}`} />
                </span>
                <h3 className="h5 mt-3">{title}</h3>
                <p className="text-muted mb-0">{text}</p>
              </article>
            </div>
          ))}
        </div>

        <p className="trust-registration text-center mt-4 mb-0">
          Zahra Eyecare Ltd trading as J Haynes Optician · Company registration number 12927169
        </p>
      </div>
    </section>
  );
}
