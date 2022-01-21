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
        <h1 style={head} className='rubik-bold'>Investasi</h1>
        <Separator height="3rem" />
        <Row className="justify-content-center">
          <ProductCard 
            type='SimPok'
            explain='simpanan anggota yang diperlakukan sebagai investasi dan dikelola secara produktif profesional untuk perkembangan usaha koperasi'
          />
					<ProductCard 
             type='SimWa'
             explain='Sharif atau Simpanan Hari Raya Idul Fitri merupakan simpanan yang dipersiapkan untuk hari raya Idul Fitri, yang hanya bisa dicairkan menjelang hari raya Idul Fitri'
          />
        </Row>
        <Row className="justify-content-center">
          <ProductCard 
             type='SWAT'
             explain='Sharif atau Simpanan Hari Raya Idul Fitri merupakan simpanan yang dipersiapkan untuk hari raya Idul Fitri, yang hanya bisa dicairkan menjelang hari raya Idul Fitri'
          />
          <ProductCard 
            type='Amalmu'
            explain='simpanan anggota yang diperlakukan sebagai investasi dan dikelola secara produktif profesional untuk perkembangan usaha koperasi'
          />
        </Row>

				<Separator height='5rem' />

      </Col>
    </Container>
  );
}

export default Tabungan;