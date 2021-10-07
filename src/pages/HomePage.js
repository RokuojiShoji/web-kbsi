import HpGallery from "../components/HpGallery.jsx";
import Parag from "../components/Parag.jsx";
import {Col, Row, Container, Carousel} from "react-bootstrap";
import { useEffect } from "react";
import test from '../image/testBG1.png'

function HomePage() {
  useEffect(() => {
    const sectionOne = document.querySelector(".intro");
    const nav = document.querySelector("nav");

    const sectionOneOption = {
      rootMargin: "-20% 0% 0% 0%  ",
    };

    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      sectionOneObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add("nav-scrolled");
        } else {
          nav.classList.remove("nav-scrolled");
        }
      });
    }, sectionOneOption);

    sectionOneObserver.observe(sectionOne);
  });

  const hpw = {
    height: "100vh",
  };

  const im = {
    position: 'sticky',
    top: '10rem',
    color: '#cacaca',
  }

  const spacer = {
    height: '40%',
  }

  const ident = {
    color: '#cacaca',
    fontSize: '2rem',
    textAlign: 'justify',
  }
  return (
    <>
      <Container fluid ="true" className="intro bg-img g-0 align-items-center">
        <div style={spacer}></div>
        <Col  style={im} className="text-center start">
          <h1>Siapa Kami ?</h1>
        </Col>
      </Container>
      <div style={{height:'2rem'}}></div>
      <Container className="w-75">
        <p style={ident}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    </>
  );
}

export default HomePage;
