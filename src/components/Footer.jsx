import { Col, Container, Row } from "react-bootstrap";
import "../App.css"
import logo from "../image/logoBsi.png"
import {SiGmail, SiWhatsapp, SiTelegram, SiInstagram, SiFacebook} from "react-icons/si"
import {MdLocationPin} from 'react-icons/md'
import Separator from "./Separator";
export default function Footer () {
	
  const mediaIcon = {
    color: '#F0EFF4',
    outlineColor: '#F0EFF4',
    width: '40px',
    height: '40px'
  }
  const alamat = {
    textAlign: "left",
    color: "#F0EFF4"
  }
  return (
    <Container fluid="true">
      <Col className="footer bg-rb">
        <Separator height='1.5rem'/>
        <Row className="g-0 footer-logo">
          <img src={logo} className='py-1' style={{height:'90%', width:'auto'}}/>
        </Row>
        <Row className="g-0 footer-media w-25 mx-auto">
        <a style={{width:'auto'}} href='https://t.me/Kopbsi'><SiTelegram className='mx-1' style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https://www.instagram.com/baiturrahimsyariah'><SiInstagram style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https://goo.gl/maps/UwyJN33t56aMbeve6'><MdLocationPin style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https://wa.me/+6285104711175'><SiWhatsapp style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https://www.facebook.com/baiturrahimsyariah/'><SiFacebook className='mx-1' style={mediaIcon}/></a>
        </Row>
        {/* <Row className="footer-mail"></Row> */}
        <Separator height='2rem'/>
        <Row className="g-0 px-2 text-center justify-content-center footer-bottom bg-rb rubik">Copyright &copy; Koperasi bsi </Row>
      </Col>
      
    </Container>
  );
}