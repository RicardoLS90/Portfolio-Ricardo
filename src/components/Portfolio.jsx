import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/portfolio.css";
import ecommerce from "../assets/img/ecommerce.png";
import memory from "../assets/img/memorygame.png";
import weather from "../assets/img/weather.png";
import pokedex from "../assets/img/pokedek.png";
import motivation from "../assets/img/motivation.png";
import digitalclock from "../assets/img/digitalclock.png";
import rickymorty from "../assets/img/rickymorty.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Portfolio = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate(-1);
  };

  return (
    
      <div className="portfolio-container" id="portfolio">
        {/* <div className='button-portfolio'>
          <Button onClick={backButton} variant="primary">Back to home</Button>{' '}
        </div> */}
        <div className="portfolio-info">
          <nav className="nav-container">
            <div className="nav-name">
              <Link className="nav-home" to={"/"}>
                <h2>
                  Ricardo<b>Leon</b>Developer
                </h2>
              </Link>
            </div>
            <label htmlFor="menu" className="nav-label">
              <i class="bx bx-menu"></i>
            </label>
            <input type="checkbox" id="menu" className="nav-input" />
            <div className="nav-links">
              <div className="nav-menu">
                <Link to={"/about"}>About me</Link>
                <Link to={"/habilities"}>Skills</Link>
                <Link to={"/portfolio"}>Proyects</Link>
                <Link to={"/contact"}>Contact</Link>
                <a
                  href="https://docs.google.com/document/d/1h4R7KKdrfzuDjFSvxYjhbnc04yUgFVlk/edit?usp=share_link&ouid=104687727224783542665&rtpof=true&sd=true"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </nav>
          <div className="portfoliotittle">
            <h2>Proyects</h2>
          </div>
          <div className="img-container">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ecommerce} />
              <Card.Body>
                <Card.Title>E-commerce</Card.Title>
                <Card.Text>
                  A complete tecnology e-commerce (React-Css-Bootstrap)
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://stellar-naiad-961462.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={memory} />
              <Card.Body>
                <Card.Title>Memory Game</Card.Title>
                <Card.Text>
                  Let's test your memory! (Html-Javascript-React-Css)
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://resilient-treacle-03d5ac.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={weather} />
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  shows the weather of the place where you are
                  (Html-Javascript-React-Css-Api)
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://ricardoleonentregable2.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pokedex} />
              <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                  A complete Pokedex! let's find your favourite Pokemon
                  (React-Css)
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://gleaming-granita-e65952.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={motivation} />
              <Card.Body>
                <Card.Title>Motivational Quotes</Card.Title>
                <Card.Text>
                  Begin your day with good energies! (React-Css)
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://ricardoleon-entregable1.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={rickymorty} />
              <Card.Body>
                <Card.Title>Rick and Morty Planets</Card.Title>
                <Card.Text>
                  You can find all characters per planet (React-Css)
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://ricardo-leon-rickyandmorty.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={digitalclock} />
              <Card.Body>
                <Card.Title>Digital CLock</Card.Title>
                <Card.Text>What time is it? (React-Javascript-Css)</Card.Text>
                <Button variant="danger">
                  <a
                    href="https://radiant-nougat-6402b1.netlify.app/"
                    target="_blank"
                  >
                    Check it!
                  </a>
                </Button>
              </Card.Body>
            </Card>
            {/* <a className='aportfolio' href="https://stellar-naiad-961462.netlify.app/" target='_blank'><img className='portfolio-img' src={ecommerce} alt="" />E-commerce</a>
            <a className='aportfolio' href="https://resilient-treacle-03d5ac.netlify.app/" target='_blank'><img className='portfolio-img' src={memory} alt="" />Let's test your memory</a>
            <a className='aportfolio' href="https://gleaming-granita-e65952.netlify.app/" target='_blank'><img className='portfolio-img' src={pokedex} alt="" />Love pokemon? Pokedex</a>
            <a className='aportfolio' href="https://ricardoleonentregable2.netlify.app/" target='_blank'><img className='portfolio-img' src={weather} alt="" />Weather App</a>
            <a className='aportfolio' href="https://ricardo-leon-rickyandmorty.netlify.app/" target='_blank'><img className='portfolio-img' src={rickandmorty} alt="" />Rick and Morty Multiverse</a> */}
          </div>
        </div>
      </div>
    
  );
};

export default Portfolio;
