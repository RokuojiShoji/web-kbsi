import { Container, Row, Col } from "react-bootstrap";


export default function Produk () {
  
	
	const box = {
		height: '20vw',
		width: '20vw',
		borderRadius: '0.4rem',	
		margin:'auto',
		// boxShadow: '5px 5px 10px #777777'
	}

	const head = {
		color: '#666666'
	}
	
	return (
		<>
			<Container style={{height: '100vh'}}>
				<Row className="my-5" >
					{/* <Col lg='4'>
						<div style={box} className="bg-pp"></div>
					</Col>
					<Col lg='8'>
						<h1 style={head} className='rubik-bold'>Produk 1</h1>
						<p>

						</p>
					</Col> */}
				</Row>
			</Container>
		</>
  );
}