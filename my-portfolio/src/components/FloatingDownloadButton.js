import React from 'react';

function FloatingDownloadButton() {
  const handleDownload = () => {
    const pdfUrl = '/MarkZoltanTorok_CV.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'MarkZoltanTorok_CV.pdf';
    link.click();
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
}

export default FloatingDownloadButton;
