import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHLK1PHT0835OfC4Hz_Somg8U0bcYLEgY",
  authDomain: "moderno-auth-48c9b.firebaseapp.com",
  projectId: "moderno-auth-48c9b",
  storageBucket: "moderno-auth-48c9b.appspot.com",
  messagingSenderId: "767725534473",
  appId: "1:767725534473:web:991d7b7ee778eaf725e7d8",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
