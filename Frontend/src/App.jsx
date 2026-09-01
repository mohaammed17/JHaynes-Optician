import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import EyeCare from './Pages/EyeCare';
import ContactLenses from './Pages/ContactLenses';
import SpecialOffers from './Pages/SpecialOffers';
import ChildrenZone from './Pages/ChildrenZone';
import FreeEyeTestService from './Pages/FreeEyeTestService';
import CorporateEyeCare from './Pages/CorporateEyeCare';
import HomeVisit from './Pages/HomeVisit';
import HearingTest from './Pages/HearingTest';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FreedomOfInformation from './Pages/FreedomOfInformation';
import TermsAndConditions from './Pages/TermsAndConditions';
import BookAppointment from './Pages/BookAppointment';
import ScrollToTop from './Components/ScrollToTop';
import DispensingOfEyeglasses from './Pages/DispensingOfEyeglasses';
import CataractAndOtherReferrals from './Pages/CataractAndOtherReferrals';
import ContactLensConsultation from './Pages/ContactLensConsultation';
import SaleOfOpticalProduct from './Pages/SaleOfOpticalProduct';
import SafetyGlasses from './Pages/SafetyGlasses';
import GlazingOfSpectacles from './Pages/GlazingOfSpectacles';
import OpticalCoherenceTomography from './Pages/OpticalCoherenceTomography'; // New import

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <ScrollToTop/>
      
      <main className="main-content">
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
          <Route path="/optical-coherence-tomography" element={<OpticalCoherenceTomography />} /> {/* New route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;