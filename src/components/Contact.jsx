import React from "react";
import { Link, useNavigate } from "react-router-dom";
import phone from "../assets/img/phone.svg";
import email from "../assets/img/mail 1.svg";
import "./styles/contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className="contact-container" id="contact">
      <nav className="nav-container-contact">
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
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-info-container">
        <div className="contact-info">
          <div className="infor">
            <h3>Call me</h3>
            <i className="bx bx-phone bxc"></i>
            <h3>+593-998499091</h3>
          </div>
          <div className="contact-info"></div>
          <div className="infor">
            <h3>Send me an Email</h3>
            <a href="mailto:rleons40@gmail.com?Subject=Vimos%20tu%20CV">
              <i className="bx bxl-gmail bxc"></i>
            </a>
            <h3>Rleons40@gmail.com</h3>
          </div>
        </div>
        <div className="linkscontainer">
          <div className="contactme">
            <h3 className="social-invitation">or contact me on my social networks!</h3>
          </div>
          <div className="links-buttons">
            <a
              href="https://www.linkedin.com/in/ricardoleons"
              className="linkdin"
              target="_blank"
            >
              <i className="bx bxl-linkedin link"></i>
            </a>
            <a
              href="https://walink.co/6a1656"
              className="whatsapp"
              target="_blank"
            >
              <i className="bx bxl-whatsapp bxc"></i>
            </a>
            <a
              href="https://github.com/RicardoLS90"
              className="whatsapp"
              target="_blank">
              <i class="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
