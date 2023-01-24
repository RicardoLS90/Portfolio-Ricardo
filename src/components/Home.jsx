import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ricardoimg from "../assets/yo1.jpg";
import "./styles/homever2.css";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  const goToHabilities = () => {
    navigate("/habilities");
  };

  return (
    <div className="homecontainer" id="home">
      <nav className="nav-container">
        <div className="nav-name">
          <h2>
            Ricardo<b>Leon</b>Developer
          </h2>
        </div>
        <div className="nav-links">
          <Link to={'/about'} >About me</Link>
          <Link to={'/habilities'}>Skills</Link>
          <Link to={'/portfolio'}>Proyects</Link>
          <Link to={'/contact'}>Contact</Link>
          <a href="https://docs.google.com/document/d/1h4R7KKdrfzuDjFSvxYjhbnc04yUgFVlk/edit?usp=share_link&ouid=104687727224783542665&rtpof=true&sd=true" target="_blank">Download CV</a>
        </div>
      </nav>

      <div className="information">
        <div className="home">
          {/* <img src={ricardoimg} alt="ricardoimg" className='home-img' /> */}
          <h2 className="home-tittle info">
            <b>Full Stack Developer</b>
          </h2>
          <div className="text-animation">
          <h1 className="home-text info">Ricardo Leon Developer</h1>
          </div>
        </div>
      </div>
      <div className="buttonlink-container">
        {/* <div className="button-container">
          <button className="button-link skils" onClick={goToHabilities}>
            Skills
          </button>
          <button className="button-link portfolio" onClick={goToPortfolio}>
            Portfolio
          </button>
          <button className="button-link aboutb" onClick={goToAbout}>
            About me
          </button>
        </div> */}
        <div className="linkscontainer">
          <div className="contactme">
            <h2>CONTACT ME</h2>
          </div>
          <div className="links-buttons">
            <a href="https://www.linkedin.com/in/ricardoleons" className="linkdin" target="_blank">
              <i className="bx bxl-linkedin link"></i>
            </a>
            <a href="https://walink.co/6a1656" className="whatsapp" target="_blank">
              <i className="bx bxl-whatsapp bxc"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
