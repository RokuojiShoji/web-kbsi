import { Col, Container, Row } from "react-bootstrap";
import "../App.css"
import logo from "../image/logoBsi.png"
import {SiYoutube, SiGmail, SiWhatsapp, SiTelegram, SiInstagram, SiFacebook} from "react-icons/si"
import {MdLocationPin} from 'react-icons/md'
import Separator from "./Separator";
export default function Footer () {
	
  const mediaIcon = {
    color: '#F0EFF4',
    outlineColor: '#F0EFF4',
    width: '40px',
    height: '40px'
  }
  // const alamat = {
  //   textAlign: "left",
  //   color: "#F0EFF4"
  // }

  return (
    <Container fluid="true">
      <Col className="footer bg-rb">
        <Separator height='1.5rem'/>
        <Row className="g-0 footer-logo">
          <img src={logo} alt='logoBsi' className='py-1' style={{height:'90%', width:'auto'}}/>
        </Row>
        <Row className="g-0 footer-media mx-auto" style={{width:'25rem'}}>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='https://t.me/Kopbsi'><SiTelegram style={mediaIcon}/></a>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='https://wa.me/+6285104711175'><SiWhatsapp className='mx-1' style={mediaIcon}/></a>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='mailto:koperasibaiturrahimindonesia@gmail.com'><SiGmail style={mediaIcon}/></a>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='https://goo.gl/maps/UwyJN33t56aMbeve6'><MdLocationPin style={mediaIcon}/></a>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='https://www.youtube.com/channel/UCzjL4sTVwfcBNNei6b36wSQ'><SiYoutube style={mediaIcon}/></a>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='https://www.instagram.com/baiturrahimsyariah'><SiInstagram className='mx-1' style={mediaIcon}/></a>
          <a style={{width:'auto'}} rel='noreferrer noopener' target='_blank' href='https://www.facebook.com/baiturrahimsyariah/'><SiFacebook style={mediaIcon}/></a>
        </Row>
        <Separator height='2rem'/>
        <Row className="g-0 px-2 text-center justify-content-center footer-bottom bg-rb rubik">Copyright &copy; Koperasi bsi </Row>
      </Col>
      
    </Container>
  );
}