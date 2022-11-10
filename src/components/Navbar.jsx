import React from 'react';

const Navbar = () => {
  return (
    <div className='navbarcontainer'>
      <nav className='navbar'>
        <ul>
          <li className='navbarinfo'>Home</li>
          <li className='navbarinfo'>About me</li>
          <li className='navbarinfo'>My habilities</li>
          <li className='navbarinfo'>Portfolio</li>
          <li className='navbarinfo'>contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;