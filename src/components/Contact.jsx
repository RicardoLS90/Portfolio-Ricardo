import React from 'react';
import phone from '../assets/img/phone.svg'
import email from '../assets/img/mail 1.svg'


const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contacto</h1>
      <div className='contact-info'>
        <div className='info'>
          <img  className='phone' src={phone} alt="" />
          <h3>0998499091</h3>
        </div>
        <div className='info'>
          <img src={email} alt="" />
          <h3>rleons40@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;