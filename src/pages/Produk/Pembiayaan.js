import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Separator from "../../components/Separator";

function Pembiayaan () {
	const head = {
		textAlign: 'center',
		color: '#696969',

	}
	
	return (
    <Container>
      <Col>
        <Separator height="5rem" />
        <h1 style={head} className='rubik-bold'>Pembiayaan</h1>
        <Separator height="3rem" />
        <Row className="justify-content-around">
          <ProductCard 
            type='Murabahah'
            explain='penjelasan singkat Pembiayaan 1'
          />
					<ProductCard 
             type='Al-Qard'
             explain='penjelasan singkat Pembiayaan 2'
          />
					<ProductCard 
             type='Ijaroh'
             explain='penjelasan singkat Pembiayaan 3'
          />
        </Row>
        <Row ClassName='justify-content-around'>
          <ProductCard 
            type='Mudharabah'
            explain='penjelasan singkat Pembiayaan 4'
          />
					<ProductCard 
             type='IMBT'
             explain='penjelasan singkat Pembiayaan 5'
          />
        </Row>
				<Separator height='5rem' />
      </Col>
    </Container>
  );
}

export default Pembiayaan;