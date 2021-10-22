import {Col, Row, Container} from "react-bootstrap";
import { useEffect } from "react";
import svgWallet from '../components/svgWallet'
import wallet from '../image/logoBsi.png'

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
    fontSize: '1.7rem',
    textAlign: 'justify',
  }

  const produkTitle = {
    color:'#cacaca',
    textAlign:'center',
    paddingBottom: '1.5rem',
    fontSize: '3.5rem'
  }

  const produkCard ={
    height:'20rem',
    width:'20rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 40px #333333'
  }
  const visi = {
    fontSize: '1.7rem',
    color: '#4d4d4d',
    textAlign: 'justify'
  }

  const link = {
    color: '#616161 !important',
    textAlign: 'right',
  }

  return (
    <>
      {/* intro */}
      <Container fluid="true" className="intro bg-img g-0 align-items-center">
        <div style={spacer}></div>
        <Col  style={im} className="text-center start">
          <h1 className='rubik-550'style={{fontSize:'3.5rem'}}>Siapa Kami ?</h1>
        </Col>
      </Container>
      <Container style={{width:'60vw'}} className="my-5">
        <p style={ident}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      
      {/* visi */}
      <Container fluid='true' className="g-0 py-5 bg-gw">
        <Row className="justify-content-center g-0">
          <Col className="my-auto" lg="3">
            <h1 className="rubik-bold" style={{color:'#4d4d4d', fontSize:'3.5rem'}}>
              Visi Kami
            </h1>
          </Col>
          <Col lg="6" >
            <p style={visi} className="">
            Terwujudnya Ekonomi Islam sebagai nilai bersama demi kemajuan dan kesinambungan koperasi dan 
            meningkatkan kesejahteraan lahir dan bathin masyarakat Indonesia menuju kebaikan di dunia dan di akhirat 
            </p>
            <div style={link}>
              <a className='rubik link' href='/visiMisi' >lihat selengkapnya --></a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* produk */}
      <Container fluid='true' className="justify-content-center py-5 bg-pp">
      <h1 className='rubik-bold' style={produkTitle}>Produk Kami</h1>
        <Row className='mx-auto' style={{width:'80vw'}}>
          <Col>
            <div style={produkCard} className='bg-gw my-5 mx-auto'>
              <img></img>
            </div>
          </Col>
          <Col >
            <div style={produkCard} className='bg-gw my-5 mx-auto'></div>
          </Col>
        </Row>
      </Container>

      {/* <div style={{height:'2px'}} className='bg-gw'></div> */}
    </>
  );
}

export default HomePage;
