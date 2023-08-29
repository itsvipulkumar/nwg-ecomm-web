// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApsRs2TFQZWIuvUCOncjHWkBl3yC842zs",
    authDomain: "nwg-ecomm.firebaseapp.com",
    projectId: "nwg-ecomm",
    storageBucket: "nwg-ecomm.appspot.com",
    messagingSenderId: "12507697164",
    appId: "1:12507697164:web:c0a0eb56200171ec9f9e29",
    measurementId: "G-V8ZCX9L61D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const Provider = new GoogleAuthProvider()


const Auth = getAuth(app)

export { Auth, Provider }