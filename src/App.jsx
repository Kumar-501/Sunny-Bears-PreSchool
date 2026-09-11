import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdmissionBanner from './components/Admissionbanner';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import WhatsAppBot from './components/WhatsAppBot';

import BestPreschoolInChennai from './components/best-preschool-in-chennai';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          {/* =====================================================
              HOME PAGE
          ====================================================== */}
          <Route
            path="/"
            element={
              <>
                <Navbar />

                {/* =====================================================
                    ADMISSION BANNER
                    Sits directly below the navbar.
                ====================================================== */}
                <AdmissionBanner />

                <Home />
                <Footer />
                <WhatsAppBot />
              </>
            }
          />

          {/* =====================================================
              SEO LANDING PAGE
              /best-preschool-in-chennai
          ====================================================== */}
          <Route
            path="/best-preschool-in-chennai"
            element={
              <>
                <Navbar />
                <AdmissionBanner />
                <BestPreschoolInChennai />
                <Footer />
                <WhatsAppBot />
              </>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;