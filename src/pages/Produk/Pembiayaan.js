import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Separator from "../../components/Separator";
import TabDetailProduk from "./Detail Produk/TabDetailProduk";

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
            type='Pembiayaan 1'
            explain='penjelasan singkat Pembiayaan 1'
          />
					<ProductCard 
             type='Pembiayaan 2'
             explain='penjelasan singkat Pembiayaan 2'
          />
					<ProductCard 
             type='Pembiayaan 3'
             explain='penjelasan singkat Pembiayaan 3'
          />
        </Row>
        <Row ClassName='justify-content-around'>
          <ProductCard 
            type='Pembiayaan 4'
            explain='penjelasan singkat Pembiayaan 4'
          />
					<ProductCard 
             type='Pembiayaan 5'
             explain='penjelasan singkat Pembiayaan 5'
          />
					<ProductCard 
             type='Pembiayaan 6'
             explain='penjelasan singkat Pembiayaan 6'
          />
        </Row>

				<Separator height='5rem' />
      </Col>
    </Container>
  );
}

export default Pembiayaan;