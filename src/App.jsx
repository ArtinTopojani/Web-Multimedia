import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <FontAwesomeIcon icon='fa-brands fa-instagram' />
      </section>

      <section>Parallax</section>
      <section>Drejtimet</section>
      <section>Parallax</section>
      <section>Fakullteti1</section>
      <section>Fakullteti2</section>
      <section>Fakullteti3</section>
      <section>Contact</section>
    </>
  );
}

export default App;
