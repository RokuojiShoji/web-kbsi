import "./App.css";
import "./Font.css";
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
import Simpanan from "./pages/Produk/Simpanan";
import Ziswaf from "./pages/Produk/Ziswaf";
import Kontak from "./pages/Kontak";
import HomePage from "./pages/HomePage";
import Media from "./pages/Media";
import StrukturOrganisasi from "./pages/TentangKami/StrukturOrganisasi";
import SusunanOrganisasi from "./pages/TentangKami/SusunanOrganisasi";
import Footer from "./components/Footer";
import Laporan from "./pages/TentangKami/Laporan";
import { useEffect } from "react";

function App() {
  const bg = {
    backgroundImage: "url{$bgImg}",
  };

  useEffect(() => {
    const isHome = window.location.pathname;
    const nav = document.querySelector("nav");
    if (isHome != "/home") {
      nav.classList.add("nav-scrolled");
    }
  });

  return (
    <Container fluid="true">
      <Router>
        <Navi />
        <Switch>
          <Route path="/visiMisi">
            <VisiMisi />
          </Route>
          <Route path="/DaftarAnggota">
            <DaftarAnggota />
          </Route>
          <Route path="/PendaftaranAnggota">
            <PendaftaranAnggota />
          </Route>
          <Route path="/Pembiayaan">
            <Pembiayaan />
          </Route>
          <Route path="/Simpanan">
            <Simpanan />
          </Route>
          <Route path="/Ziswaf">
            <Ziswaf />
          </Route>
          <Route path="/StrukturOrganisasi">
            <StrukturOrganisasi />
          </Route>
          <Route path="/SusunanOrganisasi">
            <SusunanOrganisasi />
          </Route>
          <Route path="/Laporan">
            <Laporan />
          </Route>
          <Route path="/Kontak">
            <Kontak />
          </Route>
          <Route path="/Media">
            <Media />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/">
            <Redirect to="/Home" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
