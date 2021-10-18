import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import fauna from '../image/asuna.jpg'
import wall from '../image/testWall.jpg'

function HpGallery() {
	

  return (
    <Container className="mt-4 mt-3">
      <Carousel>
        <Carousel.Item>
          <img className="w-100" src={fauna} alt="fauna" />
          <Carousel.Caption>
            <h2>panel 1</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={wall} alt="asuna" />
          <Carousel.Caption>
            <h2>panel 2</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HpGallery;