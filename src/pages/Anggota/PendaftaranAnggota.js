import { Container, Row, Col, Form, Button, FormText } from 'react-bootstrap'
import emailjs, { init } from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import Separator from '../../components/Separator'
import { Redirect } from 'react-router-dom'

init('user_COW0bZlVe8lhcgD9ObueN')

function FormMaster(props) {
	const label = {
		color: '#cacaca',
		fontSize: '1rem',
		marginBottom: '0px'
	}

	const formStyle = {
		fontSize: '0.9rem'
	}

	return (
		<Form.Group className="mb-2">
			<Form.Label style={label}>{props.label}</Form.Label>
			<Form.Control style={formStyle} type={props.type} name={props.name} placeholder={props.placeholder} />
			<FormText>{props.sub}</FormText>
		</Form.Group>
	)
}

function Confirmation() {
	const style = {
		width: '80%',
		color: '#cacaca',
		fontSize: '1rem',
		borderRadius: '0.3rem',
		textAlign: 'center',
		padding: '1rem',
		margin: '1rem auto 1.5rem auto'
	}

	return (
		<Container style={style} className='bg-pp'>
			Data anda sudah terkirim!
		</Container>
	)
}

function PendaftaranAnggota() {

	const form = useRef();
	const [show, setShow] = useState(false)
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_37nf1ne', 'template_ucqpikd', form.current,)
			.then((result) => {
				console.log(result.text);
				setShow(true);
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})
			}, (error) => {
				console.log(error.text);
			});


	};

	const contain = {
		borderRadius: '0.5rem',
	}

	const header = {
		textAlign: 'center',
		color: '#636363',
		marginTop: '3rem',
		marginBottom: '4rem'
	}

	return (
		<Col>
			<h1 style={header} className='rubik-bold'>Form Pendaftaran Anggota</h1>
			<Container style={contain} className='rubik-light w-50 bg-rb mt-2 mb-2 py-3'>
				{
					show ? <Confirmation />
						: null
				}
				<Form ref={form} onSubmit={sendEmail}>
					<FormMaster
						label='Nama Lengkap'
						type='text'
						name='namaLengkap'
					/>
					<FormMaster
						label='Nama Panggilan'
						type='text'
						name='namaPanggilan'
					/>
					<FormMaster
						label='NIK'
						type='text'
						name='nik'
					/>
					<FormMaster
						label='Nama Ibu Kandung'
						type='text'
						name='nama ibu kandung'
					/>
					<FormMaster
						label='Tempat / Tanggal Lahir'
						type='text'
						name='TTL'
						placeholder='kota / hh-bb-tttt'
						sub='Format = kota / hh-bb-tttt'
					/>
					<FormMaster
						label='Pekerjaan'
						type='text'
						name='pekerjaan'
					/>
					<FormMaster
						label='Alamat'
						type='textarea'
						name='alamat'
						sub='masukkan alamat sesuai KTP'
					/>

					{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check style={label} type="checkbox" label="Check me out" />
					</Form.Group> */}
					<Separator height='2rem' />
					<div className='w-100'>
						<Button className='' variant="primary" type="submit">
							Submit
						</Button>
					</div>
				</Form>
			</Container>
		</Col>
	)
}

export default PendaftaranAnggota;