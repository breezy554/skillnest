import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtL-a51vufLJEElknrwDMMH0ybEHRuM5s",
  authDomain: "skillnest-946a4.firebaseapp.com",
  projectId: "skillnest-946a4",
  storageBucket: "skillnest-946a4.appspot.com", // 🔧 fix typo: should be .appspot.com
  messagingSenderId: "145253100209",
  appId: "1:145253100209:web:152a7844d74ee012da1090",
  measurementId: "G-SM6CBJG74F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
