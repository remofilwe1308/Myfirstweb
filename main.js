// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import {getFirestore} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB1lJ-ofkLgvo3jMl_TG0QyoiDEXETkakA",
    authDomain: "contact-form-c29ed.firebaseapp.com",
    projectId: "contact-form-c29ed",
    storageBucket: "contact-form-c29ed.firebasestorage.app",
    messagingSenderId: "543074491279",
    appId: "1:543074491279:web:27cf2cb3888895871589fa",
    measurementId: "G-P9TGDSJLR6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firestore = getFirestore(app);
  