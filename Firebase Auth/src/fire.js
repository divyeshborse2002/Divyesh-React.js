// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCToshQHullQ-r1gGvZLmSMaNf6IWrJ8iU",
  authDomain: "storage-810e5.firebaseapp.com",
  projectId: "storage-810e5",
  storageBucket: "storage-810e5.appspot.com",
  messagingSenderId: "88495682439",
  appId: "1:88495682439:web:8fba9356596ed0c9de1922",
  measurementId: "G-P9CPPQ7KKJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };