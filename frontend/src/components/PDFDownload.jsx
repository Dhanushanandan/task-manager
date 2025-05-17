import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PDFDownload() {
  const downloadPDF = () => {
    const input = document.getElementById("task-table");
    if (!input) return;
    
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("task-report.pdf");
    });
  };

  return (
    <button
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      onClick={downloadPDF}
    >
      Download PDF Report
    </button>
  );
}

export default PDFDownload;
