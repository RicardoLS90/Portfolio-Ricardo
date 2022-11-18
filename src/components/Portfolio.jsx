import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import weather from '../assets/img/weather.png'
import rickandmorty from '../assets/img/rickandmorty.png'
import Habilities from './Habilities'

const Portfolio = () => {

  const navigate = useNavigate()

  const backButton = () => {
    navigate(-1)
  }

  return (
    <div>

      <div className='portfolio-container' id='portfolio'>
        <div className='button-container'>
        <button className='back-button button-link' onClick={backButton}><i className='bx bx-arrow-back'></i></button>
        </div>
        <div className='portfolio-info'>
          <h2>Portafolio</h2>
          <div className='img-container'>
            <a href="https://ricardoleonentregable2.netlify.app/"><img className='portfolio-img' src={weather} alt="" /></a>
            <a href="https://ricardo-leon-rickyandmorty.netlify.app/"><img className='portfolio-img' src={rickandmorty} alt="" /></a>
          </div>
          < Habilities />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
