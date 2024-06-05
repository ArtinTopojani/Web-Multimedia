import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import PixiCursor from './components/pixicursorfollower/PixiCursor';

function App() {
  return (
    <>
      <PixiCursor></PixiCursor>

      <section id='Homepage'>
        <Navbar></Navbar>
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
