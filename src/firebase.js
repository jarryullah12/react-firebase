// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOYkwFDAlvnZulFMGF4SeYXj_PKp9Knas",
  authDomain: "chat-app-yt-5e35e.firebaseapp.com",
  projectId: "chat-app-yt-5e35e",
  storageBucket: "chat-app-yt-5e35e.appspot.com",
  messagingSenderId: "378549932407",
  appId: "1:378549932407:web:f37beb6c12035007525172"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)






