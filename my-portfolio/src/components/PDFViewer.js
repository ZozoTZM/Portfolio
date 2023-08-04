import React from 'react';


function PDFViewer() {
    return (
      <div>
        <iframe
          src="/MarkZoltanTorok_CV.pdf"
          width="100%"
          height="600px"
          title="PDF Viewer"
        />
      </div>
    );
  }
  

export default PDFViewer;