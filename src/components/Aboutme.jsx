import React from "react";
import { Link, useNavigate } from "react-router-dom";
import photo1 from "../assets/yo1.jpg";
import photo2 from "../assets/photo1.jpg";
import photo3 from "../assets/photo3.jpg";
import "./styles/aboutver2.css";
import Button from "react-bootstrap/Button";

const Aboutme = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className="about-container" id="about">
      {/* <div className="button-about">
        <Button onClick={backButton} variant="primary">
          Back to home
        </Button>{" "}
      </div> */}
       <nav className="nav-container">
        <div className="nav-name">
          <Link className="nav-home" to={'/'}>
          <h2>
            Ricardo<b>Leon</b>Developer
          </h2>
          </Link>
        </div>
        <div className="nav-links">
          <Link to={'/about'} >About me</Link>
          <Link to={'/habilities'}>Skills</Link>
          <Link to={'/portfolio'}>Proyects</Link>
          <Link to={'/contactme'}>Contact</Link>
          <Link>Download CV</Link>
        </div>
      </nav>
      <div className="about-content">
        <div className="about-image">
          <img src={photo1} alt="photo1" className="aboutphoto" />
        </div>
        <div className="about-text">
          <h2 className="about-tittle">About me</h2>
          {/* <p className='about-paragraph' >Soy una persona sociable, amigable y con muy buen humor.
          Disfruto mucho de pasar con mi familia en mi tiempo libre, tambien hago deportes
          como el futbol y el tenis, tambien cuentan como deporte los videojuegos.

          En mi vida profesional eh tenido varias experiencias, mas en el campo empresarial,
          me gusta aprender doy todo para poder aprenderlo con excelencia.
          Hoy estoy inmerso en el mundo del desarrollo web, un lugar donde eh encontrado mi pasion,
          donde puedo desarrollar mi creatividad y estaré encantado de poner mis conocimientos y
          habilidades a servicio de su empresa, asi como tambien estoy emocionado por aprender nuevas
          aptitudes y habilidades que me permitan crecer como profesional.
        </p> */}
          <p className="about-paragraph">
            ¡Hello!, my name is <b>Ricardo Leon Sanchez</b>, i'm a
            <b>Full stack Developer</b>
            (Frontend, BackEnd) specialized in Javascript technologies, React
            and Nodejs.
            <br />
            i studied Business administration and Commercial engineering, i have
            courses of digital marketing too.
            <br />
            Now i'm immersed in the world of web development, taking courses
            from platforms like Platzi and Udemy, and the Academlo´s Academy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
