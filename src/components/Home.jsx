import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ricardoimg from '../assets/yo1.jpg'
import './styles/home.css'

const Home = () => {

  const navigate = useNavigate()

  const goToAbout = () => {
    navigate('/about')
  }

  const goToPortfolio = () => {
    navigate('/portfolio')
  }

  const goToHabilities = () => {
    navigate('/habilities')
  }


  return (
    <div className='homecontainer' id='home'>
      <div className='buttonlink-container'>
      <div className='button-container'>
        <button className='button-link skils' onClick={goToHabilities}>Skills</button>
        <button className='button-link portfolio' onClick={goToPortfolio}>Portfolio</button>
        <button className='button-link aboutb' onClick={goToAbout}>About me</button>
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
      <div className='information'>
        <div className='home'>
          {/* <img src={ricardoimg} alt="ricardoimg" className='home-img' /> */}
          <h2 className='home-tittle info'>Hola soy Ricardo</h2>
          <h1 className='home-text info'>Desarrollador Web / Front End Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;