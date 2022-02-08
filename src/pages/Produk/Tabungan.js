import { Col, Container, Row } from "react-bootstrap";
import ProductCardGambar from "../../components/ProductCardGambar";
import Separator from "../../components/Separator";

import simsuk from "../../image/Produk/Simpanan/simsuk.jpg"
import sawal from "../../image/Produk/Simpanan/sawal.jpg"
import sharif from "../../image/Produk/Simpanan/sharif.jpg"
import shaum from "../../image/Produk/Simpanan/shaum.jpg"
import sidik from "../../image/Produk/Simpanan/sidik.jpg"
import simut from "../../image/Produk/Simpanan/simut.jpg"
import tabur from "../../image/Produk/Simpanan/tabur.jpg"
import tawa from "../../image/Produk/Simpanan/tawa.jpg"

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
          <ProductCardGambar
            image={simsuk} 
            type='SimSuk'
            explain='simpanan yang jumlah dan waktunya tidak ditentukan, serta dapat diambil kapan saja, merupakan simpanan jangka pendek'
          />
					<ProductCardGambar
            image={sharif} 
            type='Sharif'
            explain='Sharif atau Simpanan Hari Raya Idul Fitri merupakan simpanan yang dipersiapkan untuk hari raya Idul Fitri, yang hanya bisa dicairkan menjelang hari raya Idul Fitri'
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCardGambar
            image={sidik} 
            type='Sidik'
            explain='Simpanan yang dipersiapkan untuk pembayaran pendidikan yang dapat dicairkan setiap menjelang tahun ajaran baru'
          />
          <ProductCardGambar
            image={tabur} 
            type='TaBur'
            explain='Simpanan yang dipersiapkan untuk ibadah Qurban yang pencairannya hanya bisa dilakukan menjelang hari raya Qurban'
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCardGambar
            image={tawa} 
            type='TaWa'
            explain='Tabungan bagi siswa yang ingin memiliki simpanan sendiri. membentuk karakter "rajin menabung", melatih mempersiapkan masa depan, dan pengenalan sarana keuangan selain bank sejak dini'
          />
					<ProductCardGambar
            image={simut} 
            type='SiMut'
            explain='Simpanan Mumtaz merupakan simpanan jangka panjang yang mendapatkan poin setiap bulannya yang dapat ditukar dengan hadiah langsung atau diwakafkan'
          />
        </Row>
        <Row className='justify-content-center'>
          <ProductCardGambar 
            image={shaum}
            type='Shaum'
            explain='Shaum atau Simpanan Haji dan Umroh merupakan simpanan yang digunakan untuk perisapan ibadah Haji dan Umroh'
          />
					<ProductCardGambar 
            image={sawal}
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