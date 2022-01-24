import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import ProductCardGambar from "../../components/ProductCardGambar";
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
        <h1 style={head} className='rubik-bold'>Simpanan</h1>
        <Separator height="3rem" />
        <Row className="justify-content-center">
          <ProductCard 
            type='SimSuk'
            explain='simpanan anggota yang diperlakukan sebagai investasi dan dikelola secara produktif profesional untuk perkembangan usaha koperasi'
          />
					<ProductCard 
             type='Sharif'
             explain='Sharif atau Simpanan Hari Raya Idul Fitri merupakan simpanan yang dipersiapkan untuk hari raya Idul Fitri, yang hanya bisa dicairkan menjelang hari raya Idul Fitri'
          />
					<ProductCard 
             type='Sidik'
             explain='Simpanan yang dipersiapkan untuk pembayaran pendidikan yang dapat dicairkan setiap menjelang tahun ajaran baru'
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCard 
            type='TaBur'
            explain='Simpanan yang dipersiapkan untuk ibadah Qurban yang pencairannya hanya bisa dilakukan menjelang hari raya Qurban'
          />
					<ProductCard 
             type='TaWa'
             explain='Shaum atau Simpanan Haji dan Umroh merupakan simpanan yang digunakan untuk perisapan ibadah Haji dan Umroh'
          />
					<ProductCard 
             type='SiMut'
             explain='Sawal atau Simpanan Walimah merupakan simpanan yang dipersiapkan untuk pelaksanaan walimah pencairan dapa dilakukan menjelang pernikahan'
          />
        </Row>
        <Row className='justify-content-center'>
					<ProductCardGambar 
             type='Shaum'
             explain='Shaum atau Simpanan Haji dan Umroh merupakan simpanan yang digunakan untuk perisapan ibadah Haji dan Umroh'
          />
					<ProductCardGambar 
             type='Sawal'
             explain='Sawal atau Simpanan Walimah merupakan simpanan yang dipersiapkan untuk pelaksanaan walimah pencairan dapa dilakukan menjelang pernikahan'
          />
        </Row>

				<Separator height='5rem' />

      </Col>
    </Container>
  );
}

export default Tabungan;