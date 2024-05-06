import React from 'react';
import './navbar.scss';
import '../../Sass/brands.scss';
function Navbar() {
  return (
    <>
      <div className='navbar'>
        {/* Sidebar */}
        <div className='wrapper'>
          <span>UBT</span>
          <div className='social'>
            <a href='#'>
              <i class='fa-brands fa-instagram'></i>
            </a>
            <a href='#'>
              <img src='' alt='' />
            </a>
            <a href='#'>
              <img src='' alt='' />
            </a>
            <a href='#'>
              <img src='' alt='' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
