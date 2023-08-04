import React from 'react'
import Navbar from './Navbar'
import PDFViewer from './PDFViewer'
import FloatingDownloadButton from './FloatingDownloadButton'


function CVPage() {
    return (
      <div>
        <Navbar />
        <PDFViewer />
        <FloatingDownloadButton />
      </div>
    );
  }
  
  export default CVPage;