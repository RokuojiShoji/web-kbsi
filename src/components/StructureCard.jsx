import { Col } from 'react-bootstrap'
import Separator from '../components/Separator'
export default function StructureCard(props) {

	const card = {
		width: '12rem',
		height: '18rem',
		borderRadius: '0.5rem',
		boxShadow: '#3f3f3f 5px 5px 10px',
		padding: '1rem'
	}

	const photo = {
		display: 'block',
		width: 'auto',
		height: '62%',
		margin: 'auto',
		borderRadius: '0.5rem',
	}

	const nameContainer = {
		display: 'flex',
		width: '100%',
		height: '20%',
		alignItems: 'center',
	}

	// const positionContainer = {
	// 	display: 'flex',
	// 	width: '100%',
	// 	height: '10%',
	// 	alignItems: 'center',
	// }

	const name = {
		color: '#afafaf',
		textAlign: 'center',
		width: '100%',
		fontSize: '1.2rem'
	}

	const position = {
		width: '100%',
		color: '#7a7a7a',
		textAlign: 'center',
		fontSize: '1.1rem',
	}

	return (
		<Col>
			<Col className='bg-rb ' style={card}>
				<img src={props.photo} alt='foto' style={photo}>

				</img>
				<Separator height='5%'/>
				<div style={nameContainer}>
					<p className='my-auto rubik' style={name}>{props.name}</p>
				</div>
				{/* <Separator height='5%'/> */}
				<div style={nameContainer}>
					<p className='rubik' style={position}>{props.position}</p>
				</div>
				{/* <Separator height='5%'/> */}
			</Col>
		</Col>
	)
}