import { Document, Page, pdfjs } from "react-pdf";
import aruskas from "../../documents/ARUSKAS.pdf";
import calkKegiatanUsaha from "../../documents/CALK Kegiatan Usaha.pdf";
import calkNeraca from "../../documents/CALK NERACA.pdf";
import LapDanaInshaf from "../../documents/Laporan Dana Inshaf.pdf";
import neracaKomp from "../../documents/NERACA KOMPARATIF.pdf";
import neraca from "../../documents/NERACA.pdf";
import perubahanModal from "../../documents/Perubahan Modal.pdf";
import phu from "../../documents/PHU.pdf";
import rapb from "../../documents/RAPB.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function laporanTest () 
{
    return (
        <Document file={aruskas}>
            <Page pageNumber={1}/>
        </Document>
    );
}   