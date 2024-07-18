

import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../fire";

const userCollectionRef = collection(db, "users");

class Home {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };
}

export default  new Home();
