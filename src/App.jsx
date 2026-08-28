import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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