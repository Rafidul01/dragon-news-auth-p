// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEvSWK6GB26a6Y1WUXxyA4yrm7DkKUWlA",
  authDomain: "dragon-news-auth-p.firebaseapp.com",
  projectId: "dragon-news-auth-p",
  storageBucket: "dragon-news-auth-p.appspot.com",
  messagingSenderId: "766363220612",
  appId: "1:766363220612:web:5908205e25c276c50d20d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;