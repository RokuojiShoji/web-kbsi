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
        <Row className="justify-content-center">
          <ProductCard 
            type='Murabahah'
            explain='Pembiayaan dengan sistem jual beli dengan menyatakan perolehan dan margin atau keuntungan yang disepakati pihak pihak penjual dan pembeli.'
          />
					<ProductCard 
             type='Al-Qard'
             explain='Jasa pencarian pinjaman uang dan koperasi berhak menerima komisi jasa atau ujroh sebagai perantara'
          />
					<ProductCard 
             type='Ijaroh'
             explain='Pembiayaan dalam memenuhi kebutuhan atas manfaat akan suatu jasa '
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCard 
            type='Mudharabah'
            explain='Pembiayaan untuk modal usaha dengan sistem bagi hasil di mana koperasi sebagai pemilik modal memberikan kepercayaan penuh kepada anggota sebagai pengelola untuk menjalankan usaha berdasarkan modal yang diberikan.'
          />
					<ProductCard 
             type='IMBT'
             explain='Akad sewa menyewa yang diakhiri dengan pemindahan kepemilikan objek akad dari pemberi sewa (mu’ajir) kepada penyewa (musta’jir) melalui akad jual beli atau hibah setelah berakhirnya masa sewa.'
          />
        </Row>
				<Separator height='5rem' />
      </Col>
    </Container>
  );
}

export default Pembiayaan;