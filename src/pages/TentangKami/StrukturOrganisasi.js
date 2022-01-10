import strukturOrganisasi from '../../image/strukturOrganisasi.png'
import {Row} from 'react-bootstrap'
function StrukturOrganisasi () {
	const style = {
		padding: '0px',
	}
	
	return (
		<Row className='p-0 m-1 justify-content-center'>
			<img style={style} src={strukturOrganisasi} alt="struktur organisasi"></img>
		</Row>
	)
}

export default StrukturOrganisasi;