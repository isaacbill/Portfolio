import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaDownload } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, imageSrc, imageTitle, imageDescription }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-auto">
      <div className="bg-black p-6 rounded shadow-lg max-w-2xl mx-auto text-white">
        <h2 className="text-2xl mb-4 font-semibold">{imageTitle}</h2>
        <Zoom>
          <img src={imageSrc} alt={imageTitle} className="w-full h-auto mb-4 rounded" />
        </Zoom>
        <p className="text-base leading-relaxed mt-4">{imageDescription}</p>
        <div className="mt-4 flex justify-between">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Close
          </button>
          <a 
            href={imageSrc} 
            download 
            className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-600 transition-colors duration-300"
          >
            <FaDownload />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
