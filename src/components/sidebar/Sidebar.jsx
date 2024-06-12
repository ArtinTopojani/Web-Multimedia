import React, { useState } from 'react';
import ToggleButton from './toggleButton/ToggleButton';
import Links from './links/Links';
import './sidebar.scss';
import { delay, m, motion } from 'framer-motion';
function Sidebar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: 'circle(1500px at 50px 50px)',
      transition: {
        type: 'spring',
        sriffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
        <motion.div className='bg' variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
}

export default Sidebar;
