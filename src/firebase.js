
import firebase from 'firebase/app';
import 'firebase/firestore'
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC-J_0SpezMlfNKnbwwDWfbrtI69-wGhPA",
    authDomain: "react-hooks-blog-59e0a.firebaseapp.com",
    projectId: "react-hooks-blog-59e0a",
    storageBucket: "react-hooks-blog-59e0a.appspot.com",
    messagingSenderId: "1017242245053",
    appId: "1:1017242245053:web:e3aa016560059d421664d4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();