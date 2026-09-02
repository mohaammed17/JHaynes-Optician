import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const testimonials = [
  {
    text: "J Haynes went above and beyond to resolve an issue and provide excellent service. The practice was highly recommended.",
    author: "Jackie Cavner — Google Review",
    rating: 5
  },
  {
    text: "After trying larger optical chains, Peter was impressed by the competitive prices and excellent service for occupational glasses and varifocals.",
    author: "Peter Bayliss — Google Review",
    rating: 5
  },
  {
    text: "Sonia and her husband received welcoming, thorough eye checks and especially appreciated the personal service from Mustafa and Debbie.",
    author: "Sonia Tickner — Google Review",
    rating: 5
  },
  {
    text: "The OCT 3D scan was explained clearly before and after the test, making the whole appointment feel relaxed and friendly.",
    author: "Margaret McLaughlan — Google Review",
    rating: 5
  },
  {
    text: "Top-class service during a workplace eye check, with a more personal experience than a typical high-street chain.",
    author: "Joanne Kelly — Google Review",
    rating: 5
  },
  {
    text: "A professional and thorough eye examination, with plenty of time taken to examine the eyes and explain the findings.",
    author: "Husain Broachwalla — Google Review",
    rating: 5
  },
  {
    text: "A very good selection of children’s frames, including NHS options, accompanied by service the reviewer would confidently recommend.",
    author: "Taha Broachwalla — Google Review",
    rating: 5
  },
  {
    text: "Excellent service, quality products and reasonable prices, with a strong recommendation from an experienced local reviewer.",
    author: "Andy Hurst — Google Review",
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
              backgroundColor: 'var(--jh-teal-800)',
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
              backgroundColor: 'var(--jh-teal-800)',
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
                  {testimonial.text}
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
          href="https://www.google.com/maps/place/J+Haynes+Optician/@52.7717146,-1.2056654,17z/data=!4m8!3m7!1s0x4879e0b008419ae1:0x304db26ab7c7e26a!8m2!3d52.7717146!4d-1.2056654!9m1!1b1!16s%2Fg%2F1tdkx62_"
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
