import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WeddingsPage from './pages/WeddingsPage';
import CorporatePage from './pages/CorporatePage';
import FestivalPage from './pages/FestivalPage';
import PrivatePartiesPage from './pages/PrivatePartiesPage';
import SportsEventsPage from './pages/SportsEventsPage';
import EventsPage from './pages/EventsPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BiographyPage from './pages/BiographyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bruiloften" element={<WeddingsPage />} />
            <Route path="/bedrijfsfeesten" element={<CorporatePage />} />
            <Route path="/festivals" element={<FestivalPage />} />
            <Route path="/prive-feesten" element={<PrivatePartiesPage />} />
            <Route path="/sportfeesten" element={<SportsEventsPage />} />
            <Route path="/evenementen" element={<EventsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/prijzen" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/biografie" element={<BiographyPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </Router>
  );
}

export default App;