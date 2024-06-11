import React, { useRef, useState, useEffect } from 'react';
import './parallax.scss';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

function Parallax({ type }) {
  const ref = useRef();
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['What We Do?', 'Our Services', 'Contact Us'];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yClouds = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <AnimatePresence>
        <motion.h1
          key={textIndex}
          initial={{ x: '100%', opacity: '0%' }}
          animate={{ x: '0%', opacity: '100%' }}
          exit={{ x: '-100%', opacity: '0%' }}
          transition={{ duration: 1 }}
        >
          {texts[textIndex]}
        </motion.h1>
      </AnimatePresence>
      <motion.div className='mountains'></motion.div>
      <motion.div style={{ x: yClouds }} className='clouds'></motion.div>
      <motion.div style={{ y: yBg }} className='planets'></motion.div>
      <motion.div style={{ x: yBg }} className='stars'></motion.div>
    </div>
  );
}

export default Parallax;
