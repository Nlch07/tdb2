import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCysKcXFVoqWDIQzkdObB-9sgm54cRGyp0",
  authDomain: "test3-88cee.firebaseapp.com",
  databaseURL: "https://test3-88cee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test3-88cee",
  storageBucket: "test3-88cee.appspot.com",
  messagingSenderId: "469479851370",
  appId: "1:469479851370:web:915e95767b012c281e1113"
};

const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.googleProvider = new GoogleAuthProvider();
window.signInWithPopup = signInWithPopup;
window.signOut = signOut;