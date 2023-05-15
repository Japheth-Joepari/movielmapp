// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW_1V9ZHSGTGxMQWvpHD_FuvjWIUq1zQQ",
  authDomain: "moviesem-a9ff7.firebaseapp.com",
  projectId: "moviesem-a9ff7",
  storageBucket: "moviesem-a9ff7.appspot.com",
  messagingSenderId: "634545351862",
  appId: "1:634545351862:web:aa5100f2209a7dc62b4a17",
  measurementId: "G-4X174J8YKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
