// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtoCWn_tCjcPFrufPreujgb8m4jFIfHXk",
  authDomain: "quroixlab.firebaseapp.com",
  projectId: "quroixlab",
  storageBucket: "quroixlab.firebasestorage.app",
  messagingSenderId: "914619949576",
  appId: "1:914619949576:web:e82b28d953449d529667bd",
  measurementId: "G-5DE0HRXNHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { app, analytics, db, storage };