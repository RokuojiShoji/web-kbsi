import struktur from '../../image/struktur.png'
import {Row} from 'react-bootstrap'
function StrukturOrganisasi () {
	const style = {
		padding: '0px',
		width: 'max(900px, 95vw)',
		display: 'block',
		margin: '0px auto'
	}
	
	return (
		<div style={{overflowX:'scroll'}} className='mx-1 my-5'>
			<img style={style} src={struktur} alt="struktur organisasi"/>
		</div>
	)
}

export default StrukturOrganisasi;