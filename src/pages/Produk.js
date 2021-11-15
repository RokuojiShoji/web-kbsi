import { Container, Row, Col } from "react-bootstrap";

function Separator () {
	return(
		<div style={{
			height:'4rem'
		}} />
	);
}

export default function Produk () {
  
	
	
	const box = {
		height: '20vw',
		width: '20vw',
		borderRadius: '0.5rem',	
		margin:'auto',
		
		// boxShadow: '5px 5px 10px #777777'
	}

	const head = {
		color: '#696969',
		textAlign: 'center',
		fontSize: '3.5rem'
	}

	const separator = {
		height: '4rem',
	}

	
	
	return (
		<Container>
			<Col>
				<Separator />
				<Row>
					<h1 style={head} className='rubik-bold my-auto' >PRODUK SIMPANAN	</h1>
				</Row>
				<Separator />
				<Row>
					<div style={box}  className='bg-rb'/>
					<div style={box}  className='bg-rb'/>
					<div style={box}  className='bg-rb'/>
				</Row>
				<Separator />
			</Col>
		</Container>
  );
}