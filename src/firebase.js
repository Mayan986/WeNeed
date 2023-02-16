import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEX9wdVjOODjOukZLGVbvNGcvVhDcPwYs",
  authDomain: "react-auth-26cd0.firebaseapp.com",
  projectId: "react-auth-26cd0",
  storageBucket: "react-auth-26cd0.appspot.com",
  messagingSenderId: "378663240109",
  appId: "1:378663240109:web:e90b990e689933c4c6e124",
  measurementId: "G-P69X5V6364",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
