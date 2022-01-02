import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"


export default function ProductCard(props) {
	
	const style = {
		height: '16rem',
		width: '20rem',
		//backgroundColor:'#696969',
		borderRadius:'0.5rem',
		boxShadow:'#cacaca 0px 0px 20px',
		padding:'1.5rem',
		margin: '2rem',
	}

	const head = {
		lineHeight: '80%',
		color: '#565656',
		fontSize: '1.3rem',
	}

	const sub = {
		color: '#cacaca',
		fontSize: '0.9rem'
	}

	const tombol = {
		borderRadius: '0.5rem',
		borderStyle: 'none',
		padding: '0.5rem 0.8rem',
		fontSize: '1.1rem',
		color: '#F0EFF4'
	}

	
	return(
		<>
		<Col className='gx-0'style={style}>
			<Row style={{height:'10%'}}>
				<h3 style={head} className='rubik-bold'>{props.type}</h3>
			</Row>
			<Row style={{height:'10%'}}>
				<p style={sub} className='rubik-light'>{props.explain}</p>
			</Row>
			<Row style={{height:'80%', padding:'0rem 0.8rem'}}>
				<Button style ={tombol} className='bg-pp rubik align-self-end' size='lg'>
					lihat selengkapnya
				</Button>
			</Row>	
		</Col>
		</>
	)
}
