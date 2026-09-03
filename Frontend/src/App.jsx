import './App.css';
import React, { lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Seo from './Components/Seo';
import MobileActionBar from './Components/MobileActionBar';

const Home = lazy(() => import('./Pages/Home'));
const EyeCare = lazy(() => import('./Pages/EyeCare'));
const ContactLenses = lazy(() => import('./Pages/ContactLenses'));
const SpecialOffers = lazy(() => import('./Pages/SpecialOffers'));
const ChildrenZone = lazy(() => import('./Pages/ChildrenZone'));
const FreeEyeTestService = lazy(() => import('./Pages/FreeEyeTestService'));
const CorporateEyeCare = lazy(() => import('./Pages/CorporateEyeCare'));
const HomeVisit = lazy(() => import('./Pages/HomeVisit'));
const HearingTest = lazy(() => import('./Pages/HearingTest'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const FreedomOfInformation = lazy(() => import('./Pages/FreedomOfInformation'));
const TermsAndConditions = lazy(() => import('./Pages/TermsAndConditions'));
const BookAppointment = lazy(() => import('./Pages/BookAppointment'));
const DispensingOfEyeglasses = lazy(() => import('./Pages/DispensingOfEyeglasses'));
const CataractAndOtherReferrals = lazy(() => import('./Pages/CataractAndOtherReferrals'));
const ContactLensConsultation = lazy(() => import('./Pages/ContactLensConsultation'));
const SaleOfOpticalProduct = lazy(() => import('./Pages/SaleOfOpticalProduct'));
const SafetyGlasses = lazy(() => import('./Pages/SafetyGlasses'));
const GlazingOfSpectacles = lazy(() => import('./Pages/GlazingOfSpectacles'));
const OpticalCoherenceTomography = lazy(() => import('./Pages/OpticalCoherenceTomography'));
const NotFound = lazy(() => import('./Pages/NotFound'));

const PageLoading = () => (
  <div className="page-loading" role="status" aria-live="polite">
    <span className="page-loading-spinner" aria-hidden="true" />
    <span>Loading page…</span>
  </div>
);

function App() {
  return (
    <div className="app-wrapper">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <ScrollToTop/>
      <Seo />
      
      <main id="main-content" className="main-content" tabIndex="-1">
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eyecare" element={<EyeCare />} />
            <Route path="/contactlenses" element={<ContactLenses />} />
            <Route path="/specialoffers" element={<SpecialOffers />} />
            <Route path="/childrenzone" element={<ChildrenZone />} />
            <Route path="/freeeyetest" element={<FreeEyeTestService />} />
            <Route path="/corporate-eye-care" element={<CorporateEyeCare />} />
            <Route path="/home-visit" element={<HomeVisit />} />
            <Route path="/hearing-test" element={<HearingTest />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/freedom-of-information" element={<FreedomOfInformation />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/dispensingofeyeglasses" element={<DispensingOfEyeglasses />} />
            <Route path="/cataract-and-other-referrals" element={<CataractAndOtherReferrals />} />
            <Route path="/contact-lens-consultation" element={<ContactLensConsultation />} />
            <Route path="/sale-of-optical-product" element={<SaleOfOpticalProduct />} />
            <Route path="/safety-glasses" element={<SafetyGlasses />} />
            <Route path="/glazing-of-spectacles" element={<GlazingOfSpectacles />} />
            <Route path="/optical-coherence-tomography" element={<OpticalCoherenceTomography />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
