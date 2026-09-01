import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    text: "I came in for a sight test and was greeted warmly by the lovely receptionist. Mr. Nabee conducted the test and explained everything thoroughly. It didn’t feel rushed at all—something I’ve experienced at other places. They have a huge selection of frames. I’ll definitely be coming back again.",
    author: "Gini W",
    rating: 5
  },
  {
    text: "Pleasant experience from the beginning. The receptionist was polite, helpful, and friendly. The optician was very welcoming, professional, patient, and calm—both made me feel at ease. I’d be happy to visit again and recommend to others.",
    author: "Tin Pig",
    rating: 5
  },
  {
    text: "Outstanding service. Turnaround on my glasses and contact lenses was just a few days. Highly recommend.",
    author: "Paul Stokes (Local Guide)",
    rating: 5
  },
  {
    text: "Glenfield Opticians are brilliant. Mr. Nabee gave me a very thorough eye test. I highly recommend them—all the staff are fantastic.",
    author: "Michael Woodland",
    rating: 5
  },
  {
    text: "A professional and warm attitude instantly put me at ease. The optician was informative throughout and had a great sense of humour. He was cool, friendly, and engaging. This optician has set the bar.",
    author: "Jon Hare",
    rating: 5
  },
  {
    text: "Excellent and thorough eye test by a friendly and professional optician. The premises are modern, well-equipped, with good access and plenty of parking. Clear explanation of my post-op condition. Great range of glasses. This was my fourth visit—I’m very confident in their service.",
    author: "Marion Cullen",
    rating: 5
  },
  {
    text: "Very competent, honest, and reasonably priced service. I was expertly provided with new lenses for my dental loupes and had my varifocals adjusted—what a difference! Best optician I’ve ever been to.",
    author: "Husain Merchant",
    rating: 5
  },
  {
    text: "Lovely people! Appointment booking was easy and quick. Unlike big chains, this place was fast—my glasses were ready in under 48 hours. Very helpful staff. This will be my go-to optician now.",
    author: "Piya (Local Guide)",
    rating: 5
  },
  {
    text: "Very efficient optician with easy access and plenty of parking. A family-run business with a courteous approach to patients. 100% recommend.",
    author: "Zainub Sheikh",
    rating: 5
  },
  {
    text: "Very pleased with the care and professionalism during my eye test. Everything was clearly explained, and I’m very happy with my glasses.",
    author: "Annie Rice",
    rating: 5
  },
  {
    text: "Excellent service and very detailed eye test, helpful and friendly service, so pleased with new glasses and the difference is amazing. Thank you.",
    author: "Margaret McLaughlan (Local Guide)",
    rating: 5
  },
  {
    text: "Delighted to give Glenfield Opticians a five-star review. Everyone was very polite, friendly, and professional. I got first-class treatment. Every stage of the test was explained to me, and I was given the opportunity to ask any questions that I had. I previously used a well-known high street opticians—this one is far better. I am very happy with my smart new glasses. Was recommended to come, and I would thoroughly recommend Glenfield Opticians to others. Many thanks!",
    author: "Jane South",
    rating: 5
  },
  {
    text: "Professional, polite, and friendly customer service. Thorough eye examination. Great range of frames available. Quick turnaround from eye check and frame availability. Run by a wonderful family team in a welcoming environment. Please do support this well-run optician.",
    author: "Aamina (Local Guide)",
    rating: 5
  },
  {
    text: "Fantastic personal service, needed an emergency eye appointment and further investigation, couldn’t fault how wonderful and accommodating they were. I would highly recommend; it’s so nice to find personal service like this.",
    author: "Michelle Cunningham",
    rating: 5
  },
  {
    text: "I cannot thank Glenfield Opticians enough for the 5* treatment, advice, and referral for cataract surgery. Mr. Nabee is a real gentleman who treated me with the utmost respect. The shop is spotlessly clean with a large selection of spectacles, the prices of which are extremely good. I absolutely 100% recommend Glenfield Opticians!",
    author: "Martine Finney",
    rating: 5
  },
  {
    text: "Excellent customer service; the gentleman was very helpful and very attentive. Great prices plus very quick to prepare the glasses. Definitely will be bringing the whole family here. 10/10.",
    author: "Hasan Ozturk",
    rating: 5
  },
  {
    text: "This place is awesome. Parking is literally outside the door with off-street parking. Upon entering, you're greeted and made to feel welcome. All the eye testing equipment is very modern, making your eye test quick and comfortable. This place has a great selection of frames, and my glasses were ready to collect the following day. If you're looking for an eye test, then I highly recommend trying out Glenfield Opticians.",
    author: "Richard Smith (Local Guide)",
    rating: 5
  },
  {
    text: "I've ordered new spectacles, wanted to keep my old frame, so this had been done in 2 days. I chose spectacles with all possible covers and thinnest possible, and they exceeded my expectations! The staff are polite and very professional; also, the prices are very good and affordable. Highly recommended!",
    author: "Akvile Gudeleviciute (Local Guide)",
    rating: 5
  },
  {
    text: "Went here recently to get my eyes tested. Made to feel welcome and felt the whole consultation and eye examination was thorough and unhurried, with areas of any complication explained clearly. Came away with a great pair of varifocals and a free pair of sunglasses too. Very satisfied with the service.",
    author: "Peter H",
    rating: 5
  },
  {
    text: "I just bought varifocals and prescription sunglasses at Glenfield Opticians, and I am one happy and satisfied customer. The service was excellent and prompt, and the glasses are amazing! The owner is very kind, polite, and knowledgeable, and I was very happy with his advice as to what frames suit me. The lenses are high quality, and the price is good. I have been buying varifocals in the UK for about 10 years and was so disappointed at the service and quality that I started buying them during my holidays in Spain. Now, I have finally found an optician in Leicester who I completely trust and who supplied me with great quality glasses that look amazing—thank you so much :-)!",
    author: "Suze Hoche",
    rating: 5
  },
  {
    text: "Fantastic service and overall very happy at this Opticians. I discovered this Opticians by coincidence as my previous Opticians had a limited range of NHS frames. G.O. has lots of kids frames...so my boy is happy. Recently, my other young son had fun playing around with my Ray-Bans sunglasses. I returned to the shop where I purchased them, and they told me nothing can be done!!! Gutted...I sought advice from Glenfield Opticians...he told me to leave them with him and return in 15 mins. He is a magician...he repaired them as if nothing happened.",
    author: "Yatish Chavda",
    rating: 5
  },
  {
    text: "Very good customer service. Very nice, polite, helpful staff. Gives you a good deal. All the glasses will not break the bank, not like other companies. I would recommend to everyone. Did this to a lady I work with who was not getting anywhere with her optician, and he solved the problem. Cannot recommend them enough.",
    author: "Wendy Marshall (Local Guide)",
    rating: 5
  },
  {
    text: "Cannot recommend this optician enough. My wife and I have both had new specs in the last year, and Mustafa has been extremely friendly, cheerful, and helpful. He does not automatically push the most expensive option as most High Street opticians will, but his personal service means that we got the best result for us.",
    author: "Philip White",
    rating: 5
  },
  {
    text: "The staff of Glenfield Opticians were very warm and welcoming. I was prescribed a set of glasses, and they were very good in guiding me to the right choice. Would definitely recommend!",
    author: "Zainub Sulemanji",
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    }
    for (let i = rating; i < 5; i++) {
      stars.push(<i key={`empty${i}`} className="bi bi-star text-warning"></i>);
    }
    return stars;
  };

  return (
    <>
      <Carousel
        indicators={false}
        controls={true}
        interval={7000}
        prevIcon={
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '50%',
              padding: '10px',
              color: 'white',
              fontSize: '20px',
              lineHeight: '1'
            }}
          >
            ‹
          </span>
        }
        nextIcon={
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '50%',
              padding: '10px',
              color: 'white',
              fontSize: '20px',
              lineHeight: '1'
            }}
          >
            ›
          </span>
        }
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
              <blockquote className="blockquote text-center" style={{ maxWidth: '800px' }}>
                <p className="mb-4" style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
                  “{testimonial.text}”
                </p>
                <footer className="blockquote-footer">{testimonial.author}</footer>
              </blockquote>
              <div className="mb-3">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-center mt-4">
        <Button
          variant="outline-primary"
          href="https://www.google.com/search?sca_esv=8bb619a2aead404d&rlz=1C1GCEU_enGB1159GB1160&biw=1280&bih=631&sxsrf=AHTn8zrRVDy6fNK7BBeFDPOW4qdSv_tjxw:1747735098792&si=APYL9bvoDGWmsM6h2lfKzIb8LfQg_oNQyUOQgna9TyfQHAoqUpL6_cokUoe-GOMv52qkm-7Cf8sLyo9tcy2dwYG-CuYmrjgpro-N1YBEBw5srStxWcg1J5RJkMEg7PKX4Xg2xPHjNy71zmkCod5ZnK28bm2raIzCFA%3D%3D&q=Glenfield+Opticians+Reviews"
          target="_blank"
          style={{ fontWeight: 'bold', padding: '10px 20px', fontSize: '1rem' }}
        >
          View All Reviews
        </Button>
      </div>
    </>
  );
};

export default Testimonials;