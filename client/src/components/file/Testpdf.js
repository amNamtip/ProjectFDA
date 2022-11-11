import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Testpdf = ({rootElemantId, downloadFileName}) => {
    const TestpdfDownload = () => {
        const input = document.getElementById(rootElemantId)
        html2canvas(input).then((canvas) =>{
            const imgdata = canvas.toDataURL("image/png")
            const pdf = new jsPDF()
            pdf.addImage(imgdata)
            pdf.save(`${downloadFileName}`)
        })
    }
    return  (
        <div>
            <button onClick={TestpdfDownload}>
                <img src="pdf-icon.png"></img>
            </button>
        </div>
    )
}
export default Testpdf;
