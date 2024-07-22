import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from './Firebase'; // Import Firestore and Storage

const UploadDocumentCard = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(''); // State for messages

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadDocument = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    setUploading(true);
    setMessage(''); // Clear previous messages

    const storageRef = ref(storage, `documents/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'files'), {
        fileName: file.name,
        url: downloadURL,
        createdAt: new Date(),
      });

      setMessage('File uploaded and metadata stored successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={uploadDocument}
          disabled={uploading}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            uploading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {uploading ? 'Uploading...' : 'Upload Document'}
        </button>
        {message && (
          <p className={`mt-4 text-lg ${message.startsWith('Upload failed') ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadDocumentCard;
