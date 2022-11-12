import React from 'react';

const Navbar = () => {
  return (
    <div className='navbarcontainer'>
      <nav className='navbar'>
        <ul>
          <a href="#home" className='navbarinfo-container'><li className='navbarinfo'>Home</li></a>
          <a href="#about" className='navbarinfo-container'><li className='navbarinfo'>About me</li></a>
          <a href="#habilities" className='navbarinfo-container'><li className='navbarinfo'>My habilities</li></a>
          <a href="#portfolio" className='navbarinfo-container'><li className='navbarinfo'>Portfolio</li></a>
          <a href="#contact" className='navbarinfo-container'><li className='navbarinfo'>contact</li></a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;