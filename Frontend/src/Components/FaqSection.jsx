import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: 'Is an online appointment request confirmed immediately?',
    answer:
      'Your preferred date and time are sent to the practice, and the team will contact you to confirm availability.',
  },
  {
    question: 'Who is eligible for NHS-funded sight tests and help with the cost of glasses?',
    answer: (
      <>
        Eligibility depends on factors such as your age, circumstances and certain medical conditions. The NHS may
        also provide optical vouchers to help eligible patients with the cost of glasses or contact lenses. Read the
        current eligibility guidance on the{' '}
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
    answer:
      'Children under 16, and young people aged 16 to 18 in full-time education, are eligible for NHS-funded sight tests and help towards the cost of glasses.',
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
        We offer new fittings, handling guidance and aftercare for several types of contact lenses. Find out
        more on our <Link to="/contactlenses">Contact Lenses page</Link>.
      </>
    ),
  },
  {
    question: 'Can you fit new lenses into my existing spectacle frames?',
    answer:
      'Yes. This can include designer frames, provided they are in good condition and suitable for your chosen lens type. We will inspect the frames first and discuss their suitability with you. Glazing places some pressure on a frame, so older, worn or weakened frames may be at greater risk of damage; we will explain any concerns before work begins.',
  },
  {
    question: 'How long does an eye examination take?',
    answer:
      'A standard eye examination usually takes between 30 and 40 minutes. Additional assessments, such as an OCT scan, may require a further 10 to 15 minutes.',
  },
  {
    question: 'How often should I have my eyes tested?',
    answer: (
      <>
        Most people should have an eye examination every two years, or more frequently if advised by their
        optometrist. The recommended interval may vary according to your age, symptoms, eye health and medical
        history. If you notice a change in your vision, contact us rather than waiting for your next routine test.{' '}
        <a
          href="https://www.nhs.uk/nhs-services/opticians/visiting-an-optician/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the NHS guidance
        </a>
        .
      </>
    ),
  },
  {
    question: 'What should I bring to my eye examination?',
    answer:
      'Please bring your current glasses or contact lenses, a copy of your previous prescription if available, and a list of any medicines you take. If you are attending a contact lens consultation, it is preferable to wear your contact lenses to the appointment unless we have advised you otherwise. It is also helpful to bring your lens packaging and lens-care products.',
  },
  {
    question: 'What do the numbers on my prescription mean?',
    answer:
      'SPH (sphere) shows the amount of correction needed for short- or long-sightedness. CYL (cylinder) and AXIS describe the correction for astigmatism. Your prescription may also include an ADD value for reading or close work. We will be happy to explain each part of your prescription.',
  },
  {
    question: 'Should I buy my glasses online or in-store?',
    answer:
      'Buying online may seem convenient, but an in-practice service includes professional frame fitting, precise facial measurements, suitable lens selection and adjustments after collection. These details are particularly important for stronger or more complex prescriptions and help ensure comfortable, clear vision.',
  },
  {
    question: 'What is the difference between an eye examination and a contact lens assessment?',
    answer:
      'An eye examination checks your vision, spectacle prescription and general eye health. A contact lens assessment is a separate examination that considers the front surface of the eye, tear film and corneal shape, and checks how a contact lens fits and performs. Your contact lens prescription may therefore differ from your glasses prescription.',
  },
  {
    question: 'Can I have a contact lens assessment without an eye examination?',
    answer: (
      <>
        A contact lens assessment normally requires an up-to-date eye examination and valid prescription so we can
        confirm your eye health and obtain the measurements needed for a safe, accurate fitting. If your prescription
        is no longer current, you can <Link to="/book-appointment">request an eye examination</Link> or call us on{' '}
        <a href="tel:01509260023">01509 260023</a>.
      </>
    ),
  },
  {
    question: 'Am I a good candidate for contact lenses?',
    answer:
      'Many people can wear contact lenses, including some people with more complex prescriptions. Suitability depends on factors such as your eye health, tear film, prescription, lifestyle and ability to handle and care for the lenses. A contact lens assessment allows us to recommend the most appropriate option for you.',
  },
  {
    question: 'What should I do if I accidentally sleep in my contact lenses?',
    answer: (
      <>
        Unless your contact lens practitioner has specifically advised otherwise, you should not sleep in your
        lenses. If this happens and a lens feels dry or stuck, do not force it out. Blink, use suitable contact-lens
        rewetting drops and allow the lens to move freely before removing it gently. Seek urgent advice if you develop
        pain, redness, sensitivity to light or reduced vision.{' '}
        <a
          href="https://www.moorfields.nhs.uk/for-patients/visual-aids/contact-lenses/care-of-your-soft-contact-lenses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the Moorfields guidance
        </a>
        .
      </>
    ),
  },
  {
    question: 'Why do my eyes feel dry or strained when using screens?',
    answer: (
      <>
        Long periods of screen use can reduce how often you blink, which may contribute to dryness and eye strain.
        Take regular breaks, remember to blink, position your screen just below eye level and avoid glare. If symptoms
        continue, we can assess your eyes and advise whether lubricating drops or a screen-specific prescription may
        help.{' '}
        <a href="https://www.nhs.uk/symptoms/dry-eyes/" target="_blank" rel="noopener noreferrer">
          Read the NHS dry-eye guidance
        </a>
        .
      </>
    ),
  },
  {
    question: 'Could changes in my eyesight affect whether I can drive safely and legally?',
    answer: (
      <>
        You must meet the DVLA eyesight standards whenever you drive. Changes in vision and conditions such as
        cataracts or glaucoma can affect visual acuity or field of vision, so please seek advice if you are unsure and
        do not drive if you cannot meet the required standard. We can assess your eyesight, but the DVLA determines
        legal fitness to drive.{' '}
        <a href="https://www.gov.uk/driving-eyesight-rules" target="_blank" rel="noopener noreferrer">
          Check the current DVLA rules
        </a>
        .
      </>
    ),
  },
  {
    question: 'If I am blind in one eye, can I still drive?',
    answer: (
      <>
        You may be able to drive a car or motorcycle with sight in one eye if you meet the DVLA eyesight standards
        and have adapted successfully to the condition. Different and stricter rules apply to bus, coach and lorry
        licences, and DVLA notification may be required. Ask your optometrist or doctor if you are unsure.{' '}
        <a href="https://www.gov.uk/monocular-vision-and-driving" target="_blank" rel="noopener noreferrer">
          Check the official monocular-vision guidance
        </a>
        .
      </>
    ),
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
