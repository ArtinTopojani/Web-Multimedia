import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <section id='Homepage'>
        <Navbar></Navbar>
        <Hero />
      </section>

      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Fakullteti1</section>
      <section>Fakullteti2</section>
      <section>Fakullteti3</section>
      <section id='Contact'>Contact</section>
    </>
  );
}

export default App;
