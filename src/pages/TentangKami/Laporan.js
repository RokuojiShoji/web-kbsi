import { Container } from "react-bootstrap";
import { useState } from "react";

import Separator from "../../components/Separator";
import Modal from "react-modal";

import neracaDes2021 from "../../image/Laporan Keuangan/neracaDes2021.png";
import phuDes2021 from "../../image/Laporan Keuangan/phuDes2021.png";
import neracaJuni2022 from "../../image/Laporan Keuangan/NeracaJuni2022.png";
import phuJuni2022 from "../../image/Laporan Keuangan/PHUJuni2022.png";
import neracaDes2022 from "../../image/Laporan Keuangan/neracaDes2022.png";
import phuDes2022 from "../../image/Laporan Keuangan/phuDes2022.png";

export default function Laporan() {
  const [openModal, setOpenModal] = useState(false);
  const [selectPHU, setSelectPHU] = useState("Des21");
  const [selectNeraca, setSelectNeraca] = useState("Des21");

  Modal.setAppElement("#root");

  const style = {
    button: {
      padding: "3rem",
      backgroundColor: "#292929",
      color: "#eeeeee",
      border: "none",
      borderRadius: "0.8rem",
      margin: "1.8rem",
      fontSize: "2rem",
      flex: "0 0 20%",
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  };

  const neraca = {
    Des21: {
      src: neracaDes2021,
      header: "Neraca Desember 2021",
    },
    Jun22: {
      src: neracaJuni2022,
      header: "Neraca Juni 2022",
    },
    Des22: {
      src: neracaDes2022,
      header: "Neraca Desember 2022",
    },
  };

  const phu = {
    Des21: {
      src: phuDes2021,
      header: "PHU Desember 2021",
    },
    Jun22: {
      src: phuJuni2022,
      header: "PHU Juni 2022",
    },
    Des22: {
      src: phuDes2022,
      header: "PHU Desember 2022",
    },
  };

  const handleClick = (date) => {
    setSelectNeraca(date);
    setSelectPHU(date);
    setOpenModal(true);
  };

  return (
    <Container>
      <Separator height="3rem" />
      <h1
        className="text-center rubik-bold"
        style={{ fontSize: "min(10vw, 3.5rem)", color: "#4D4D4D" }}
      >
        Laporan Keuangan
      </h1>
      <Separator height="3rem" />
      <Container style={style.buttonContainer}>
        <button
          className="rubik-bold"
          style={style.button}
          onClick={() => handleClick("Des21")}
        >
          Desember 2021
        </button>
        <button
          className="rubik-bold"
          style={style.button}
          onClick={() => handleClick("Jun22")}
        >
          Juni 2022
        </button>
        <button
          className="rubik-bold"
          style={style.button}
          onClick={() => handleClick("Des22")}
        >
          Desember 2022
        </button>
      </Container>
      <ModalContainer
        isOpen={openModal}
        setModalOpen={setOpenModal}
        neraca={neraca[selectNeraca]}
        phu={phu[selectPHU]}
      />
    </Container>
  );
}

function ModalContainer(props) {
  const style = {
    modal: {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(10,10,10, 0.75)",
      },
      content: {
        position: "absolute",
        width: "min(90vw, 80rem)",
        top: "5rem",
        left: 0,
        right: 0,
        bottom: "1rem",
        margin: "auto",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px",
      },
    },
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.setModalOpen(false)}
      style={style.modal}
    >
      <button
        style={{
          fontSize: "1.5rem",
          color: "#eeeeee",
          borderRadius: "0.5rem",
          border: "none",
          width: "2.5rem",
        }}
        className="rubik bg-pp"
        onClick={() => props.setModalOpen(false)}
      >
        &times;
      </button>
      <ImageContainer src={props.neraca.src} header={props.neraca.header} />
      <ImageContainer src={props.phu.src} header={props.phu.header} />
    </Modal>
  );
}

function ImageContainer(props) {
  return (
    <Container>
      <Separator height="1rem" />
      <h2 className="text-center rubik-bold">{props.header}</h2>
      <Separator height="1rem" />
      <img
        src={props.src}
        className="w-100"
        style={{ borderRadius: "0.5em" }}
      />
      <Separator height="1rem" />
    </Container>
  );
}
