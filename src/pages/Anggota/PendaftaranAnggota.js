import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import emailjs, { init } from '@emailjs/browser'
import React, { useRef } from 'react'

init('user_COW0bZlVe8lhcgD9ObueN')

function FormMaster(props) {
	const label = {
		color: '#cacaca',
		fontSize: '1rem'
	}

	const formStyle = {
		fontSize: '0.9rem'
	}
	
	return(
		<Form.Group className="mb-2">
			<Form.Label style={label}>{props.label}</Form.Label>
			<Form.Control style={formStyle} type={props.type} name={props.name} placeholder={props.placeholder} />
		</Form.Group>
	)
}

function PendaftaranAnggota() {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_37nf1ne', 'template_ucqpikd', form.current,)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	const contain = {
		borderRadius: '0.5rem',
	}

	const header = {
		textAlign:'center',
		color: '#636363',
		marginTop:'3rem',
		marginBottom:'4rem'
	}

	return (
		<Col>
			<h1 style={header} className='rubik-bold'>Form Pendaftaran Anggota</h1>
			<Container style={contain} className='rubik-light w-50 bg-rb mt-2 mb-2 py-3'>
				<Form ref={form} onSubmit={sendEmail}>
					<FormMaster 
						label='Nama Lengkap' 
						type='text' 
						name='namaLengkap' 
						//placeholder='masukkan nama lengkap' 
					/>
					<FormMaster 
						label='Nama Panggilan' 
						type='text' 
						name='namaPanggilan' 
						//placeholder='masukkan nama panggilan' 
					/>
					<FormMaster 
						label='Tempat / Tanggal Lahir' 
						type='text' 
						name='TTL' 
						placeholder='kota / hh-bb-tttt' 
					/>

					{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check style={label} type="checkbox" label="Check me out" />
					</Form.Group> */}
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</Col>
	)
}

export default PendaftaranAnggota;