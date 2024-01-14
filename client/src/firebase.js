// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "better-estate.firebaseapp.com",
  projectId: "better-estate",
  storageBucket: "better-estate.appspot.com",
  messagingSenderId: "235803906010",
  appId: "1:235803906010:web:e3ce64f3f327463e8a3ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);