// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaBE18nzCzA20Y_qAub83TZMEtvinA-vw",
  authDomain: "shehack-46c84.firebaseapp.com",
  projectId: "shehack-46c84",
  storageBucket: "shehack-46c84.firebasestorage.app",
  messagingSenderId: "217883559016",
  appId: "1:217883559016:web:090d460990b4189eaf67dd",
  measurementId: "G-DC3J3S20TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);