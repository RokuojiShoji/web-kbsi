import { Document, Page, pdfjs } from "react-pdf";
import aruskas from "../../documents/ARUSKAS.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function laporanTest () 
{
    return (
        <Document file={aruskas}>
            <Page pageNumber={1}/>
        </Document>
    );
}   