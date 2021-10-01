import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../image/logoBsi.png";

function Navi() {
  
  const font1 = {
    fontSize: '1.1rem'
  }

  const font2 = {
    fontSize: '0.95rem'
  }
  
  const bg = {
    backgroundColor: '#00000095'
  }
  return (
    <Navbar
      className="fixed-top product-bold transition"
      style={font1}
      variant="dark"
      expand="md"
    >
      <Container>
        
          <Navbar.Brand href="/home">
            <img className="padr-4" src={logo} height="38rem" />
          </Navbar.Brand>
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
              <Nav className="w-75 justify-content-around">
                <Nav.Link eventKey="home" href="/home">
                  Home
                </Nav.Link>
                <NavDropdown
                  eventKey="about"
                  title="Tentang kami"
                  id="drop-about"
                >
                  <NavDropdown.Item href="/visiMisi">
                    Visi Misi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/strukturOrganisasi">
                    Struktur Organisasi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/susunanOrganisasi">
                    Susunan Organisasi
                  </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="/laporan">
                    Laporan
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Produk" id="drop-product">
                  <NavDropdown.Item href="/simpanan">Simpanan</NavDropdown.Item>
                  <NavDropdown.Item href="/pembiayaan">
                    Pembiayaan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ziswaf">Ziswaf</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Anggota" id="drop-member">
                  <NavDropdown.Item href="/pendaftaranAnggota">
                    Pendaftaran Anggota
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/daftarAnggota">
                    Daftar Anggota
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey="media" href="/Media">
                  Media
                </Nav.Link>
                <NavDropdown title="Karir" id="drop-career">
                  <NavDropdown.Item href="">lorem</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Kontak">Kontak</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default Navi;
