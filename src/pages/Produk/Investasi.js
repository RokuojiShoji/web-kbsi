import { Col, Container, Row } from "react-bootstrap";
import ProductCardGambar from "../../components/ProductCardGambar";
import Separator from "../../components/Separator";

import amalmu from "../../image/Produk/Investasi/amalmu.jpg"
import simpok from "../../image/Produk/Investasi/simpok.jpg"
import simwa from "../../image/Produk/Investasi/simwa.jpg"
import swat from "../../image/Produk/Investasi/swat.jpg"

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
          <ProductCardGambar 
            image={simpok}
            type='SimPok'
            explain='Simpanan yang pertama kali dibayarkan oleh anggota koperasi saat bergabung menjadi anggota. simpanan ini merupakan investasi jangka panjang milik anggota'
          />
					<ProductCardGambar 
            image={simwa}
            type='SimWa'
            explain='Simpanan bersifat wajib yang harus dibayarkan semua anggota setiap bulannya dengan nominal yang ditentukan oleh koperasi yang bersifat investasi jangka panjang'
          />
        </Row>
        <Row className="justify-content-center">
          <ProductCardGambar 
            image={swat}
            type='SWAT'
            explain="Simpanan Wajib Ta'awun adalah simpanan wajib khusus bagi anggota yang mengajukan pembiayaan dengan nilai 2.5% dari total pembiayaan"
          />
          <ProductCardGambar 
            image={amalmu}
            type='Amalmu'
            explain='Simpanan anggota yang menggunakan akad mudharabah dan diperlakukan sebagai investasi serta dikelola secara produktif profesional untuk perkembangan usaha koperasi'
          />
        </Row>
				<Separator height='5rem' />

      </Col>
    </Container>
  );
}

export default Tabungan;