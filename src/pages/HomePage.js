import HpGallery from "../components/HpGallery.jsx";
import Parag from "../components/Parag.jsx";
import { Col, Row, Container, FormCheck, Image } from "react-bootstrap";
import Table from "../components/Tabel.jsx"
import wall from "../image/testWall.jpg"
import { useEffect } from "react";

  

function HomePage() {
  
  useEffect(() => {
    const sectionOne = document.querySelector(".intro");
    const nav = document.querySelector("nav");
    const navbar = document.querySelector(".navbar-nav");

    const sectionOneOptions = {};

    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      sectionOneObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add("nav-scrolled");
          navbar.classList.add("navbar-scrolled");
        } else {
          nav.classList.remove("nav-scrolled")
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
  });
  
  const hpw = {
    height: "100vh"
  }

  return (
    <Container fluid="true">
      <Container className="intro"></Container>
      
      <Col style={hpw}>
        
      </Col>
      <div className="overlay" style={{backgroundImage: 'url(${wall})'}}/>
    </Container>
  );

}

export default HomePage;