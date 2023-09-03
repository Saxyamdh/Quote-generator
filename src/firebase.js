import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD2m5C7NZBQYPeQWpUm9hl_MzB3caq-2K8",
    authDomain: "quote-generator-aa3bc.firebaseapp.com",
    projectId: "quote-generator-aa3bc",
    storageBucket: "quote-generator-aa3bc.appspot.com",
    messagingSenderId: "918510440687",
    appId: "1:918510440687:web:d1e4910ac63649dbc40b1a",
    measurementId: "G-NWLMG2S6MG"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db=getDatabase(app)