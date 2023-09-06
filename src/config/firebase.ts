// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore}  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmlEOm9WgudV1YYjWnaw2MCzRwsRHrJfw",
  authDomain: "pedro-react-app.firebaseapp.com",
  projectId: "pedro-react-app",
  storageBucket: "pedro-react-app.appspot.com",
  messagingSenderId: "536617256829",
  appId: "1:536617256829:web:90ef95df8488f21a3b2e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);