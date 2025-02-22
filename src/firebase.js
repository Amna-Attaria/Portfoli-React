import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import getAuth if using authentication

const firebaseConfig = {
  apiKey: "AIzaSyBD1OFcQAW-JlUs3waUPejOFI4B1M0eGNk",
  authDomain: "portfolio-11e1e.firebaseapp.com",
  projectId: "portfolio-11e1e",
  storageBucket: "portfolio-11e1e.appspot.com",
  messagingSenderId: "896435486249",
  appId: "1:896435486249:web:36124ba15a31c31413e638",
  measurementId: "G-GSC64X37NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getFirestore(app);  // Fix: Import and initialize getFirestore

export { db, addDoc, auth, collection, serverTimestamp };
