import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ricardoimg from '../assets/img/ricardofoto.jpg'
import linkedinlogo from '../assets/img/linkedin.svg'
import instalogo from '../assets/img/instagram.svg'

const Home = () => {

  const navigate = useNavigate()

  const goToAbout = () => {
    navigate('/about')
  }

  const goToPortfolio = () => {
    navigate('/portfolio')
  }

  const goToContact = () => {
    navigate('/contact')
  }


  return (
    <div className='homecontainer' id='home'>

      <div className='button-container'>
        <button className='button-link aboutb' onClick={goToAbout}>About me</button>
        <button className='button-link portfolio' onClick={goToPortfolio}>Portfolio</button>
      </div>
      <div className='home'>
        <img src={ricardoimg} alt="ricardoimg" className='home-img' />
        <h2 className='home-tittle info'>Hola soy Ricardo</h2>
        <h1 className='home-text info'>Desarrollador Web / Web Developer</h1>
      </div>
      <div className='linkscontainer'>
        <a href="https://www.linkedin.com/in/ricardoleons"><i className='bx bxl-linkedin link'></i></a>
        <a href="https://walink.co/6a1656" className='whatcontainer'>
            <i className='bx bxl-whatsapp bxc'></i>
          </a>
      </div>
    </div>
  );
};

export default Home;