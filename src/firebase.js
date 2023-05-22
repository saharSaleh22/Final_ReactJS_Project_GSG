// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjuMc1TFN934t8mu72CW0KuerjfYi-KUM",
  authDomain: "moderno2-32ba2.firebaseapp.com",
  projectId: "moderno2-32ba2",
  storageBucket: "moderno2-32ba2.appspot.com",
  messagingSenderId: "253784196132",
  appId: "1:253784196132:web:d17e6ae5aea9ec52a1c4b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);