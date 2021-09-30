import { Container, Row, Col } from "react-bootstrap";
import "../App.css"


function Parag() {
  return (
    <Container>
      <Row className="justify-content ">
        <Col>
          <h2 className="h font-weight-bold">Koperasi BSI</h2>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="align-item-center">
          <p>Lorem ipsum dolor sit amet</p>
        </Col>
        <Col sm="5"></Col>
      </Row>
    </Container>
  );
}

export default Parag;