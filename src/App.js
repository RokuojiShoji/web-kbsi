import "./App.css";
import "./Font.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navi from "./components/Navi.jsx";
import Container from "react-bootstrap/Container";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import VisiMisi from "./pages/TentangKami/VisiMisi";
//import DaftarAnggota from "./pages/Anggota/DaftarAnggota";
import PendaftaranAnggota from "./pages/Anggota/PendaftaranAnggota";
import Pembiayaan from "./pages/Produk/Pembiayaan";
import Tabungan from "./pages/Produk/Tabungan";
import Investasi from "./pages/Produk/Investasi";
    // import Ziswaf from "./pages/Produk/Ziswaf";
import Kontak from "./pages/Kontak";
import HomePage from "./pages/HomePage";
import Media from "./pages/Media";
// import Produk from "./pages/Produk";
import StrukturOrganisasi from "./pages/TentangKami/StrukturOrganisasi";
import SusunanOrganisasi from "./pages/TentangKami/SusunanOrganisasi";
import Footer from "./components/Footer";
import Laporan from "./pages/TentangKami/Laporan";
import Link from "./pages/Link";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    const isHome = window.location.pathname;
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");
    if (isHome !== "/home" && isHome !== "/link") {
      nav.classList.remove("nav-transition")
      nav.classList.add("nav-scrolled");
      nav.classList.add("sticky-top")
      nav.classList.add("navbar-scrolled")
      body.classList.remove("bg-pp")
      body.classList.add("bg-gw")  
    }
  });

  
  return (
    <Container fluid="true">
      <Router>
        
        <Switch>
          <Route path="/visi-misi">
            <Navi />
            <VisiMisi />
            <Footer />
          </Route>


















          {/* <Route path="/daftar-anggota">
            <DaftarAnggota />
          </Route> */}
          <Route path="/pendaftaran-anggota">
            <Navi />
            <PendaftaranAnggota />
            <Footer />
          </Route>
          {/* <Route path="/produk">
            <Produk />
          </Route> */}
          <Route path="/pembiayaan">
            <Navi />
            <Pembiayaan />
            <Footer />
          </Route>
          <Route path="/tabungan">
            <Navi />
            <Tabungan />
            <Footer />
          </Route>
          <Route path="/investasi">
            <Navi />
            <Investasi />
            <Footer />
          </Route>
          <Route path="/struktur-organisasi">
            <Navi />
            <StrukturOrganisasi />
            <Footer />
          </Route>
          <Route path="/susunan-organisasi">
            <Navi />
            <SusunanOrganisasi />
            <Footer />
          </Route>
          <Route path="/laporan">
            <Navi />
            <Laporan />
            <Footer />
          </Route>
          <Route path="/kontak">
            <Navi />
            <Kontak />
            <Footer />
          </Route>
          <Route path="/media">
            <Navi />
            <Media />
            <Footer />
          </Route>
          <Route path="/home">
            <Navi />
            <HomePage />
            <Footer />
          </Route>
          <Route path='/link'>
            <Link />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      
      </Router>
    </Container>
  );
}

export default App;