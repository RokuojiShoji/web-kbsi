import { Col, Container, Row } from "react-bootstrap";
import "../App.css"
import logo from "../image/logoBsi.png"
export default function Footer () {
	
  const alamat = {
    textAlign: "left",
    color: "#F0EFF4"
  }
  return (
    <Container fluid="true">
      <Col className="footer bg-rb">
        <Row className="g-0 footer-top">
          <Col lg={3} className="px-4">
            <img className="d-block w-100"src={logo} alt="logo"/>
          </Col>
          <Col className="justify-content-start" lg={2}>
            <p style={alamat}>
              <h2 className="h rubik-bold">Alamat</h2>
              <p className="rubik-light">
                Komp. Permata Kopo Blok <br/> H-62 Desa Sayati, Kec. Margahayu, Kab. Bandung 40228
              </p>
            </p>
          </Col>
          <Col className="px-4" lg={7}>

          </Col>
        </Row>
      </Col>
      <div className="px-2 text-end footer-bottom bg-rb rubik">Copyright &copy; Koperasi bsi </div>
    </Container>
  );
}