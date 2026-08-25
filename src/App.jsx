import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import WhatsAppBot from './components/WhatsAppBot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppBot />
    </div>
  );
}

export default App;