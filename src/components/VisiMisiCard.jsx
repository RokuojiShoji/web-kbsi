import { Row } from "react-bootstrap";

export default function VisiMisiCard() {
  const card = {
    textAlign: "center",
    justifyContent: "center",
    margin: "5% auto",
    borderRadius: "6px",
    padding: "2rem",
		color: "#eeeeee",
    width: 'min(90vw, 40rem)'
  };

	const par = {
		textAlign: "justify",
		textAlignLast: "center",
		fontSize: "1.4rem"
	}

	const lis = {
		textAlign: "justify",
		textAlignLast: "left",
		fontSize: "1.4rem",
		padding: "0.5rem"
	}

  return (
    <>
      <Row style={card} className="rubik bg-rb">
        <h1>VISI</h1>
        <p style={par}>
          Terwujudnya Ekonomi Islam sebagai nilai bersama demi kemajuan dan
          kesinambungan koperasi dan meningkatkan kesejahteraan lahir dan bathin
          masyarakat Indonesia menuju kebaikan di dunia dan di akhirat
        </p>
      </Row>

      <Row style={card} className="rubik bg-pp">
        <h1>MISI</h1>

        <ul>
          <li style={lis}>
						Menyediakan beragam produk dan layanan 
						yang sesuai dengan kebutuhan hidup anggota
					</li>
          <li style={lis}>
						Menjalin hubungan yang kuat dengan anggota
						koperasi, sesama koperasi, dan dengan mitra
						koperasi yang mampu mendorong kemajuan dan 
						kemandirian bersama
					</li>
          <li style={lis}>
						Memberdayakan setiap anggota Koperasi Baiturrahim
						Syariah untuk mencapai kesejahteraan lahir dan bathin
					</li>
        </ul>
      </Row>
    </>
  );
}
