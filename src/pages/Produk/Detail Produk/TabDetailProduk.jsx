import { Col, Nav, Row, Tab } from "react-bootstrap";

export default function TabDetailProduk() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col xl="5">
          <Nav  variant="tabs" className="product-tab rubik flex-column">
            <Nav.Item className='c'>
              <Nav.Link className='sub-tab' eventKey="first">Keunggulan Produk</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='sub-tab' eventKey="second">Tarif dan Biaya</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='sub-tab' eventKey="third">Syarat dan Ketentuan Umum</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='sub-tab'eventKey="fourth">Cara Pengajuan</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xl="7">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h5 style={{textAlign:'center'}}>Keunggulan Produk</h5>
              <ol type='1'>
                <li>satu</li>
                <li>dua</li>
                <li>tiga</li>
              </ol>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h5 style={{textAlign:'center'}}>Tarif dan Biaya</h5>
              lorem ipsum dolor sit amet 2
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <h5 style={{textAlign:'center'}}>Syarat dan Ketentuan Umum</h5>
              lorem ipsum dolor sit amet 3
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <h5 style={{textAlign:'center'}}>Cara Pengajuan</h5>
              lorem ipsum dolor sit amet 4
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
