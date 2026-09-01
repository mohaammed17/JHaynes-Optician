import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

// Import images for eye conditions
import CataractImg from '../assets/Cataract.png';
import GlaucomaImg from '../assets/Glaucoma.png';
import EyeImg from '../assets/Eye.png';
import flashes from '../assets/Flashes.png';
import macular from '../assets/macular.png';
import diabetic from '../assets/diabetic.png';
import BlepharitisImg from '../assets/Bilaphitris.png';
import ConjunctivitisImg from '../assets/Conjuctivis.png';

// Import images for refractive errors
import HypermetropiaImg from '../assets/Hypermetropia.png';
import MyopiaImg from '../assets/Myopia.png';
import AstigmatismImg from '../assets/Astigmatism.png';
import PresbyopiaImg from '../assets/Presbyopia.png';
import AnisometropiaImg from '../assets/Anisometropia.png';

const errorImages = {
  Hypermetropia: HypermetropiaImg,
  Myopia: MyopiaImg,
  Astigmatism: AstigmatismImg,
  Presbyopia: PresbyopiaImg,
  Anisometropia: AnisometropiaImg
};

const getErrorBgImage = (title) => {
  return errorImages[title] || null;
};

const EyeCare = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);

  const handleShowModal = (condition) => {
    setSelectedCondition(condition);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCondition(null);
  };

  const handlePrint = () => {
    const printContents = document.getElementById('print-area').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const refractiveErrors = [
    {
      title: 'Hypermetropia',
      text: `Farsightedness, also known as hyperopia, is a common eye condition that makes nearby objects appear blurry. It occurs when the eye doesn't bend light correctly, causing the visual image to focus behind the retina instead of on it. This can be due to the eyeball being too short or the cornea having too little curvature.`
    },
    {
      title: 'Myopia',
      text: `Myopia, also known as nearsightedness, is an eye condition where light from distant objects focuses in front of the retina, instead of on it. As a result, distant objects appear blurry, while close objects appear normal. Other symptoms may include headaches and eye strain.`
    },
    {
      title: 'Astigmatism',
      text: `Astigmatism is a vision condition that occurs when the cornea or lens is irregularly shaped, preventing light from focusing correctly on the retina.`
    },
    {
      title: 'Presbyopia',
      text: `Presbyopia is a natural age-related condition where the eye's ability to focus on close objects decreases, typically starting in the mid-to-late 40s. This occurs because the lens inside the eye loses its flexibility, making it harder to adjust for near vision. While it's a normal part of aging, it can make reading and other close-up tasks challenging.`
    },
    {
      title: 'Anisometropia',
      text: `Anisometropia is a visual condition where the eyes have different refractive powers, causing one eye to appear blurrier than the other. The term comes from Greek and literally means "the measure of vision is not equal". 
  Anisometropia occurs when the eyes focus images differently, resulting in one eye appearing blurry compared to the other. It's usually defined as a difference of one diopter or more in spherical equivalent (SE) between the eyes.`
    }
  ];

  const eyeConditions = [
    {
      title: "Cataracts",
      description: "Cloudy patches that develop in the lens of your eye.",
      image: CataractImg,
      details: {
        what: "A cataract is a clouding of the lens in your eye and can develop in one or both eyes. The lens is normally clear and sits behind the iris - the coloured part of the eye. The lens helps focus light to produce a sharp image on to the retina at the back of the eye and changes shape to allow you to see close objects. A cataract acts like a frosted glass coating that scatters light, causing blurring and lack of clarity.",
        causes: "Many studies are being carried out on cataracts, though no one knows exactly what causes them. Factors that may be linked to causing cataracts include: Excessive exposure to sunlight, smoking, taking steroids for long periods of time, poor diet, injury, exposure to toxic materials and radiation. Cataracts can form at any age; there are cases where babies are born with them and they are known as congenital cataracts. In younger people they can result from conditions such as diabetes, certain medications and other eye problems. Cataracts normally occur as the eye gets older with many over 60's having them.",
        symptoms: "Cataracts are painless and usually cause a gradual worsening of sight. The main symptoms are: Blurring of vision; difficulty seeing in bright light and glare; more sensitivity to headlights; double vision; and faded or washed-out colours. These symptoms may also indicate other eye conditions, so regular eye tests are important.",
        treatment: "Once vision is affected, cataracts can usually be treated with a short operation under local anaesthetic. The cloudy lens is removed and replaced with a clear plastic intra-ocular lens. Most people return home the same day. Surgery is typically only recommended when the cataract interferes with daily tasks such as driving.",
        expectation: "Cataract surgery is highly successful, with less than two percent of patients experiencing serious complications. Vision is often improved immediately, although full healing can take several months. A new glasses prescription may be needed, especially for reading. Regular eye tests every two years are recommended."
      }
    },

    {
      title: "Glaucoma",
      description: "Build-up of pressure in the eye affecting vision.",
      image: GlaucomaImg,
      details: {
        what: "Glaucoma is a group of eye conditions where the optic nerve is damaged at the point where it leaves the eye. The optic nerve carries images from the retina to the brain.",
        types: "There are four main types: Chronic glaucoma (slow onset), Acute glaucoma (sudden onset), Secondary glaucoma (caused by another eye condition), and Congenital or developmental glaucoma (a condition in babies caused by malformation of the eye).",
        statistics: "According to the RNIB, chronic glaucoma affects 1% of people over 40 and 5% of people over 65. The risk increases with age and can lead to blindness if untreated.",
        causes: "Glaucoma is caused by a blockage in part of the eye that prevents fluid from draining properly, leading to increased intraocular pressure.",
        symptoms: "Often there are few or no early symptoms. The first sign is usually loss of peripheral (side) vision. Other symptoms include seeing halos around lights, vision loss, red eyes, hazy eyes (especially in infants), nausea, vomiting, eye pain, and tunnel vision.",
        treatment: "Treatment may include prescription eye drops, laser surgery, or microsurgery. Open-angle glaucoma is often treated with eye drops, laser trabeculoplasty, or microsurgery. Infant or congenital glaucoma is primarily treated with surgery.",
        expectation: "Vision loss from glaucoma is irreversible, but lowering eye pressure can help prevent further damage. With proper treatment and regular monitoring, most people do not go blind."
      }
    },

    {
      title: "Dry Eye",
      description: "Caused by problems with tear production or drainage.",
      image: EyeImg,
      details: {
        what: "Dry eye is a common condition where your eyes don’t produce enough quality tears, or the tears evaporate too quickly. Tears are essential for lubricating, nourishing, and protecting the eyes. They consist of three layers—lipid, aqueous, and mucous—each produced by different glands in and around the eyelids.",
        causes: "Dry eye can be caused by aging, hormonal changes (e.g., menopause, pregnancy), medications (like antihistamines), prolonged screen time, and environmental factors such as wind, dry air, or high altitude. It can also occur with contact lens use or after eye surgery.",
        symptoms: "Symptoms include burning, stinging, itching, gritty sensation, red eyes, blurred vision, light sensitivity, and discomfort with contact lenses. Interestingly, very watery eyes can also indicate dry eye if the tears lack essential layers.",
        treatment: "Treatment may involve artificial tears (eye drops), lubricating ointments, lifestyle and environmental changes, using humidifiers, taking breaks from screens, or addressing underlying hormonal or medical causes. Severe cases might need medicated drops or tear duct plugs.",
        expectation: "Dry eye is usually manageable with ongoing care. Most people find relief with proper treatment and adjustments to their environment or habits. However, sudden symptoms like severe pain, light sensitivity, or vision disturbance should be checked by a GP immediately."
      }
    },

    {
      title: "Blepharitis",
      description: "Inflammation of the eyelid edges.",
      image: BlepharitisImg,
      details: {
        what: "Blepharitis is inflammation of the eyelids, coming in two types: anterior (affecting the base of the eyelashes) and posterior (affecting the meibomian glands inside the eyelids). It is a common, often chronic condition that can lead to dry eye symptoms and eyelid discomfort, though it rarely affects vision.",
        causes: "Causes include bacterial infections, skin conditions like dermatitis, gland dysfunction, allergic reactions, and exposure to smoke or chemicals. It is often diagnosed by an Optometrist or GP based on symptoms and a simple eye examination.",
        symptoms: "Symptoms include red, swollen, itchy, sore, or gritty eyelids, sensitivity to light, sticky eyelids in the morning, frothy or oily tears, and dandruff-like crusting on eyelashes. Contact lenses may become uncomfortable, and severe cases can cause blurred vision, eyelash loss, or even eyelid scarring (rarely).",
        treatment: "Treatment involves daily eyelid hygiene using dedicated lid cleansers (e.g., Blephasol, Blephaclean), warm compresses to loosen deposits, and gentle eyelid massage. Avoid eye makeup until symptoms clear. Severe or persistent cases may require antibiotics or artificial tears. Avoid sharing towels to prevent spread.",
        expectation: "Blepharitis is usually controllable with consistent daily lid care, though it often recurs. Long-term management is key. Most people experience symptom relief, but occasional flare-ups may happen. Regular eye check-ups every two years are recommended unless otherwise advised."
      }
    },

    {
      title: "Conjunctivitis",
      description: "Often referred to as red eye.",
      image: ConjunctivitisImg,
      details: {
        what: "Conjunctivitis is inflammation of the conjunctiva, the thin clear tissue covering the white part of the eye and the inner surface of the eyelids. It leads to redness and irritation and is commonly known as red eye.",
        causes: "Conjunctivitis can be caused by: 1) viral or bacterial infections (infective conjunctivitis), 2) allergic reactions to substances like pollen or dust mites (allergic conjunctivitis), or 3) irritants like chlorine, shampoo, or eyelashes rubbing against the eye (irritant conjunctivitis).",
        symptoms: "Common symptoms include red, itchy, watery eyes, and sometimes a sticky or crusty coating on the eyelashes. It often starts in one eye but typically spreads to both eyes within hours.",
        treatment: "Many cases clear up without treatment. If necessary, treatment depends on the cause: antibiotics for bacterial infections, antihistamines for allergies, and avoidance of irritants in irritant conjunctivitis. Maintain hygiene, avoid contact lenses during infection, and cleanse crusts with cotton wool and water.",
        expectation: "Conjunctivitis usually resolves on its own within a couple of weeks. However, see a doctor if you experience eye pain, sensitivity to light, changes in vision, or intense redness. Practicing good hygiene can help prevent spreading the infection."
      }
    },

    {
      title: "Flashes and Floaters",
      description: "Light flashes or floaters like spiders/tadpoles.",
      image: flashes,
      details: {
        what: "Flashes and floaters are visual phenomena caused by debris in the vitreous humour casting shadows on the retina. Floaters appear as black dots, shadows, or hair-like shapes that move with eye movement. Flashes occur when the retina is stimulated, often due to vitreous pulling.",
        causes: "Floaters commonly result from age-related changes in the vitreous humour, especially after 40. Posterior Vitreous Detachment (PVD) is a common cause. Other causes include retinal tears or detachment, eye trauma, and high myopia. As the vitreous shrinks with age, it may pull away from the retina, causing floaters and flashes.",
        symptoms: "Floaters: moving spots, shadows, or cobweb-like shapes, especially against bright backgrounds. Flashes: bursts or streaks of light. Red flags include a sudden increase in floaters, flashing lights, grey shadows, or impaired vision, which may indicate retinal damage.",
        treatment: "Most floaters are harmless and require no treatment. If serious, an optometrist will examine the retina using pupil-dilating drops and visual field analysis. Retinal tears/detachments may need hospital referral. Eye drops won’t eliminate floaters. Moving your eyes up and down can sometimes shift the floater out of view.",
        expectation: "Floaters may fade, become less noticeable, or remain persistent. Regular eye tests (every 2 years) are recommended to monitor changes. Seek prompt care if symptoms worsen or affect vision."
      }
    },

    {
      title: "Diabetic Retinopathy",
      description: "High blood sugar damaging back eye cells.",
      image: diabetic,
      details: {
        what: "Diabetic Retinopathy is a diabetes-related condition where high blood sugar damages the small blood vessels in the retina, potentially leading to vision loss or blindness. It is a complication of diabetes mellitus and can affect up to 80% of those with diabetes for 10 years or more.",
        causes: "Caused by prolonged high blood glucose levels that weaken and damage retinal blood vessels, leading to hemorrhages, fluid leaks, swelling (macular edema), and growth of abnormal vessels due to lack of oxygen. Good diabetes control significantly reduces the risk.",
        symptoms: "Early stages may have no symptoms. As it progresses, symptoms include blurred or fluctuating vision, eye floaters and spots, double vision, dark areas in vision, and in some cases, eye pain. Macular edema can cause noticeable vision loss.",
        treatment: "Early detection is key. Regular eye exams help catch it early. Treatments include laser therapy to seal leaking vessels, anti-VEGF injections to stop abnormal vessel growth, and managing blood sugar levels effectively. Advanced stages are harder to treat.",
        expectation: "It requires lifelong diabetes management and regular eye checkups. Vision loss may occur if not treated promptly. Macular edema can come and go, causing vision changes throughout the day. In the UK, diabetics are eligible for free annual eye exams through the NHS."
      }
    },
    {
      title: "Macular Degeneration",
      description: "Causes loss of central vision.",
      image: macular,
      details: {
        what: "Macular degeneration is a painless condition that affects the macula, the central part of the retina responsible for detailed vision. It leads to progressive central vision loss, making activities like reading and recognizing faces difficult. The peripheral vision usually remains intact.",
        causes: "Caused by a partial breakdown of retinal cells and waste buildup in the retina. Major risk factors include aging, smoking, genetics, poor diet, and prolonged exposure to UV light. There are two types: dry AMD (90% of cases) and wet AMD (10%, more severe). Dry AMD can turn into wet AMD.",
        symptoms: "Gradual central vision blurring in dry AMD; sudden central vision loss in wet AMD. Other symptoms include visual distortions (straight lines appearing wavy), difficulty reading, recognizing faces, and judging distances. Peripheral vision remains clear. An Amsler grid may reveal distortions or missing areas.",
        treatment: "Wet AMD: Early detection is key. Treatments include anti-VEGF injections (like Macugen), laser surgery, and photodynamic therapy to destroy abnormal blood vessels. Dry AMD: No cure, but a diet rich in antioxidants (lutein, zeaxanthin from leafy greens) may slow progression. Vision aids like magnifiers can help.",
        expectation: "AMD is progressive and can lead to significant vision loss, especially if untreated. Regular eye exams are crucial for early detection. If AMD is diagnosed, you may be referred to an ophthalmologist for further tests like fluorescein angiography to examine blood vessels in the eye."
      }
    },
  ];

  // Define the hover effect to be used by all pillars
  const hoverEffect = {
    opacity: 1,
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
    transition: { duration: 0.2 }
  };

  return (
    <section className="py-5 bg-light">
      <div data-aos="fade-up" className="container my-5">
        {/* Refractive Errors Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center mb-4 text-primary">Refractive Errors</h2>
            
            {/* First Row: 3 Symmetric Pillar-like Containers */}
            <div className="row g-4">
              {refractiveErrors.slice(0, 3).map((item, idx) => (
                <div key={idx} className="col-md-4">
                  <motion.div
                    data-aos="zoom-in-up"
                    className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={hoverEffect}
                    whileTap={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.25)" }}
                    style={{ minHeight: '400px' }}
                  >
                    <img
                      src={getErrorBgImage(item.title)}
                      alt={item.title}
                      className="w-100"
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    <div className="p-3 d-flex flex-column">
                      <h5 className="fw-bold text-info text-center">{item.title}</h5>
                      <p className="text-muted" style={{ textAlign: 'justify', flexGrow: 1 }}>
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
  
            {/* Second Row: 2 Containers Centered */}
            <div className="row g-4 justify-content-center mt-4">
              {refractiveErrors.slice(3, 5).map((item, idx) => (
                <div key={idx} className="col-md-4">
                  <motion.div
                    data-aos="zoom-in-up"
                    className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={hoverEffect}
                    whileTap={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.25)" }}
                    style={{ minHeight: '400px' }}
                  >
                    <img
                      src={getErrorBgImage(item.title)}
                      alt={item.title}
                      className="w-100"
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    <div className="p-3 d-flex flex-column">
                      <h5 className="fw-bold text-info text-center">{item.title}</h5>
                      <p className="text-muted" style={{ textAlign: 'justify', flexGrow: 1 }}>
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Common Eye Conditions Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4 text-primary">Common Eye Conditions</h2>
            <div className="py-5 px-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '1rem' }}>
              <div className="row g-4">
                {eyeConditions.map((condition, index) => (
                  <div data-aos="zoom-in-up" className="col-sm-6 col-md-4 col-lg-3" key={index}>
                    <motion.div
                      className="card h-100 shadow border-0 rounded-4 transition-hover"
                      initial={{ opacity: 0.8 }}
                      whileHover={hoverEffect}
                      style={{ backgroundColor: '#fdfdfd' }}
                    >
                      <img
                        src={condition.image}
                        alt={condition.title}
                        className="card-img-top rounded-top-4"
                        style={{ height: '140px', objectFit: 'cover' }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h6 className="card-title text-info fw-semibold">{condition.title}</h6>
                        <p className="card-text text-muted mb-3" style={{ fontSize: '0.85rem', textAlign: 'justify' }}>
                          {condition.description}
                        </p>
                        <button onClick={() => handleShowModal(condition)} className="btn btn-outline-primary btn-sm mt-auto">
                          Find out more
                        </button>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Modal Section */}
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedCondition?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="print-area">
            <h6><strong>What is it?</strong></h6>
            <p>{selectedCondition?.details?.what}</p>
            <h6><strong>What causes it?</strong></h6>
            <p>{selectedCondition?.details?.causes}</p>
            <h6><strong>What are the symptoms?</strong></h6>
            <p>{selectedCondition?.details?.symptoms}</p>
            <h6><strong>How is it treated?</strong></h6>
            <p>{selectedCondition?.details?.treatment}</p>
            <h6><strong>What can I expect to happen?</strong></h6>
            <p>{selectedCondition?.details?.expectation}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="primary" onClick={handlePrint}>Print</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default EyeCare;
