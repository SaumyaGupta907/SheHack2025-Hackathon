import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase config from the Firebase console
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
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
