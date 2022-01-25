import {Container, Col} from "react-bootstrap";
import MediaCard from "../components/MediaCard";
import Separator from "../components/Separator";

import rat20101 from '../image/RAT TB 2010/rat2010.jpg'
import rattb121 from '../image/RAT TB 2012/rattb121.jpg'
import rattb122 from '../image/RAT TB 2012/rattb122.jpg'
import rattb123 from '../image/RAT TB 2012/rattb123.jpg'
import rat20131 from '../image/RAT TB 2013/rat20131.jpg'
import rat20132 from '../image/RAT TB 2013/rat20132.jpg'
import mat20161 from '../image/MAT TB 2016/mat-2016.jpg'
import mat20191 from '../image/MAT TB 2019/mat-19-1.jpg'
import mat20192 from '../image/MAT TB 2019/mat-19-2.jpg'
import bankSampah from '../image/Launching Bank Sampah/bs1.jpg'
import bazaar1 from '../image/Bazaar/b1.jpg'
import kantorLama from '../image/Kantor Lama/kanlam.jpg'
import rihlahJungle from '../image/Ke Hutan/hutan.jpg'
import rihlahPangandaran from '../image/Ke Pantai/pantai.jpg'
import kantorBaru from '../image/kantor baru.jpg'

import tim2015 from '../image/Tim BRS/2015.jpg'
import tim2016 from '../image/Tim BRS/2016.jpg'
import tim2018 from '../image/Tim BRS/2018.jpg'
import tim2019 from '../image/Tim BRS/2019.jpg'
import tim2021 from '../image/Tim BRS/2021.jpg'

function Media () {
	return (
		<Container>
			<Col>
				<Separator height='1rem' />
				<MediaCard 
					side='left'
					year='2011'
					text='RAT TB 2010'
					url1={rat20101}
				/>
				<MediaCard 
					side='right'
					year='2013'
					text='RAT TB 2012'
					url1={rattb121}
					url2={rattb122}
					url3={rattb123}
				/>
				<MediaCard 
					side='left'
					year='2014'
					text='RAT TB 2013'
					url1={rat20131}
					url2={rat20132}
				/>
				<MediaCard
					side='right'
					year='2016'
					text='Launching Bank Sampah Baiturrahim'
					url1={bankSampah}
				/>
				<MediaCard 
					side='left'
					text='MAT TB 2016'
					url1={mat20161}
				/>
				<MediaCard
					side='right'
					year='2017'
					text='Kantor Lama bsi'
					url1={kantorLama}
				/>
				<MediaCard
					side='left'
					year='2019'
					text='Rihlah ke The Jungle'
					url1={rihlahJungle}
				/>
				<MediaCard
					side='right'
					year='2020'
					text='Rihlah ke Pangandaran'
					url1={rihlahPangandaran}
				/>
				<MediaCard
					side='left'
					text='MAT TB 2019'
					url1={mat20191}
					url2={mat20192}
				/>
				<MediaCard
					side='right'
					year='2021'
					text='Kantor Baru bsi'
					url1={kantorBaru}
				/>
				<Separator height='1rem' />
				<MediaCard
					side='left'
					text='Bazaar'
					url1={bazaar1}
				/>
				<MediaCard
					side='right'
					text='Tim Baiturrahim Syariah'
					url1={2015}
					url2={2016}
					url3={2018}
				/>
				<Separator height='1rem' />
			</Col>
		</Container>
	)
}

export default Media;