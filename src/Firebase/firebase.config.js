// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAahWqaomcgqd7BP1tUnoGRPCpskFhbi2k",
  authDomain: "podflow-bd.firebaseapp.com",
  projectId: "podflow-bd",
  storageBucket: "podflow-bd.appspot.com",
  messagingSenderId: "506903758637",
  appId: "1:506903758637:web:f947bb1fd521744596f5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)