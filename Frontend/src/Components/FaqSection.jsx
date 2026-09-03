import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: 'Is an online appointment request confirmed immediately?',
    answer: (
      <>
        No. Your preferred date and time are sent to the practice, and the team will contact you to confirm
        availability. You can <Link to="/book-appointment">request an appointment here</Link>.
      </>
    ),
  },
  {
    question: 'Do you provide NHS-funded sight tests?',
    answer: (
      <>
        Yes, NHS-funded sight tests are available for eligible patients. You can read the current eligibility
        guidance on the{' '}
        <a
          href="https://www.nhs.uk/nhs-services/opticians/free-nhs-eye-tests-and-optical-vouchers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NHS website
        </a>
        .
      </>
    ),
  },
  {
    question: 'Are children eligible for free NHS eye tests?',
    answer: 'Children under 16, and young people aged 16 to 18 in full-time education, are eligible for NHS-funded sight tests.',
  },
  {
    question: 'Can I arrange an eye test at home?',
    answer: (
      <>
        Home visits may be available for eligible patients who cannot visit the practice unaccompanied because of
        physical or mental illness or disability. See our <Link to="/home-visit">Home Visit service</Link>.
      </>
    ),
  },
  {
    question: 'Do you fit and supply contact lenses?',
    answer: (
      <>
        Yes. We offer new fittings, handling guidance and aftercare for several types of contact lenses. Find out
        more on our <Link to="/contactlenses">Contact Lenses page</Link>.
      </>
    ),
  },
  {
    question: 'When is the practice open?',
    answer: 'We are open Tuesday morning and Wednesday to Friday during the day. Monday and Saturday visits are by appointment only, and we are closed on Sundays and bank holidays.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="faq-section py-5" aria-labelledby="faq-heading">
      <div className="container">
        <div className="text-center mb-4">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="text-muted mb-0">Quick answers to common questions before your visit.</p>
        </div>

        <div className="faq-list mx-auto">
          {faqItems.map(({ question, answer }, index) => (
            <details className="faq-item" key={question} open={index === 0}>
              <summary>
                <span>{question}</span>
                <i className="bi bi-plus-lg" aria-hidden="true" />
              </summary>
              <div className="faq-answer">{answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
