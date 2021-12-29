import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import logo from "../image/logoBsi.png";

function Navi() {
  const font1 = {
    fontSize: "1.1rem",
  };

  return (
    <nav className="navbar navbar-expand-lg product nav-transition fixed-top navbar-dark">
      <div style={font1} className="container">
        <a className="navbar-brand" href="/home">
          <img src={logo} className="padr-4" height="38rem" alt="logo bsi" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul style={{width:'60%'}} className=" justify-content-around navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownMember" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Tentang Kami
              </a>
              <ul
                className="dropdown-menu animate fade"
                aria-labelledby="dropdownAbout"
              >
                <li>
                  <a className="dropdown-item" href="/visi-misi">Visi Misi</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/struktur-organisasi">Struktur Organisasi</a>
                </li>
                <li>
                  <a className='dropdown-item' href='/susunan-organisasi'>Susunan Organisasi</a>
                </li>
                {/* <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="/laporan">Laporan</a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Produk
              </a>
              <ul
                className="dropdown-menu animate fade"
                aria-labelledby="dropdownProduct"
              >
                <li>
                  <a className="dropdown-item" href="/pembiayaan">Pembiayaan</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/tabungan">Tabungan</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownProduct" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Anggota
              </a>
              <ul
                className="dropdown-menu animate fade"
                aria-labelledby="dropdownMember"
              >
                <li>
                  <a className="dropdown-item" href="/daftar-anggota">Daftar Anggota</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/pendaftaran">Pendaftaran</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/media' >Media</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <Navbar
    //   className="fixed-top product nav-transition"
    //   style={font1}
    //   variant="dark"
    //   expand="md"
    // >
    //   <Container>

    //       <Navbar.Brand href="/home">
    //         <img className="padr-4" src={logo} height="38rem" alt="logo bsi"/>
    //       </Navbar.Brand>

    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse className="justify-content-end">
    //           <Nav style={{width:'60%'}} className="justify-content-around">
    //             <Nav.Link eventKey="home" href="/home">
    //               Home
    //             </Nav.Link>
    //             <NavDropdown
    //               eventKey="about"
    //               title="Tentang kami"
    //               id="drop-about"
    //             >
    //               <NavDropdown.Item href="/visi-misi">
    //                 Visi Misi
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="/struktur-organisasi">
    //                 Struktur Organisasi
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="/susunan-organisasi">
    //                 Susunan Organisasi
    //               </NavDropdown.Item>
    //               <NavDropdown.Divider/>
    //               <NavDropdown.Item href="/laporan">
    //                 Laporan
    //               </NavDropdown.Item>
    //             </NavDropdown>

    //             <NavDropdown title="Produk" id="drop-product">
    //               <NavDropdown.Item href="/tabungan">Tabungan</NavDropdown.Item>
    //               <NavDropdown.Item href="/pembiayaan">Pembiayaan</NavDropdown.Item>
    //             </NavDropdown>
    //             <NavDropdown title="Anggota" id="drop-member">
    //               <NavDropdown.Item href="/pendaftaran-anggota">
    //                 Pendaftaran Anggota
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="/daftar-anggota">
    //                 Daftar Anggota
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //             <Nav.Link eventKey="media" href="/media">
    //               Media
    //             </Nav.Link>

    //           </Nav>
    //       </Navbar.Collapse>

    //   </Container>
    // </Navbar>
  );
}

export default Navi;
