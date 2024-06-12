import React, { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import portfolioImg1 from '../../assets/portfolio1.jpg';
import portfolioImg2 from '../../assets/portfolio2.jpg';
import portfolioVideo from '../../assets/portfolioVideo.mp4';
import portfolioAudio1 from '../../assets/audio1.mp3';
import portfolioAudio2 from '../../assets/audio2.mp3';
import portfolioAudio3 from '../../assets/audio3.mp3';
import portfolioAudio4 from '../../assets/audio4.mp3';

const items = [
  {
    id: 1,
    title: 'React Project',
    img: portfolioImg1,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque dolores. Rerum mollitia, corporis numquam repellat consectetur aspernatur eaque beatae magni a nemo odit, iusto dolor dicta dolorem ducimus consequuntur?',
  },
  {
    id: 2,
    title: 'Web Multimedia',
    img: portfolioImg2,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque dolores. Rerum mollitia, corporis numquam repellat.',
  },
  {
    id: 3,
    title: 'Pixijs Project',
    video: portfolioVideo, // Use the imported video
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque dolores. Rerum mollitia, corporis numquam repellat consectetur aspernatur eaque beatae magni a nemo odit, iusto dolor dicta dolorem ducimus consequuntur?',
  },
  {
    id: 4,
    title: 'Frontend Project',
    audios: [
      portfolioAudio1,
      portfolioAudio2,
      portfolioAudio3,
      portfolioAudio4,
    ],
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque dolores. Rerum mollitia, corporis numquam repellat consectetur .',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-350, 350]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='mediaContainer' ref={ref}>
            {item.img ? (
              <img src={item.img} alt={item.title} />
            ) : item.video ? (
              <video controls>
                <source src={item.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : item.audios ? (
              <div>
                {item.audios.map((audio, index) => (
                  <audio key={index} controls>
                    <source src={audio} type='audio/mpeg' />
                    Your browser does not support the audio tag.
                  </audio>
                ))}
              </div>
            ) : null}
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
