import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAGI1MSpCFfw8-8jaQKgjE62Ec0aaJw4E",
  authDomain: "web3-108f4.firebaseapp.com",
  projectId: "web3-108f4",
  storageBucket: "web3-108f4.appspot.com",
  messagingSenderId: "793740344528",
  appId: "1:793740344528:web:913a8d5827f1ff4ad032d5",
  measurementId: "G-YPG5WCR08Y"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage();
const auth = getAuth();
export const signIn = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const signUp = (email: any, password: any) => {
  return createUserWithEmailAndPassword(auth, email, password);
};