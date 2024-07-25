import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase'; // Import Firestore

const BimDesign = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'files'));
        const filesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFiles(filesData);
      } catch (error) {
        console.error('Error fetching files:', error);
        setError('Failed to load files');
      } finally {
        setLoading(false);
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

  if (loading) {
    return <p className="text-lg text-gray-800">Loading...</p>;
  }

  if (error) {
    return <p className="text-lg text-red-600">{error}</p>;
  }

  // Filter files with filenames containing "ARCHICAD" (case-insensitive)
  const filteredFiles = files.filter(file =>
    file.fileName.toUpperCase().includes("ARCHICAD")
  );

  if (filteredFiles.length === 0) {
    return <p className="text-lg text-gray-800">No matching files found.</p>;
  }

  return (
    <div className="w-full lgl:w-1/2 flex flex-col justify-center items-center relative">
      <h2 className="text-2xl font-bold mb-4 text-red-600">BIM DESIGN AND MODELLING COURSE</h2>
      <p className="text-lg text-white-700 mb-4">
      I offer BIM Design and Modelling training using Graphisoft Archicad. <a href="/contact" className="text-blue-600">Contact me</a> and let me help refine your BIM Design and Modelling skills. You can download the training guide below..
      </p>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
        <thead className="bg-bodyColor">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Files</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredFiles.map(file => (
            <tr key={file.id} className="bg-bodyColor">
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={file.url}
                  className="text-blue-600 underline break-words cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.fileName}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-4">
                  <button
                    onClick={() => downloadFile(file.fileName, file.url)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    Download
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BimDesign;
