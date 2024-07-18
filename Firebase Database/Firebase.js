
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKHW9qh6bYt72aCkDyS-A0NrVDjpT_DZI",
  authDomain: "pr-e7655.firebaseapp.com",
  projectId: "pr-e7655",
  storageBucket: "pr-e7655.appspot.com",
  messagingSenderId: "705910252093",
  appId: "1:705910252093:web:a705a3d0f60bbe33334054",
  measurementId: "G-F7QPC8038Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

    export const auth=getAuth(app)

const analytics = getAnalytics(app);
