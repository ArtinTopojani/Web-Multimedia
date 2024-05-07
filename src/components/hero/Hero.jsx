import React from 'react';
import './hero.scss';
import heroImg from '../../assets/hero-character.png';
import scrollImg from '../../assets/scroll.png';
import { animate, motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',

    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Artin Topojani</motion.h2>
          <motion.h1 variants={textVariants}>
            Lorem ipsum dolor sit amet.
          </motion.h1>
          <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants}>
              See Latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img
            src={scrollImg}
            alt='scrolling-navigator'
            variants={textVariants}
            animate='scrollButton'
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        animate='animate'
        initial='initial'
      >
        Writer Content Creator Influencer Developer
      </motion.div>
      <div className='imageContainer'>
        <img src={heroImg} alt='' />
      </div>
    </div>
  );
}

export default Hero;
