// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_e0G4zi0Shd6Ayt4MP-QdtiBzeiCgszw",
    authDomain: "portfolio-78c44.firebaseapp.com",
    projectId: "portfolio-78c44",
    storageBucket: "portfolio-78c44.appspot.com",
    messagingSenderId: "70995366937",
    appId: "1:70995366937:web:43c12b0a567d49a9a18688",
    measurementId: "G-VCC8964CFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);