import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaH8Gl90dM03CY4qECPYPzxrj2ua4jIDU",
  authDomain: "itt-todoapps.firebaseapp.com",
  projectId: "itt-todoapps",
  storageBucket: "itt-todoapps.appspot.com",
  messagingSenderId: "443810780249",
  appId: "1:443810780249:web:be528c8c8fff007fdc8d48"
  };

initializeApp(firebaseConfig) 
 
export const db = getFirestore();
export const auth = getAuth();
