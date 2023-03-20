import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE6X1nAoitW97rqJvndkBxKSRUJxq-WKU",
  authDomain: "react-netflix-clone-615c3.firebaseapp.com",
  projectId: "react-netflix-clone-615c3",
  storageBucket: "react-netflix-clone-615c3.appspot.com",
  messagingSenderId: "239429230334",
  appId: "1:239429230334:web:a01dbbd4eab416aeae4faf",
  measurementId: "G-PZHPXHE8Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
