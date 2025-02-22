import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ2z4zfVPTQLPuQAd8oUQ0VQRUR4tDtb8",
  authDomain: "movieflixno1-e3c57.firebaseapp.com",
  projectId: "movieflixno1-e3c57",
  storageBucket: "movieflixno1-e3c57.firebasestorage.app",
  messagingSenderId: "293456040",
  appId: "1:293456040:web:19dac53eab6b11062d1a9d",
  measurementId: "G-Z66VPRGQH3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
