import { Container, Col, Row } from "react-bootstrap";
import MediaCard from "../components/MediaCard";
import Separator from "../components/Separator";

import rat20101 from '../image/RAT TB 2010/rat2010.jpg'
import rat20131 from '../image/RAT TB 2013/rat20131.jpg'
import rat20132 from '../image/RAT TB 2013/rat20132.jpg'
import rat20141 from '../image/RAT TB 2014/RAT-14-1.jpg'
import mat20161 from '../image/MAT TB 2016/mat-2016.jpg'
import mat20191 from '../image/MAT TB 2019/mat-19-1.jpg'
import mat20192 from '../image/MAT TB 2019/mat-19-2.jpg'
import bankSampah from '../image/Launching Bank Sampah/bs1.jpg'
import bazaar1 from '../image/Bazaar/b1.jpg'
import kantorLama from '../image/Kantor Lama/kanlam.jpg'
import rihlahJungle from '../image/Ke Hutan/hutan.jpg'
import rihlahPangandaran from '../image/Ke Pantai/pantai.jpg'

function Media () {
	return (
		<Container>
			<Col>
				<Separator height='1rem' />
				<MediaCard 
					side='left'
					year='2011'
					text='Deskripsi RAT TB 2010'
					url1={rat20101}
				/>
				<MediaCard 
					side='right'
					year='2014'
					text='Deskripsi RAT TB 2013'
					url1={rat20131}
					url2={rat20132}
				/>
				<MediaCard 
					side='left'
					year='2015'
					text='Deskripsi RAT TB 2014'
					url1={rat20141}
				/>
				<MediaCard
					side='right'
					year='2016'
					text='Deskripsi launching bank sampah bsi'
					url1={bankSampah}
				/>
				<MediaCard 
					side='right'
					text='Deskripsi MAT TB 2016'
					url1={mat20161}
				/>
				<MediaCard
					side='left'
					year='2017'
					text='deskripsi kantor lama bsi'
					url1={kantorLama}
				/>
				<MediaCard
					side='right'
					year='2019'
					text='deskripsi rihlah ke jungle'
					url1={rihlahJungle}
				/>
				<MediaCard
					side='left'
					year='2020'
					text='deskripsi rihlah ke jungle'
					url1={rihlahPangandaran}
				/>
				<MediaCard
					side='left'
					text='Deskripsi MAT TB 2019'
					url1={mat20191}
					url2={mat20192}
				/>
				<Separator height='1rem' />
				<MediaCard
					side='right'
					text='deskripsi bazaar'
					url1={bazaar1}
				/>
				<Separator height='1rem' />
			</Col>
		</Container>
	)
}

export default Media;