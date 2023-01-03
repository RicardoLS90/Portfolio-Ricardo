import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import weather from '../assets/img/weather.png'
import rickandmorty from '../assets/img/rickandmorty.png'
import ecommerce from '../assets/img/ecommerce.png'
import pokedex from '../assets/img/pokedex.png'
import memory from '../assets/img/memory.png'
import './styles/portfolio.css'
import Button from 'react-bootstrap/Button';

const Portfolio = () => {

  const navigate = useNavigate()

  const backButton = () => {
    navigate(-1)
  }

  return (
    <div>

      <div className='portfolio-container' id='portfolio'>
        <div className='button-portfolio'>
          <Button onClick={backButton} variant="primary">Back to home</Button>{' '}
        </div>
        <div className='portfolio-info'>
          <h2>Portafolio</h2>
          <div className='img-container'>
            <a className='aportfolio' href="https://stellar-naiad-961462.netlify.app/" target='_blank'><img className='portfolio-img' src={ecommerce} alt="" />E-commerce</a>
            <a className='aportfolio' href="https://resilient-treacle-03d5ac.netlify.app/" target='_blank'><img className='portfolio-img' src={memory} alt="" />Let's test your memory</a>
            <a className='aportfolio' href="https://gleaming-granita-e65952.netlify.app/" target='_blank'><img className='portfolio-img' src={pokedex} alt="" />Love pokemon? Pokedex</a>
            <a className='aportfolio' href="https://ricardoleonentregable2.netlify.app/" target='_blank'><img className='portfolio-img' src={weather} alt="" />Weather App</a>
            <a className='aportfolio' href="https://ricardo-leon-rickyandmorty.netlify.app/" target='_blank'><img className='portfolio-img' src={rickandmorty} alt="" />Rick and Morty Multiverse</a>
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

export default Portfolio;
