import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import PixiCursor from './components/pixicursorfollower/PixiCursor';
import PixiComponent from './components/PixiComponent/PixiComponent';
import FeaturedWork from './components/PixiComponent/FeaturedWork';

function App() {
  return (
    <>
      <PixiCursor />

      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Parallax'>
        <Parallax type='services' />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <div id='Portfolio'>
        <Portfolio />
      </div>
      <section>
        <div id='New Project'>
          <FeaturedWork />
        </div>
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
