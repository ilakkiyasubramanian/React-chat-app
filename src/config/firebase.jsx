// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJGQ47SnxKdi69l2P9siiTTYtponrQd4",
  authDomain: "chat-app-4cad9.firebaseapp.com",
  projectId: "chat-app-4cad9",
  storageBucket: "chat-app-4cad9.firebasestorage.app",
  messagingSenderId: "1033001721535",
  appId: "1:1033001721535:web:769eaca03786291080f00a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
