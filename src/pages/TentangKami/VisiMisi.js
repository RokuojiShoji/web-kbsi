import VisiMisiCard from "../../components/VisiMisiCard";
import { Container } from "react-bootstrap";
import Separator from "../../components/Separator"

function VisiMisi() {
  const style = [
    {
      card: {
        width: "min(90vw, 40rem)  ",
        color: "#eeeeee",
        textAlign: "justify",
        fontSize: "1.3rem",
        padding: "1.5rem 2rem",
        borderRadius: "0.5rem",
      },
    },
  ];
  return (
    <div>
      <Separator height="3rem"/>
      <Container
        className="justify-content-center rubik bg-rb "
        style={style[0].card}
      >
        <h1 style={{textAlign: "center"}}>SEJARAH</h1>
        <p>Koperasi Baiturrahim Syariah Indonesia didirikan pada bulan Februari 2009 oleh 26 orang dengan 
           tujuan untuk membantu perekonomian masyarakat di sekitar Permata Kopo. Pada tahun 2014, Koperasi 
           Baiturrahim menjadi badan hukum dan pada tahun 2021 berganti nama menjadi Koperasi Baiturrahim 
           Syariah Indonesia. Di tahun 2022, Koperasi Baiturrahim Syariah Indonesia mendapatkan penghargaan 
           sebagai peringkat ke 2 dalam Pemeringkatan bagi Koperasi tingkat Kabupaten Bandung Tahun 2022. 
           Visi dari Koperasi Syariah bsi adalah menjadi Koperasi Syariah Terbaik dan Terbesar di Jawa Barat.</p>
      </Container>
      <Container className="my-5 justify-content-center">
        <VisiMisiCard />
      </Container>
    </div>
  );
}

export default VisiMisi;
