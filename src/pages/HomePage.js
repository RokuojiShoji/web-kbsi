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

  const produk = {
    color:'#cacaca',
    textAlign:'center',
    paddingBottom: '1.5rem',
    fontSize: '3.5rem'
  }

  const produkCard ={
    height:'9rem',
    borderRadius: '0.5rem',
  }
  const visi = {
    fontSize: '2rem',
    color: '#4d4d4d',
    textAlign: 'justify'
  }
  return (
    <>
      <Container fluid="true" className="intro bg-img g-0 align-items-center">
        <div style={spacer}></div>
        <Col  style={im} className="text-center start">
          <h1 className='rubik-550'style={{fontSize:'3.5rem'}}>Siapa Kami ?</h1>
        </Col>
      </Container>
      <Container style={{width:'65vw'}} className="my-5">
        <p style={ident}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      
      <Container fluid='true' className="g-0 py-5 bg-gw">
        <Row className="justify-content-center g-0">
          <Col className="my-auto" lg="3">
            <h1 className="rubik-bold" style={{color:'#4d4d4d', fontSize:'3.5rem'}}>
              Visi Kami
            </h1>
          </Col>
          <Col lg="7" >
            <p style={visi} className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
      </Container>
      {/* <div style={{height:'3rem'}}></div> */}

      <Container fluid='true' className="justify-content-center py-5 bg-rb">
        <Col className='mx-auto' style={{width:'60vw'}}>
          <h1 className='rubik-550' style={produk}>Produk Kami</h1>
          <div style={produkCard} className='bg-gw my-4'></div>
          <div style={produkCard} className='bg-gw my-4'></div>
        </Col>
      </Container>

      <div style={{height:'2px'}} className='bg-gw'></div>
    </>
  );
}

export default HomePage;
