import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function PendaftaranAnggota () {
	const contain = {
    borderRadius: '0.5rem',
  }
  
  const label = {
    color: '#cacaca',
  }

  return (
		<Container style={contain} className='rubik-light w-50 bg-rb mt-2 mb-2 py-3'>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={label}>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={label}>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	)
}

export default PendaftaranAnggota;