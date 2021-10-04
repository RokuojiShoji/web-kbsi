import HpGallery from "../components/HpGallery.jsx";
import Parag from "../components/Parag.jsx";
import { Col, Row, Container, FormCheck, Image } from "react-bootstrap";
import Table from "../components/Tabel.jsx";
//import wall from "../image/testBG1.png"
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    const sectionOne = document.querySelector(".intro");
    const nav = document.querySelector("nav");

    const sectionOneOption = {
      rootMargin: "-25% 0% 0% 0%  ",
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

  return (
    <Container fluid="true">
      <Row className="intro bg-img"></Row>
      <Row className="">
        
      </Row>
    </Container>
  );
}

export default HomePage;
