// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcSEgqEiNYPGj6oGD386Q49xGSXEjuNDE',
  authDomain: 'netflex-clone-6673b.firebaseapp.com',
  projectId: 'netflex-clone-6673b',
  storageBucket: 'netflex-clone-6673b.appspot.com',
  messagingSenderId: '482137216877',
  appId: '1:482137216877:web:6bd4d14077625ab343ec64',
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);