// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqskDqEmCXkOlDn6O3w8zykJFeOZRUpSM",
    authDomain: "auditvault-fa8fd.firebaseapp.com",
    projectId: "auditvault-fa8fd",
    storageBucket: "auditvault-fa8fd.firebasestorage.app",
    messagingSenderId: "385903583541",
    appId: "1:385903583541:web:54675f6a1776d5fe0a2c7c",
    measurementId: "G-QHFTJDK0P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
