import React from "react";
import mobile from "../assets/img/mobile.svg";
import sistems from "../assets/img/material.svg";
import web from "../assets/img/web.svg";
import "./styles/habilites.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const Habilities = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className="habilities-container" id="habilities">
      <nav className="nav-container">
        <div className="nav-name">
          <Link className="nav-home" to={"/"}>
            <h2>
              Ricardo<b>Leon</b>Developer
            </h2>
          </Link>
        </div>
        <div className="nav-links">
          <Link to={"/about"}>About me</Link>
          <Link to={"/habilities"}>Skills</Link>
          <Link to={"/portfolio"}>Proyects</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link>Download CV</Link>
        </div>
      </nav>
      {/* <div className='button-portfolio'>
          <Button onClick={backButton} variant="primary">Back to home</Button>{' '}
        </div> */}
      <div className="general-container">
        <h1>Skills</h1>
        <div className="container contone">
          <h2 className="titlle">FrontEnd</h2>
          <div className="habilities front-end">
            <div className="front react">
              <i class="bx bxl-react"></i>
              <h3>React</h3>
            </div>
            <div className="front javascript">
              <i class="bx bxl-javascript"></i>
              <h3>Javascript</h3>
            </div>
            <div className="front css">
              <i class="bx bxl-css3"></i>
              <h3>Css</h3>
            </div>
            <div className="front bootstrap">
              <i class="bx bxl-bootstrap"></i>
              <h3>Bootstrap</h3>
            </div>
            <div className="front html">
              <i class="bx bxl-html5"></i>
              <h3>Html</h3>
            </div>
          </div>
        </div>
        <div className="container conttwo">
          <h2 className="titlle">BackEnd</h2>
          <div className="habilities back-end">
            <div className="front mobile">
              <i class="bx bxl-nodejs"></i>
              <h3>NodeJs</h3>
            </div>
          </div>
        </div>
        <div className="container contthree">
          <h2 className="titlle">DataBase</h2>
          <div className="habilities back-end">
            <div className="front mobile">
              <i class="bx bxl-postgresql"></i>
              <h3>PostgressSQL</h3>
            </div>
            <div className="front mobile">
              <i class="bx bx-data"></i>
              <h3>mySQL</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="linkscontainer">
        <div className="contactme">
          <h2>CONTACT ME</h2>
        </div>
        <a href="https://www.linkedin.com/in/ricardoleons" target="_blank">
          <i className="bx bxl-linkedin link"></i>
        </a>
        <a
          href="https://walink.co/6a1656"
          target="_blank"
          className="whatcontainer"
        >
          <i className="bx bxl-whatsapp bxc"></i>
        </a>
      </div> */}
    </div>
  );
};

export default Habilities;
