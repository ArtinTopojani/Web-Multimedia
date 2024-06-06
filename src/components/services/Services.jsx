import React from 'react';
import './services.scss';
import { motion } from 'framer-motion';
import servicesImg from '../../assets/services.png';

const variants = {
  initial: {
    x: -110,
    y: 100,
    opacity: 0.2,
    scale: 0.8,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};
function Services() {
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          Lorem ipsum dolor sit amet consectetur
          <br /> adipisicing elit.
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src={servicesImg} alt='A developer coding' />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <b>Lorem, ipsum</b> dolor.
          </h1>
          <button>LEARN MORE</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            voluptates aut at similique ab! Magni recusandae facere voluptatem
            labore vitae reiciendis.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            voluptates aut at similique ab! Magni recusandae facere voluptatem
            labore.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            voluptates aut at similique ab! Magni recusandae facere voluptatem
            labore vitae.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            voluptates aut at similique ab! Magni recusandae facere voluptatem
            labore vitae reiciendis ullam dicta. Nobis at dolor, sequi doloribus
            voluptatem placeat?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
