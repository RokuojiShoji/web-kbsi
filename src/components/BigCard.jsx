import { Container } from "react-bootstrap";


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
		<Container style={card} className="w-75">
			<h2>VISI</h2>
			<p>lorem ipsum dolor sit amet</p>
		</Container>

		<Container style={card} className="px-5 w-75">
			<h2>MISI</h2>

			<ul>
				<li>lorem</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
		</Container>
		</>
  );
}