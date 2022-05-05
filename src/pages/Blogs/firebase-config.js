// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwgyL8dzxIRelx9AXJZabFYefoHeNppIc",
  authDomain: "vighneshblog.firebaseapp.com",
  projectId: "vighneshblog",
  storageBucket: "vighneshblog.appspot.com",
  messagingSenderId: "795571032299",
  appId: "1:795571032299:web:11bd214fb1521cfecdeeae",
  measurementId: "G-X1D8VXXNZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
