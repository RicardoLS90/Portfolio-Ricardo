import React from 'react';
import weather from '../assets/img/weather.png'
import rickandmorty from '../assets/img/rickandmorty.png'

const Portfolio = () => {
  return (
    <div>
      <div className='porfolio-container'>
        <h2>Portafolio</h2>
        <div className='img-container'>
          <a href="https://ricardoleonentregable2.netlify.app/"><img className='portfolio-img' src={weather} alt="" /></a>
          <a href="https://ricardo-leon-rickyandmorty.netlify.app/"><img className='portfolio-img' src={rickandmorty} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
        