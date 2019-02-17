const url = "../docs/pdf.pdf";
      scale = 1.5,
      canvas = document.querySelector("#pdf-render"),
      ctx = canvas.getContext('2d');

let pdfDoc = null,
    pageNum = 1
    pageIsRendering = false,
    pageNumIsPending = null;

const renderPage = num => {

};

pdfjsLib.getDocument(url).promise.then(_pdfDoc => {
  pdfDoc = _pdfDoc;
  // console.log(pdfDoc)
  document.querySelector('#page-count').textContent = pdfDoc.numPages;
})
