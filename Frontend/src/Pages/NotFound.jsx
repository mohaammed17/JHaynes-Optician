import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found-page d-flex align-items-center">
      <div className="container text-center">
        <p className="not-found-code mb-2" aria-hidden="true">404</p>
        <h1>We couldn’t find that page</h1>
        <p className="text-muted mx-auto mb-4">
          The address may have changed or been typed incorrectly. You can return home or request an appointment below.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/" className="btn btn-outline-primary">Return Home</Link>
          <Link to="/book-appointment" className="btn btn-primary">Request an Appointment</Link>
        </div>
      </div>
    </section>
  );
}
