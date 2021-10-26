import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import mat191 from '../image/MAT TB 2019/mat-19-1.jpg'
import mat192 from '../image/MAT TB 2019/mat-19-2.jpg'

function ImgSlide(props) {
	
	const imgStyle = {
		display: 'block',
		width: '100%',
	}

	return (
    <Carousel>
      {props.src1 != null &&
				<CarouselItem>
        	<img src={props.src1} style={imgStyle}/>
      	</CarouselItem>
			}
			{props.src2 != null &&
				<CarouselItem>
        	<img src={props.src2} />
      	</CarouselItem>
			}
			{props.src3 != null &&
				<CarouselItem>
        	<img src={props.src3} />
      	</CarouselItem>
			}
    </Carousel>
  );
}

export default function MediaCard(props) {
	return (
    <Row>
      <Col>
        <ImgSlide src1={mat191} src2={props.url2} src3={props.url3} />
      </Col>
			<Col>
				<p>deskripsi foto</p>
			</Col>
    </Row>
  );
}
