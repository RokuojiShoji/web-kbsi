import { Container, Row, Col } from "react-bootstrap";
import {SiYoutube, SiGmail, SiWhatsapp, SiTelegram, SiInstagram, SiFacebook} from "react-icons/si"
import logoBsi from '../image/logoBsi.png'

function LinkCard(props) {
    
    const card = {
        height: '6em',
        margin: '1em',
        width: '90%',
        maxWidth: '450px',
        borderRadius: '0.5em',
        color: '#cacaca',
        textDecoration: 'none',
    }

    const line = {
        borderLeft: "2px solid #cacaca",
        borderRight: "2px solid #cacaca",
        height: "4em",
        width: "0px",
        marginLeft: "auto",
        marginRight: "auto",
      };

    const text = {
        justifyContent:'center',
        alignItems: 'center',
        display:'flex',
        height:'100%',
        fontSize:'2.5em'
    }

    return(
        <a className='bg-rb d-flex justify-content-center mx-auto' rel='noreferrer noopener' target='_blank' href={props.link} style={card}>
            <Col xs='2' className='justify-content-end d-flex'>
                {props.icon}
            </Col>
            <Col xs='8'>
                <h1 style={text} className="rubik-bold">{props.text}</h1>
            </Col>
        </a>
    )
}

export default function Link () {
    
    const linkIcon = {
        height:'80%',
        width: '90%',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
    
    return (
    <Row  style={{height: '100vh', alignItems: 'center'}}>
    <Col className="justify-content-center">
        <a href='/home'><img src={logoBsi} className="d-block my-5 mx-auto" style={{width:'60%'}} alt=""/></a>
        <LinkCard icon={<SiTelegram style={linkIcon}/>} text='Telegram' link='https://t.me/Kopbsi' />
        <LinkCard icon={<SiWhatsapp style={linkIcon}/>} text='Whatsapp' link='https://wa.me/+6285104711175' />
        <LinkCard icon={<SiGmail style={linkIcon}/>} text='Gmail' link='mailto:koperasibaiturrahimindonesia@gmail.com' />
        <LinkCard icon={<SiYoutube style={linkIcon}/>} text='Youtube' link='https://www.youtube.com/channel/UCzjL4sTVwfcBNNei6b36wSQ' />
        <LinkCard icon={<SiInstagram style={linkIcon}/>} text='Instagram' link='https://www.instagram.com/baiturrahimsyariah' />
        <LinkCard icon={<SiFacebook style={linkIcon}/>} text='Facebook' link='https://www.facebook.com/baiturrahimsyariah/' />
    </Col>
    </Row>
    
    )
}