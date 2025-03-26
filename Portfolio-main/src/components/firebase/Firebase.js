import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0NO1JX64tzZmoBp2iBQ_4AkrMvmsqL9U",
  authDomain: "portfolio-c8412.firebaseapp.com",
  projectId: "portfolio-c8412",
  storageBucket: "portfolio-c8412.appspot.com",
  messagingSenderId: "1009983500933",
  appId: "1:1009983500933:web:7688bfa428bdf264006fec",
  measurementId: "G-9QJ5YMNR7K"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, ref, uploadBytes, getDownloadURL, db, collection, addDoc, getDocs };