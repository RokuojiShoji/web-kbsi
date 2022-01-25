import { Col, Container, Row } from "react-bootstrap";
import ProductCardGambar from "../../components/ProductCardGambar";
import Separator from "../../components/Separator";

import alQard from "../../image/Produk/Pembiayaan/alQard.jpg";
import ijarah from "../../image/Produk/Pembiayaan/ijarah.jpg";
import imbt from "../../image/Produk/Pembiayaan/imbt.jpg";
import mudharabah from "../../image/Produk/Pembiayaan/mudharabah.jpg";
import murabahah from "../../image/Produk/Pembiayaan/murabahah.jpg";


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
          <ProductCardGambar
            image={murabahah} 
            type='Murabahah'
            explain='Pembiayaan dengan sistem jual beli dengan menyatakan perolehan dan margin atau keuntungan yang disepakati pihak pihak penjual dan pembeli.'
          />
					<ProductCardGambar
            image={alQard} 
            type='Al-Qard'
            explain='Jasa pencarian pinjaman uang dan koperasi berhak menerima komisi jasa atau ujroh sebagai perantara'
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCardGambar
            image={ijarah} 
            type='Ijarah'
            explain='Pembiayaan dalam memenuhi kebutuhan atas manfaat akan suatu jasa '
          />
          <ProductCardGambar
            image={mudharabah} 
            type='Mudharabah'
            explain='Pembiayaan untuk modal usaha dengan sistem bagi hasil di mana koperasi sebagai pemilik modal memberikan kepercayaan penuh kepada anggota sebagai pengelola untuk menjalankan usaha berdasarkan modal yang diberikan.'
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCardGambar
            image={imbt} 
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