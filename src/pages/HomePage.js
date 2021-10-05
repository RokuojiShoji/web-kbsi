import HpGallery from "../components/HpGallery.jsx";
import Parag from "../components/Parag.jsx";
import { CardGroup, Col, Row, Container, FormCheck, Image, Card, CardColumns } from "react-bootstrap";
import Table from "../components/Tabel.jsx";
import { useEffect } from "react";

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

  return (
      <>
      <Row className="intro bg-img g-0"></Row>
      <Row style={hpw} className="g-0">
        
      </Row>
      </>
  );
}

export default HomePage;
