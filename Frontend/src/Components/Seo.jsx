import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://frontend-psi-ten-66.vercel.app';
const DEFAULT_DESCRIPTION = 'Independent opticians in Loughborough offering professional, personal eye care, contact lenses, spectacles and specialist services.';

const routeSeo = {
  '/': ['J Haynes Optician | Independent Opticians in Loughborough', 'Independent opticians in Loughborough offering eye examinations, contact lenses, OCT, spectacles, home visits and hearing tests.'],
  '/eyecare': ['Eye Care Services | J Haynes Optician', 'Learn about common eye conditions and the professional eye care services available at J Haynes Optician in Loughborough.'],
  '/contactlenses': ['Contact Lenses | J Haynes Optician', 'Contact lens advice, fitting and ongoing care from J Haynes Optician in Loughborough.'],
  '/specialoffers': ['Special Offers | J Haynes Optician', 'View current eyewear and eye care offers available from J Haynes Optician in Loughborough.'],
  '/childrenzone': ["Children's Eye Care | J Haynes Optician", 'Friendly eye examinations, advice and eyewear for children at J Haynes Optician in Loughborough.'],
  '/freeeyetest': ['Eye Examinations | J Haynes Optician', 'Book a thorough eye examination with your independent Loughborough optician. NHS-funded eye care may be available.'],
  '/corporate-eye-care': ['Corporate Eye Care | J Haynes Optician', 'On-site and workplace eye care services for companies and employees in and around Loughborough.'],
  '/home-visit': ['Home Visit Optician | J Haynes Optician', 'Professional home visiting optician services for eligible customers in and around Loughborough.'],
  '/hearing-test': ['Hearing Tests | J Haynes Optician', 'Professional hearing assessments and audiology services available through J Haynes Optician.'],
  '/dispensingofeyeglasses': ['Spectacle Dispensing | J Haynes Optician', 'Expert guidance choosing spectacle frames and lenses from J Haynes Optician in Loughborough.'],
  '/cataract-and-other-referrals': ['Cataract and Eye Referrals | J Haynes Optician', 'Professional cataract assessment and direct eye care referrals from J Haynes Optician.'],
  '/contact-lens-consultation': ['Contact Lens Consultation | J Haynes Optician', 'Contact lens assessments, fitting, training and aftercare in Loughborough.'],
  '/sale-of-optical-product': ['Frames, Lenses and Optical Products | J Haynes Optician', 'Explore spectacles, lenses, sunglasses and optical accessories at J Haynes Optician.'],
  '/safety-glasses': ['Prescription Safety Glasses | J Haynes Optician', 'Protective and prescription safety eyewear for work and hazardous environments.'],
  '/glazing-of-spectacles': ['Spectacle Reglazing | J Haynes Optician', 'Have new prescription lenses fitted into your existing spectacle frames.'],
  '/optical-coherence-tomography': ['OCT Eye Scans | J Haynes Optician', 'Advanced OCT retinal imaging for detailed eye health assessment and early detection.'],
  '/book-appointment': ['Request an Appointment | J Haynes Optician', 'Request an eye care appointment with J Haynes Optician in Loughborough.'],
  '/privacy-policy': ['Privacy Policy | J Haynes Optician', 'Read the J Haynes Optician privacy policy and how personal information is handled.'],
  '/freedom-of-information': ['Freedom of Information | J Haynes Optician', 'Freedom of Information publication details for J Haynes Optician.'],
  '/terms-and-conditions': ['Terms and Conditions | J Haynes Optician', 'Read the website terms and conditions for J Haynes Optician.'],
};

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const [name, content] = attribute;
    element.setAttribute(name, content);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isKnownPage = Boolean(routeSeo[pathname]);
    const [title, description] = routeSeo[pathname] || ['Page Not Found | J Haynes Optician', DEFAULT_DESCRIPTION];
    const pageUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', ['name', 'description'], description);
    setMeta('meta[property="og:title"]', ['property', 'og:title'], title);
    setMeta('meta[property="og:description"]', ['property', 'og:description'], description);
    setMeta('meta[property="og:url"]', ['property', 'og:url'], pageUrl);
    setMeta('meta[name="robots"]', ['name', 'robots'], isKnownPage ? 'index,follow' : 'noindex,nofollow');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [pathname]);

  return null;
}
