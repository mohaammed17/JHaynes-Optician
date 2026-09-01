import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const HomeVisit = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 text-primary">Home Visit</h2>
        <div className="card shadow rounded-4">
          <div className="card-body p-4">
            <p className="mt-4 lead fw-semibold">Eye examinations at the comfort of your home</p>
            <p className="text-muted">
              We have been awarded a contract by the NHS to provide eye care services at the comfort of your own home,
              designed for those who cannot visit our practice unaccompanied due to physical or mental disability. We carry
              out complete eye tests and provide the same special offers on glasses that are currently available at our
              practise.
            </p>
    
            <h5 className="mt-4 text-info">How does eye care at home work?</h5>
            <p className="text-muted">
              The first thing to do is make an appointment. This can be for you or for someone you know. Simply call us on
              <strong> 0116 2874357</strong> or <strong>07860479997</strong>, and we'll take a few details to ensure that
              you, or the person you are calling on behalf of, are eligible for a free home eye test. We'll then arrange a
              convenient time to visit the patient, either in their own home or in a care home.
            </p>
            <p className="text-muted">
              Our optometrist is fully trained and experienced and use equipment that has been specially designed for use
              at homes, so our visit will cause as little disruption as possible.
            </p>
            <p className="text-muted">
              If the eye test shows that the patient needs glasses, they'll be able to choose from a huge range and take
              advantage of any offer that's available in practice. The patient may also be entitled to NHS funding with the
              cost of their glasses. We can explain this during our visit.
            </p>
    
            <h5 className="mt-4 text-info">Who's eligible for a free home eye test?</h5>
            <p className="text-muted">
              England and Wales customers qualify for a free NHS eye test at home if they are unable to visit an optician 
              unaccompanied due to physical or mental disability and are any of the following:
            </p>
            <ul className="text-muted">
              <li>Age 60 or over</li>
              <li>Registered blind or partially sighted</li>
              <li>Diagnosed with diabetes or glaucoma</li>
              <li>Considered to be at risk of glaucoma</li>
              <li>As advised by an optician</li>
              <li>Aged 40 or over and have a close family history of glaucoma</li>
              <li>Receiving benefits such as Income Support or Pension Credit Guarantee Credit</li>
              <li>Named on a valid NHS tax credit exemption certificate</li>
              <li>Named on a valid HC2 (full help) or HC3 (partial help) certificate</li>
              <li>Eligible for an NHS complex lens voucher (our optician will advise)</li>
            </ul>
    
            <p className="mt-4 text-muted">They may also be entitled to NHS support with the cost of their glasses.</p>
    
            <div className="text-center mt-4">
              <Link to="/book-appointment" className="btn btn-primary btn-lg rounded-pill shadow-sm">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVisit;
