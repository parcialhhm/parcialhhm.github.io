// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4lgiEwi7Aw9ACXRuO_m5DtBhrfAVKq_w",
  authDomain: "parcialhhm.firebaseapp.com",
  projectId: "parcialhhm",
  storageBucket: "parcialhhm.appspot.com",
  messagingSenderId: "299348923910",
  appId: "1:299348923910:web:f3d32196a1e77bb57d9587",
  measurementId: "G-BLSDLC4QW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
