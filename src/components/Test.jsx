import React from "react";
import {Container, Modal, Row, Col} from 'react-bootstrap'
import "../App.css"

function AlbumModal (props) {
    
  	const [modalShow, setModalShow] = React.useState(false);
	//const images = props.image.join(', ')
	
	
	return (
		<Container>
			<Col>
				<Row className="justify-content-around">
					
					<Col md="3" className="album-container">
						<button onClick={() => setModalShow(true)}>
							<h1 className="rubik-bold" style={{background:'none'}}>2017</h1>
						</button>
					</Col>

				</Row>
			</Col>

			<Modal size='lg' show={modalShow} onHide={() => setModalShow(false)} centered>
			<Modal.Header closeButton>
				<Modal.Title style={{margin: 'auto 0em auto auto'}}>
					2017
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					{props.image}
					{/* {images.map(x => <Col md="4" style={{width: '15em', height:'10em', backgroundColor:'#696969', margin:'1em auto', borderRadius: '0.5em'}}/>)} */}
				</Row>
			</Modal.Body>
		</Modal>
		</Container>
	)
}

export function Test () {
	
	const t2018 = ['12', '13', '14']
	return(
		<>
		<AlbumModal image={t2018} />
		<AlbumModal />
		</>
	)
}