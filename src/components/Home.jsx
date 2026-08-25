import React from 'react';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import WhySunnyBears from './WhySunnyBears';
import Gallery from './Gallery';
import Admissions from './Admissions';
import Contact from './Contact';

const Home = () => {
  return (
    <main className="home-container">
      <Hero />
      <About />
      <Programs />
      <WhySunnyBears />
      <Gallery />
      <Admissions />
      <Contact />
    </main>
  );
};

export default Home;