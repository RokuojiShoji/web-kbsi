import { Container } from "react-bootstrap";
import Separator from "../../components/Separator";

import neraca from "../../image/Laporan Keuangan/Neraca.png"
import neracaJuni2022 from "../../image/Laporan Keuangan/NeracaJuni2022.png"
import phu from "../../image/Laporan Keuangan/PHU.png"
import phuJuni2022 from "../../image/Laporan Keuangan/PHUJuni2022.png"

export default function Laporan () {
	return (
		<Container>
			<Separator height="3rem"/>
			<h1 className="text-center rubik-bold" style={{fontSize: 'min(10vw, 3.5rem)', color: '#4D4D4D'}} >Laporan Keuangan</h1>
			<Separator height="3rem"/>

			<ImageContainer src={neracaJuni2022} header="Neraca"/>
			<ImageContainer src={phuJuni2022} header="Perhitungan Hasil Usaha" />
		</Container>
	)
}

function ImageContainer (props) {
	return (
		<Container>
			<Separator height="1rem"/>
			<h2 className="text-center rubik-bold">{props.header}</h2>
			<Separator height="1rem"/>
			<img src={props.src} className="w-100" style={{borderRadius:'0.5em'}}/>
			<Separator height="1rem"/>
		</Container>
	)
}