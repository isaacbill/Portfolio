import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase'; // Import Firestore

const StructuralTraining = () => {
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

  // Filter files with filenames containing "MIDAS GEN" and "AUTOCAD"
  const filteredFiles = files.filter(file =>
    file.fileName.includes("MIDAS GEN") || file.fileName.includes("AUTOCAD")
  );

  if (filteredFiles.length === 0) {
    return <p className="text-lg text-gray-800">No matching files found.</p>;
  }

  return (
    <div className="w-full lgl:w-3/4 flex flex-col justify-center items-center relative p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-red-600">STRUCTURAL DESIGN TRAINING</h2>
      <p className="text-lg text-gray-700 mb-4">
        I offer structural design training using Midas Gen & AutoCAD. <a href="/contact" className="text-blue-600">Contact me</a> and let me help refine your structural design skills. You can download the training guide below.
      </p>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredFiles.map(file => (
              <tr key={file.id} className="bg-gray-50">
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
    </div>
  );
};

export default StructuralTraining;
