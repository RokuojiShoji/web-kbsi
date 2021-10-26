import { Container, Col, Row } from "react-bootstrap";
import { Carousel  } from "react-bootstrap";
import MediaCard from "../components/MediaCard";


function Media () {
	return (
		<Container>
			<Col>
				<Row>
					 <MediaCard />
				</Row>
			</Col>
		</Container>
	)
}

export default Media;