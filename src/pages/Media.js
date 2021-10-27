import { Container, Col, Row } from "react-bootstrap";
import { Carousel  } from "react-bootstrap";
import MediaCard from "../components/MediaCard";
import rat2010 from '../image/RAT TB 2010/rat2010.jpg'
import rat20131 from '../image/RAT TB 2013/rat20131.jpg'
import rat20132 from '../image/RAT TB 2013/rat20132.jpg'


function Media () {
	return (
		<Container>
			<Col>
				<div style={{height:'10px'}}></div>
				<MediaCard 
					side='left'
					year='2011'
					text='Deskripsi RAT TB 2010'
					url1={rat2010}
				/>
				<MediaCard 
					side='right'
					year='2014'
					text='Deskripsi RAT TB 2013'
					url1={rat20131}
					url2={rat20132}
				/>
			</Col>
		</Container>
	)
}

export default Media;