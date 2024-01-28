// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt6wY3AyCMM9vrs0c0xfDaHm96J6nTFSs",
  authDomain: "podsterm-main.firebaseapp.com",
  projectId: "podsterm-main",
  storageBucket: "podsterm-main.appspot.com",
  messagingSenderId: "311153731126",
  appId: "1:311153731126:web:fc9d7dd6ee016674939a97",
  measurementId: "G-G4FQ4QY7K8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;