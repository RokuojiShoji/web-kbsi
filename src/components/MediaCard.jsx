import React from "react";
import { Carousel, CarouselItem, Col, Row } from "react-bootstrap";

function ImgSlide(props) {
  const imgStyle = {
    display: "block",
    maxWidth:'100%',
    maxHeight:'21rem',
    padding: "0.8rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "1.5em",
  };

  return (
    <Carousel nextIcon="" prevIcon="" indicatorLabels="" >
      {props.src1 != null && (
        <CarouselItem>
          <img alt ='carouselImg' src={props.src1} style={imgStyle} />
        </CarouselItem>
      )}
      {props.src2 != null && (
        <CarouselItem>
          <img alt ='carouselImg' src={props.src2} style={imgStyle}/>
        </CarouselItem>
      )}
      {props.src3 != null && (
        <CarouselItem>
          <img alt ='carouselImg' src={props.src3} style={imgStyle}/>
        </CarouselItem>
      )}
      {props.src4 != null && (
        <CarouselItem>
          <img alt ='carouselImg' src={props.src4} style={imgStyle}/>
        </CarouselItem>
      )}
      {props.src5 != null && (
        <CarouselItem>
          <img alt ='carouselImg' src={props.src5} style={imgStyle}/>
        </CarouselItem>
      )}
    </Carousel>
  );
}

export default function MediaCard(props) {
  const text = {
    textAlign: "center",
    margin: "auto",
    color: "#696969"
  };

  var line, year

  if (props.year != null) {
    line = {
      borderLeft: "2px solid #696969",
      borderRight: "2px solid #696969",
      height: "45%",
      width: "1px",
      marginLeft: "auto",
      marginRight: "auto",
    };
    year = {
      color: "#696969",
      height: '10%',
      textAlign: "center"
    };

  } else {
    line = {
      borderLeft: "2px solid #696969",
      borderRight: "2px solid #696969",
      height: "50%",
      width: "1px",
      marginLeft: "auto",
      marginRight: "auto",
    };
    year = {
      color: "#696969",
      height: '0%',
      textAlign: "center"
    };
  }
  
  return (
    <Row className="justify-content-center">
      {props.side === 'left' && (
      <>		
			<Col xl="5">
        <ImgSlide src1={props.url1} src2={props.url2} src3={props.url3} src4={props.url4} src5={props.url5}/>
      </Col>
      <Col xl="1" className="g-0 justify-content-center">
        <Row style={line} />
        <Row style={year}>
          <p style={{ margin: "auto"}}>
            {props.year}
          </p>
        </Row>
        <Row style={line} />
      </Col>
      <Col xl="5" className="justify-content-center d-flex">
        <h1 style={text} className="rubik-550">{props.text}</h1>
      </Col>
			</>
			)}

{props.side === 'right' && (
      <>
			<Col xl="5" className="justify-content-center d-flex">
				<h1 style={text} className="rubik-550">{props.text}</h1>
      </Col>
      <Col xl="1" className="g-0 justify-content-center">
        <Row style={line} />
        <Row style={year}>
          <p style={{margin: "auto"}}>
            {props.year}
          </p>
        </Row>
        <Row style={line} />
      </Col>
      <Col xl="5" >
				<ImgSlide src1={props.url1} src2={props.url2} src3={props.url3} src4={props.url4} src5={props.url5}/>
      </Col>
			</>
			)}
    </Row>
  );
}
