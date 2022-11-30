import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import { collection, onSnapShot } from "firebase/firestore";
require('firebase/auth')
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAmsvcl011BnWEszNakYxPnX-rp9RAzl7s",
    authDomain: "eatsur-project.firebaseapp.com",
    projectId: "eatsur-project",
    storageBucket: "eatsur-project.appspot.com",
    messagingSenderId: "333676872933",
    appId: "1:333676872933:web:9457869cea87f7694c400c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app) 
export const provider = new GoogleAuthProvider(app);
