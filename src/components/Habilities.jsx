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
          <i className='bx bx-mobile desing'></i>
          <h3>Mobile App Desing</h3>
        </div>
        <div className='habilitie sistems'>
          <i className='bx bx-align-middle desing'></i>
          <h3>Creacion de sistema de diseños</h3>
        </div>
        <div className='habilitie web'>
          <i className='bx bx-devices desing'></i>
          <h3>Desarrollo Web</h3>
        </div>
      </div>
    </div>
  );
};

export default Habilities;