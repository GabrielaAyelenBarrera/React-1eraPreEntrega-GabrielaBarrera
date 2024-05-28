import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5W2EOVJVqjeredwfYgqgVDRFZpsSmchU",
  authDomain: "curso-react-e3758.firebaseapp.com",
  projectId: "curso-react-e3758",
  storageBucket: "curso-react-e3758.appspot.com",
  messagingSenderId: "192168524730",
  appId: "1:192168524730:web:b7106fefe0db071a623b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />)
