import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase'; // Import Firestore

const FileActionCard = () => {
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'files'));
        const files = querySnapshot.docs.map(doc => doc.data());
        console.log('Fetched files:', files); // Debugging log
        if (files.length > 0) {
          setFileInfo(files[0]); // Set the first file info
        }
      } catch (error) {
        console.error('Error fetching files:', error); // Debugging log
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = (fileName, url) => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName; // Set the file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const printDocument = (url) => {
    if (url) {
      const printWindow = window.open(url, '_blank');
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      }
    }
  };

  if (!fileInfo) {
    return <p className="text-lg text-gray-800">No files uploaded yet.</p>;
  }

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <a
                href={fileInfo.url}
                className="text-blue-600 underline break-words cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {fileInfo.fileName}
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex gap-4">
                <button
                  onClick={() => downloadFile(fileInfo.fileName, fileInfo.url)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Download
                </button>
                <button
                  onClick={() => printDocument(fileInfo.url)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  Print
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FileActionCard;
