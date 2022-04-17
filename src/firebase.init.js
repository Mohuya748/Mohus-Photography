// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlpSUhyQD9fuLJtIcqnaYAp7IqOpl_9CI",
  authDomain: "mohu-s-photography.firebaseapp.com",
  projectId: "mohu-s-photography",
  storageBucket: "mohu-s-photography.appspot.com",
  messagingSenderId: "819320669680",
  appId: "1:819320669680:web:245d6076d01994b3154935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth =getAuth(app);
export default auth;