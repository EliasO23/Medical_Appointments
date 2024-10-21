// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCENK04sKypYNMHydoTdH1jcjXja6ns2Dg",
  authDomain: "medicalappointments-c4e7b.firebaseapp.com",
  projectId: "medicalappointments-c4e7b",
  storageBucket: "medicalappointments-c4e7b.appspot.com",
  messagingSenderId: "869905965378",
  appId: "1:869905965378:web:d7945dc03da7af9f5368db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);