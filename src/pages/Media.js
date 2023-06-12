import {Container, Col} from "react-bootstrap";
import MediaCard from "../components/MediaCard";
import Separator from "../components/Separator";

import rat20101 from '../image/MAT/2010/rat2010.jpg'
import rattb121 from '../image/MAT/2012/rattb121.jpg'
import rattb122 from '../image/MAT/2012/rattb122.jpg'
import rattb123 from '../image/MAT/2012/rattb123.jpg'
import rat20131 from '../image/MAT/2013/rat20131.jpg'
import rat20132 from '../image/MAT/2013/rat20132.jpg'
import mat20161 from '../image/MAT/2016/mat-2016.jpg'
import mat20191 from '../image/MAT/2019/mat-19-1.jpg'
import mat20192 from '../image/MAT/2019/mat-19-2.jpg'
import mat20201 from '../image/MAT/2020/mat20_1.jpg'
import mat20202 from '../image/MAT/2020/mat20_2.jpg'
import mat20211 from '../image/MAT/2021/mat21_6.jpg'
import mat20212 from '../image/MAT/2021/mat21_5.jpg'
import mat20213 from '../image/MAT/2021/mat21_1.jpg'
import mat20221 from '../image/MAT/2022/mat-22-1.jpg'

import garut1 from '../image/Gathering Mitra/Garut/garut_2.jpg'
import garut2 from '../image/Gathering Mitra/Garut/garut_6.jpg'

import vaksin1 from '../image/Vaksin/vaksin_4.jpg'
import vaksin2 from '../image/Vaksin/vaksin_5.jpg'

import kalDes221 from '../image/Kalam/Desember 2022/KalDes22_1.jpg'
import kalDes222 from '../image/Kalam/Desember 2022/KalDes22_2.jpg'
import kalDes223 from '../image/Kalam/Desember 2022/KalDes22_3.jpg'

import bankSampah from '../image/Launching Bank Sampah/bs1.jpg'
import bazaar1 from '../image/Bazaar/b1.jpg'
import kantorLama from '../image/Kantor Lama/kanlam.jpg'
import rihlahJungle from '../image/Ke Hutan/hutan.jpg'
import rihlahPangandaran from '../image/Ke Pantai/pantai.jpg'
import kantorBaru from '../image/kantor baru.jpg'

import pltSnack1 from '../image/KISAH/Snack Bouquet/pltSnack_1_.jpg'
import pltSnack2 from '../image/KISAH/Snack Bouquet/pltSnack_2_.jpg'
import pltSnack3 from '../image/KISAH/Snack Bouquet/pltSnack_3_.jpg'
import pbcSpk1 from '../image/KISAH/Public Speaking/pbcSpk_5.jpg'
import pbcSpk2 from '../image/KISAH/Public Speaking/pbcSpk_3.jpg'
import haBil1 from '../image/Halal Bihalal 2023/haBil_1.jpg'
import haBil2 from '../image/Halal Bihalal 2023/haBil_3.jpg'
import haBil3 from '../image/Halal Bihalal 2023/haBil_5.jpg'

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
				<MediaCard
					side='left'
					text='MAT Tahun Buku 2020'
					url1={mat20201}
					url2={mat20202}
				/>
				<MediaCard
					side='right'
					year='2022'
					text='MAT Tahun Buku 2021'
					url1={mat20211}
					url2={mat20212}
					url3={mat20213}
				/>
				<MediaCard
					side='left'
					text='Vaksin COVID-19'
					url1={vaksin1}
					url2={vaksin2}
				/>
				<MediaCard
					side='right'
					text='Gathering Mitra Desember 2022'
					url1={garut1}
					url2={garut2}
				/>
				<MediaCard 
					side='left'
					year='2023'
					text='MAT TB 2022'
					url1={mat20221}
				/>
				<MediaCard
					side='right'
					text='Kalam Februari 2023'
					url1={kalDes221}
					url2={kalDes222}
					url3={kalDes223}
				/>
				<MediaCard
					side='left'
					text='Halal Bihalal 2023'
					url1={haBil1}
					url2={haBil2}
					url3={haBil3}
				/>
				<MediaCard
					side='right'
					text='Pelatihan Snack Bouquet'
					url1={pltSnack1}
					url2={pltSnack2}
					url3={pltSnack3}
				/>
				<MediaCard
					side='left'
					text='Public Speaking'
					url1={pbcSpk1}
					url2={pbcSpk2}
				/>
				
				<Separator height='1rem' />
				
				<MediaCard
					side='right'
					text='Bazaar'
					url1={bazaar1}
				/>
				<MediaCard
					side='left'
					text='Tim Baiturrahim Syariah'
					url1={tim2015}
					url2={tim2016}
					url3={tim2018}
					url4={tim2019}
					url5={tim2021}
				/>
				<Separator height='1rem' />
			</Col>
		</Container>
	)
}

export default Media;