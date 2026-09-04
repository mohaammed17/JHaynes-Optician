import { Link } from 'react-router-dom';

export default function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick contact actions">
      <a href="tel:01509260023" className="mobile-action-link">
        <i className="bi bi-telephone-fill" aria-hidden="true" />
        <span>Call</span>
      </a>
      <a
        href="https://wa.me/447860479997"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-link"
      >
        <i className="bi bi-whatsapp" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a
        href="https://share.google/23I8ABdBMp5cA5UcN"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-link"
      >
        <i className="bi bi-geo-alt-fill" aria-hidden="true" />
        <span>Directions</span>
      </a>
      <Link to="/book-appointment" className="mobile-action-link mobile-action-link--primary">
        <i className="bi bi-calendar-check-fill" aria-hidden="true" />
        <span>Request</span>
      </Link>
    </nav>
  );
}
