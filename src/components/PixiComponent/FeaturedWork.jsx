import React from 'react';
import featuredCompanyImg from '../../assets/featureImg.jpg';
import './featuredWork.scss';
import PixiComponent from './PixiComponent';

const FeaturedWork = () => {
  return (
    <section className='featuredWork'>
      <div className='header'></div>
      <div className='wrapper'>
        <div className='imageContainer'>
          <PixiComponent image={featuredCompanyImg} id='pixiComponent' />
        </div>
        <div className='textContainer'>
          <h2>Take a Sneak Peek</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            incidunt quod itaque ex quia, nihil aperiam, pariatur nam voluptas
            quidem earum iste consequuntur reprehenderit. Iste culpa nemo
            blanditiis consequatur sunt.
          </p>
          <button>More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
