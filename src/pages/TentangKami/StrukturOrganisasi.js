import struktur from '../../image/struktur.png'
import {Row} from 'react-bootstrap'
function StrukturOrganisasi () {
	const style = {
		padding: '0px',
	}
	
	return (
		<Row className='mx-1 my-5 justify-content-center'>
			<img style={style} src={struktur} alt="struktur organisasi"></img>
		</Row>
	)
}

export default StrukturOrganisasi;