import { Col, Container, Row } from "react-bootstrap";
import "../App.css"
import logo from "../image/logoBsi.png"
import {FaInstagram, FaWhatsapp, FaTelegram} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
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
          <a style={{width:'auto'}} href='https://www.instagram.com/baiturrahimsyariah'><FaInstagram style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https:/gi/wa.me/+6285104711175'><FaWhatsapp style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https://t.me/Kopbsi'><FaTelegram style={mediaIcon}/></a>
          <a style={{width:'auto'}} href='https://goo.gl/maps/UwyJN33t56aMbeve6'><MdLocationOn style={mediaIcon}/></a>
        </Row>
        <Row className="g-0 px-2 text-center justify-content-center footer-bottom bg-rb rubik">Copyright &copy; Koperasi bsi </Row>
      </Col>
      
    </Container>
  );
}