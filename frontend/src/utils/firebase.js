// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-af707.firebaseapp.com",
  projectId: "interviewiq-af707",
  storageBucket: "interviewiq-af707.firebasestorage.app",
  messagingSenderId: "642896917855",
  appId: "1:642896917855:web:93cea31f45ceb41830b2ea"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}