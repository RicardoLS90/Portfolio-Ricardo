import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import photo1 from '../assets/photo4.jpg'
import photo2 from '../assets/photo1.jpg'
import photo3 from '../assets/photo3.jpg'
import './styles/about.css'
import Button from 'react-bootstrap/Button';

const Aboutme = () => {

  const navigate = useNavigate()

  const backButton = () => {
    navigate(-1)
  }

  return (
    <div className='about-container' id='about'>
      <div className='button-about'>
      <Button onClick={backButton} variant="primary">Back to home</Button>{' '}
      </div>
      <div className='about-text'>
        <h2 className='about-tittle'>Acerca de mi</h2>
        <p className='about-paragraph' >Soy una persona sociable, amigable y con muy buen humor.
          Disfruto mucho de pasar con mi familia en mi tiempo libre, tambien hago deportes
          como el futbol y el tenis, tambien cuentan como deporte los videojuegos.

          En mi vida profesional eh tenido varias experiencias, mas en el campo empresarial,
          me gusta aprender doy todo para poder aprenderlo con excelencia.
          Hoy estoy inmerso en el mundo del desarrollo web, un lugar donde eh encontrado mi pasion,
          donde puedo desarrollar mi creatividad y estaré encantado de poner mis conocimientos y
          habilidades a servicio de su empresa, asi como tambien estoy emocionado por aprender nuevas
          aptitudes y habilidades que me permitan crecer como profesional.
        </p>
      </div>
      <div className='about-image'>
          <img src={photo1} alt="photo1" className='aboutphoto' />
          <img src={photo2} alt="photo2" className='aboutphoto' />
          <img src={photo3} alt="photo3" className='aboutphoto' />
        
      </div>
    </div>
  );
};

export default Aboutme;