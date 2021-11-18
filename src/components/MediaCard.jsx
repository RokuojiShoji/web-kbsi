import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";

function ImgSlide(props) {
  const imgStyle = {
    display: "block",
    width: "100%",
    padding: "1rem",
  };

  return (
    <Carousel nextIcon="" prevIcon="" indicatorLabels="" >
      {props.src1 != null && (
        <CarouselItem>
          <img src={props.src1} style={imgStyle} />
        </CarouselItem>
      )}
      {props.src2 != null && (
        <CarouselItem>
          <img src={props.src2} style={imgStyle}/>
        </CarouselItem>
      )}
      {props.src3 != null && (
        <CarouselItem>
          <img src={props.src3} style={imgStyle}/>
        </CarouselItem>
      )}
    </Carousel>
  );
}

export default function MediaCard(props) {
  const text = {
    textAlign: "center",
    margin: "auto",
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
      {props.side == 'left' && (
      <>		
			<Col xl="5">
        <ImgSlide src1={props.url1} src2={props.url2} src3={props.url3} />
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
        <h2 style={text}>{props.text}</h2>
      </Col>
			</>
			)}

{props.side == 'right' && (
      <>
			<Col xl="5" className="justify-content-center d-flex">
				<h2 style={text}>{props.text}</h2>
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
				<ImgSlide src1={props.url1} src2={props.url2} src3={props.url3} />
      </Col>
			</>
			)}
    </Row>
  );
}
