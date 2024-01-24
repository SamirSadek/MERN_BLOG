// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-beaad.firebaseapp.com",
  projectId: "mern-blog-beaad",
  storageBucket: "mern-blog-beaad.appspot.com",
  messagingSenderId: "275360092849",
  appId: "1:275360092849:web:7f0456256202a6306f4890"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);