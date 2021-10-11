import { Row } from "react-bootstrap";


export default function BigCard () {
  
	const card = {
		backgroundColor: "#7F7EFF",
		textAlign: "Center",
		justifyContent: "Center",
		marginTop: "5%",
		marginBottom: "5%",
		borderRadius: "6px",
		padding: "2rem"
	};
	
	return (
		<>
		<Row style={card} className="">
			<h2>VISI</h2>
			<p>lorem ipsum dolor sit amet</p>
		</Row>

		<Row style={card} className="">
			<h2>MISI</h2>

			<ul>
				<li>lorem</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
		</Row>
		</>
  );
}