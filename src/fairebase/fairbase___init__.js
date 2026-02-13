// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDBtvvHuLb7CVMRFg_sidCgUSToLse9I",
  authDomain: "assignment-9-e9580.firebaseapp.com",
  projectId: "assignment-9-e9580",
  storageBucket: "assignment-9-e9580.firebasestorage.app",
  messagingSenderId: "829237135109",
  appId: "1:829237135109:web:5cfe22bb01670e3ce7d96c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);