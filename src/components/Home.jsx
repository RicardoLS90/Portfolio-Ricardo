import React from 'react';
import ricardoimg from '../assets/img/ricardofoto.jpg'
import linkedinlogo from '../assets/img/linkedin.svg'
import instalogo from '../assets/img/instagram.svg'

const Home = () => {

  const linkedinClick=()=> {
    window.open('www.linkedin.com/in/ricardoleons' , '_blank')
  }


  return (
    <div className='homecontainer' id='home'>
      <div className='home'>
        <img src={ricardoimg} alt="" className='home-img'/>
        <h2 className='home-tittle info'>Hola soy Ricardo</h2>
        <h1 className='home-text info'>Desarrollador Web / Web Developer</h1>
      </div>
      <div className='linkscontainer'>
        <a href="https://www.linkedin.com/in/ricardoleons"><img src={linkedinlogo} alt=""  className='link'/></a>
        <a href="https://www.instagram.com/ricardo_tango/"><img src={instalogo} alt="" className='link'/></a>
      </div>
    </div>
  );
};

export default Home;