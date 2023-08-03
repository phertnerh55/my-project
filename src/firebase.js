// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtddPvY96qrNigEe_QUQYwjtI1ktXwi6k",
  authDomain: "recipe-app-5cac6.firebaseapp.com",
  projectId: "recipe-app-5cac6",
  storageBucket: "recipe-app-5cac6.appspot.com",
  messagingSenderId: "1061095232687",
  appId: "1:1061095232687:web:6e272277b8e301ca4a705a",
  measurementId: "G-P5KFSWKK6M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
