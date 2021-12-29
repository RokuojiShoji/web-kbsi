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
import DaftarAnggota from "./pages/Anggota/DaftarAnggota";
import PendaftaranAnggota from "./pages/Anggota/PendaftaranAnggota";
import Pembiayaan from "./pages/Produk/Pembiayaan";
import Tabungan from "./pages/Produk/Tabungan";
    // import Ziswaf from "./pages/Produk/Ziswaf";
import Kontak from "./pages/Kontak";
import HomePage from "./pages/HomePage";
import Media from "./pages/Media";
import Produk from "./pages/Produk";
import StrukturOrganisasi from "./pages/TentangKami/StrukturOrganisasi";
import SusunanOrganisasi from "./pages/TentangKami/SusunanOrganisasi";
import Footer from "./components/Footer";
import Laporan from "./pages/TentangKami/Laporan";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    const isHome = window.location.pathname;
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");
    if (isHome !== "/home") {
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
        <Navi />
        <Switch>
          <Route path="/visi-misi">
            <VisiMisi />
          </Route>
          <Route path="/daftar-anggota">
            <DaftarAnggota />
          </Route>
          <Route path="/pendaftaran-anggota">
            <PendaftaranAnggota />
          </Route>
          {/* <Route path="/produk">
            <Produk />
          </Route> */}
          <Route path="/pembiayaan">
            <Pembiayaan />
          </Route>
          <Route path="/tabungan">
            <Tabungan />
          </Route>
          <Route path="/struktur-organisasi">
            <StrukturOrganisasi />
          </Route>
          <Route path="/susunan-organisasi">
            <SusunanOrganisasi />
          </Route>
          {/* <Route path="/laporan">
            <Laporan />
          </Route> */}
          <Route path="/kontak">
            <Kontak />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;