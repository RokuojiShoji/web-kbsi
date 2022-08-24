import { Container } from "react-bootstrap";
import Separator from "../../components/Separator";

import neraca from "../../image/Laporan Keuangan/Neraca.png"
import phu from "../../image/Laporan Keuangan/PHU.png"


export default function Laporan () {
	return (
		<Container>
			<Separator height="3rem"/>
			<h1 className="text-center rubik-bold" style={{fontSize: 'min(10vw, 3.5rem)', color: '#4D4D4D'}} >Laporan Keuangan</h1>
			<Separator height="3rem"/>

			<ImageContainer src={neraca} header="Neraca"/>
			<ImageContainer src={phu} header="PHU" />
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