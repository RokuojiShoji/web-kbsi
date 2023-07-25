import { useState } from "react";
import { Container, Col, Carousel, CarouselItem } from "react-bootstrap";

import Modal from "react-modal";

// IMAGE IMPORT
import rat20101 from "../image/MAT/2010/rat2010.jpg";
import rattb121 from "../image/MAT/2012/rattb121.jpg";
import rattb122 from "../image/MAT/2012/rattb122.jpg";
import rattb123 from "../image/MAT/2012/rattb123.jpg";
import rat20131 from "../image/MAT/2013/rat20131.jpg";
import rat20132 from "../image/MAT/2013/rat20132.jpg";
import mat20161 from "../image/MAT/2016/mat-2016.jpg";
import mat20191 from "../image/MAT/2019/mat-19-1.jpg";
import mat20192 from "../image/MAT/2019/mat-19-2.jpg";
import mat20201 from "../image/MAT/2020/mat20_1.jpg";
import mat20202 from "../image/MAT/2020/mat20_2.jpg";
import mat20211 from "../image/MAT/2021/mat21_6.jpg";
import mat20212 from "../image/MAT/2021/mat21_5.jpg";
import mat20213 from "../image/MAT/2021/mat21_1.jpg";
import mat20221 from "../image/MAT/2022/mat-22-1.jpg";
import garut1 from "../image/Gathering Mitra/Garut/garut_2.jpg";
import garut2 from "../image/Gathering Mitra/Garut/garut_6.jpg";
import vaksin1 from "../image/Vaksin/vaksin_4.jpg";
import vaksin2 from "../image/Vaksin/vaksin_5.jpg";
import kalFeb221 from "../image/Kalam/Desember 2022/KalDes22_1.jpg";
import kalFeb222 from "../image/Kalam/Desember 2022/KalDes22_2.jpg";
import kalFeb223 from "../image/Kalam/Desember 2022/KalDes22_3.jpg";
import bankSampah from "../image/Launching Bank Sampah/bs1.jpg";
import bazaar1 from "../image/Bazaar/b1.jpg";
import kantorLama from "../image/Kantor Lama/kanlam.jpg";
import rihlahJungle from "../image/Ke Hutan/hutan.jpg";
import rihlahPangandaran from "../image/Ke Pantai/pantai.jpg";
import kantorBaru from "../image/kantor baru.jpg";
import pltSnack1 from "../image/KISAH/Snack Bouquet/pltSnack_1_.jpg";
import pltSnack2 from "../image/KISAH/Snack Bouquet/pltSnack_2_.jpg";
import pltSnack3 from "../image/KISAH/Snack Bouquet/pltSnack_3_.jpg";
import pbcSpk1 from "../image/KISAH/Public Speaking/pbcSpk_5.jpg";
import pbcSpk2 from "../image/KISAH/Public Speaking/pbcSpk_3.jpg";
import haBil1 from "../image/Halal Bihalal 2023/haBil_1.jpg";
import haBil2 from "../image/Halal Bihalal 2023/haBil_3.jpg";
import haBil3 from "../image/Halal Bihalal 2023/haBil_5.jpg";
import tim2015 from "../image/Tim BRS/2015.jpg";
import tim2016 from "../image/Tim BRS/2016.jpg";
import tim2018 from "../image/Tim BRS/2018.jpg";
import tim2019 from "../image/Tim BRS/2019.jpg";
import tim2021 from "../image/Tim BRS/2021.jpg";
import MediaCard from "../components/MediaCard";

export default function Media2() {
  const [openModal, setOpenModal] = useState(false);
  const [selectYear, setSelectYear] = useState("2022");

  Modal.setAppElement("#root");

  const year = {
    2022: {
      mat21: {
        src: [mat20211, mat20212, mat20213],
        title: "MAT Tahun Buku 2021",
      },
    },
    2023: {
      mat22: {
        src: [mat20221],
        title: "MAT Tahun Buku 2022",
      },
      kalFeb: {
        src: [kalFeb221, kalFeb222, kalFeb223],
        title: "Kalam Februari 2023"
      },
      haBil: {
        scr: [haBil1, haBil2, haBil3],
        title: "Halal Bihalal 2023"
      }
    },
  };

  const handleClick = (media) => {
    setSelectYear(media);
    setOpenModal(true);
  };

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

  return (
    <Container>
      <div style={style.buttonContainer}>
        <button style={style.button} onClick={() => handleClick("mat21")}>
          mat 2021
        </button>
        <button style={style.button} onClick={() => handleClick("mat22")}>
          mat 2022
        </button>
      </div>
      <ModalContainer
        isOpen={openModal}
        setModalOpen={setOpenModal}
        media={year[selectYear]}
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
        <CarouselContainer />
    </Modal>
  );
}

function CarouselContainer(props) {
  
  const style = {
    ci: {
      borderRadius: "0.5rem",
      padding: "20px",
      backgroundColor: "#343434"
    },
    cc: {
      width: "100%"
    },
    img: {
      width: "80%"
    }
  }
  
  return (
    <div>
      <Carousel style={style.cc}>
        <CarouselItem style={style.ci}>
          <img src={mat20201} />
        </CarouselItem>
        <CarouselItem style={style.ci}>
          <img src={mat20202}/>
        </CarouselItem>
      </Carousel>
    </div>
  )
}
