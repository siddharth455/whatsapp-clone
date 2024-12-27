// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASTwB6HazotGf7rofw5sZdBgou4Xhq6xc",
  authDomain: "whatsapp-clone-e152e.firebaseapp.com",
  projectId: "whatsapp-clone-e152e",
  storageBucket: "whatsapp-clone-e152e.firebasestorage.app",
  messagingSenderId: "926721406153",
  appId: "1:926721406153:web:57c5fe0e8e9ee15edcc918",
  measurementId: "G-EKHDM312S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Firestore instance

// Export both app and db
export { app, db }; // Ensure both are exported

