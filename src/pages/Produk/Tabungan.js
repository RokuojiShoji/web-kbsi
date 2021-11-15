import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Separator from "../../components/Separator";


function Tabungan () {
	
	const head = {
		textAlign: 'center',
		color: '#696969',

	}
	
	return (
    <Container>
      <Col>
        <Separator height="5rem" />
        <h1 style={head} className='rubik-bold'>Tabungan</h1>
        <Separator height="3rem" />
        <Row className="justify-content-around">
          <ProductCard 
            type='Tabungan 1'
            explain='penjelasan singkat Tabungan 1'
          />
					<ProductCard 
             type='Tabungan 2'
             explain='penjelasan singkat Tabungan 2'
          />
					<ProductCard 
             type='Tabungan 3'
             explain='penjelasan singkat Tabungan 3'
          />
        </Row>
        <Row ClassName='justify-content-around'>
          <ProductCard 
            type='Tabungan 4'
            explain='penjelasan singkat Tabungan 4'
          />
					<ProductCard 
             type='Tabungan 5'
             explain='penjelasan singkat Tabungan 5'
          />
					<ProductCard 
             type='Tabungan 6'
             explain='penjelasan singkat Tabungan 6'
          />
        </Row>

				<Separator height='5rem' />

      </Col>
    </Container>
  );
}

export default Tabungan;