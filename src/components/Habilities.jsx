import React from 'react';
import mobile from '../assets/img/mobile.svg'
import sistems from '../assets/img/material.svg'
import web from '../assets/img/web.svg'
import './styles/habilites.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Habilities = () => {
  const navigate= useNavigate(  )
  const backButton = () => {
    navigate(-1)
  }

  return (
    <div className='habilities-container' id='habilities'>
      <div className='button-portfolio'>
          <Button onClick={backButton} variant="primary">Back to home</Button>{' '}
        </div>
      <div className='habilities-clean'>
        <br />
        <br />
        <h2 className='titlle'>Mis Habilidades</h2>
        <div className='habilities'>
          <div className='habilitie mobile'>
            <i className='bx bx-mobile desing'></i>
            <h3>Diseño de aplicaciones mobiles</h3>
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
      <div className='soft-skills'>
      <br />
        <br />
      <h2 className='titlle'>Habilidades blandas</h2>
        <div className='habilities'>
          <div className='habilitie mobile'>
          <i className='bx bxl-microsoft-teams'></i>
            <h3>Trabajo en equipo</h3>
          </div>
          <div className='habilitie sistems'>
          <i className='bx bx-brain' ></i>
            <h3>Inteligencia emocional</h3>
          </div>
          <div className='habilitie web'>
          <i className='bx bx-hard-hat'></i>
            <h3>Solucion de problemas y Conflictos</h3>
          </div>
      </div>
      <div className='linkscontainer'>
          <div className='contactme'>
            <h2>CONTACT ME</h2>
          </div>
          <a href="https://www.linkedin.com/in/ricardoleons" target='_blank'><i className='bx bxl-linkedin link'></i></a>
          <a href="https://walink.co/6a1656" target='_blank' className='whatcontainer'>
            <i className='bx bxl-whatsapp bxc'></i>
          </a>
        </div>
    </div>
    </div>

  );
};

export default Habilities;