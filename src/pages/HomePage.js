import {Col, Row, Container} from "react-bootstrap";
import { useEffect } from "react";
import {FaWallet, FaHandHoldingUsd, FaMoneyBillWave} from 'react-icons/fa'

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
    display: 'flex',
    flexDirection: 'column',
    height:'20rem',
    width:'20rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 40px #333333',
    padding: '3rem',
    textDecoration: 'none',
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


  const prodIcon = {
    height: '6.5rem',
    width: '6.5rem',
    margin: 'auto'
  }

  const prodName = {
    height: '20%',
    textAlign: 'center',
    verticalAlign: 'middle',
  }

  return (
    <>
      {/* intro */}
      <Container fluid="true" className="intro bg-img g-0 align-items-center">
        <div style={spacer}></div>
        <Col  style={im} className="text-center start">
          <h1 className='rubik-bold'style={{fontSize:'3.5rem'}}>Siapa Kami ?</h1>
        </Col>
      </Container>
      <Container style={{width:'60vw'}} className="my-5">
        <p style={ident}>
          Koperasi Baiturrahim Syariah Indonesia adalah koperasi yang kegiatan usahanya bergerak di bidang simpanan,
          pembiayaan, dan investasi sesuai pola bagi hasil dan jual beli tidak tunai yang disahkan menurut syariat Islam
          dan tidak bertentangan dengan peraturan perundang-undangan Negara Kesatuan Republik Indonesia
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
              <a className='rubik link' href='/visi-misi' >lihat selengkapnya --></a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* produk */}
      <Container fluid='true' className="justify-content-center py-5 bg-pp">
      <h1 className='rubik-bold' style={produkTitle}>Produk Kami</h1>
        <Row className='mx-auto' style={{width:'80vw'}}>
          <Col>
            <a href='/tabungan' style={produkCard} className='product-card my-5 mx-auto'>
              <FaWallet style={prodIcon} />
              <h3 style={prodName} className='rubik-bold'>Tabungan</h3>
            </a>
          </Col>
          <Col >
            <a href='/pembiayaan' style={produkCard} className='product-card my-5 mx-auto'>
              <FaHandHoldingUsd style={prodIcon} />
              <h3 style={prodName} className='rubik-bold'>Pembiayaan</h3>
            </a>
          </Col>
          <Col >
            <a href='/investasi' style={produkCard} className='product-card my-5 mx-auto'>
              <FaMoneyBillWave style={prodIcon} />
              <h3 style={prodName} className='rubik-bold'>Investasi</h3>
            </a>
          </Col>
        </Row>
      </Container>

      {/* <div style={{height:'2px'}} className='bg-gw'></div> */}
    </>
  );
}

export default HomePage;
