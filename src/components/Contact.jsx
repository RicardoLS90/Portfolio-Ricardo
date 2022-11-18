import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import phone from '../assets/img/phone.svg'
import email from '../assets/img/mail 1.svg'


const Contact = () => {

  const navigate = useNavigate()

  const backButton = () => {
    navigate(-1)
  }

  return (
    <div className='contact-container' id='contact'>
      <h1>Contacto</h1>
      <div className='contact-info'>
        <div className='info'>
          <i className='bx bx-phone bxc' ></i>
          <h3>+593-998499091</h3>
        </div>
        <div className='info'>
        </div>
        <div className='info'>
          <a href="mailto:rleons40@gmail.com?Subject=Vimos%20tu%20CV"><i className='bx bxl-gmail bxc' ></i></a>
          <h3>Rleons40@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;