import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
require('firebase/auth')
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useState,useEffect } from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyAmsvcl011BnWEszNakYxPnX-rp9RAzl7s",
    authDomain: "eatsur-project.firebaseapp.com",
    projectId: "eatsur-project",
    storageBucket: "eatsur-project.appspot.com",
    messagingSenderId: "333676872933",
    appId: "1:333676872933:web:9457869cea87f7694c400c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




export default app
export const auth = getAuth(app) 
export const provider = new GoogleAuthProvider(app);
