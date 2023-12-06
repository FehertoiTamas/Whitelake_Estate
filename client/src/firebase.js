// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "whitelake-estate.firebaseapp.com",
  projectId: "whitelake-estate",
  storageBucket: "whitelake-estate.appspot.com",
  messagingSenderId: "573032314965",
  appId: "1:573032314965:web:faeb19b75dd9b4c365bcdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);