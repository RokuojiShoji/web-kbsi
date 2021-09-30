import './App.css';
import './Font.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Nav2 from './components/Nav2';
import Navi from './components/Navi.jsx'
import CoverImg from './components/CoverImg';
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import bgImg from './image/testWall.jpg'

import VisiMisi from './pages/TentangKami/VisiMisi'
import DaftarAnggota from './pages/Anggota/DaftarAnggota';
import PendaftaranAnggota from './pages/Anggota/PendaftaranAnggota';
import Pembiayaan from './pages/Produk/Pembiayaan';
import Simpanan from './pages/Produk/Simpanan';
import Ziswaf from './pages/Produk/Ziswaf';
import Kontak from './pages/Kontak';
import HomePage from './pages/HomePage';
import Media from './pages/Media';
import StrukturOrganisasi from './pages/TentangKami/StrukturOrganisasi';
import SusunanOrganisasi from './pages/TentangKami/SusunanOrganisasi';
import Footer from './components/Footer';
import Laporan from './pages/TentangKami/Laporan';

function App() {
  const bg = {
    backgroundImage: 'url{$bgImg}' 
  }
  
  return (
    <>
    <Router>
    <Navi />
      <Container fluid="true" className="App bg-img">
        
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
          
        
      </Container>
    </Router>
    <Footer />
    </>
  );
}

  

export default App;
