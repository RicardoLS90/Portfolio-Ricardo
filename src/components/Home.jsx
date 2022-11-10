import React from 'react';
import ricardoimg from '../assets/img/ricardofoto.jpg'
import linkedinlogo from '../assets/img/linkedin.svg'
import instalogo from '../assets/img/instagram.svg'

const Home = () => {

  const linkedinClick=()=> {
    window.open('www.linkedin.com/in/ricardoleons' , '_blank')
  }


  return (
    <div className='homecontainer'>
      <div className='home'>
        <img src={ricardoimg} alt="" />
        <h2>Hola soy Ricardo</h2>
        <h1>Desarrollador Web / Web Developer</h1>
      </div>
      <div className='linkscontainer'>
        <a href="https://www.linkedin.com/in/ricardoleons"><img src={linkedinlogo} alt="" /></a>
        <a href="https://www.instagram.com/ricardo_tango/"><img src={instalogo} alt="" /></a>
      </div>
    </div>
  );
};

export default Home;