import React from 'react';
import mobile from '../assets/img/mobile.svg'
import sistems from '../assets/img/material.svg'
import web from '../assets/img/web.svg'

const Habilities = () => {
  return (
    <div className='habilities-container' id='habilities'>
      <h2>Mis Habilidades</h2>
      <div className='habilities'>
        <div className='habilitie mobile'>
          <img src={mobile} alt="mobile" />
          <h3>Mobile App Desing</h3>
        </div>
      <div className='habilitie sistems'>
          <img src={sistems} alt="sistems" />
          <h3>Creacion de sistema de diseños</h3>
      </div>
      <div className='habilitie web'>
          <img src={web} alt="web" />
          <h3>Desarrollo Web</h3>
        </div>
      </div>
    </div>
  );
};

export default Habilities;