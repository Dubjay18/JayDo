import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu6xHEX1GyhKpacUdq1KBilro3_tuOtow",
  authDomain: "next-fb-eee87.firebaseapp.com",
  projectId: "next-fb-eee87",
  storageBucket: "next-fb-eee87.appspot.com",
  messagingSenderId: "426669847165",
  appId: "1:426669847165:web:fb8d03e847fb3f5e9f3714",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth, app };
