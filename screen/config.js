import * as firebase from "firebase"
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAaiqsg8-6_eBpdR3o2J_2QM6V02jZY8Eg",
    authDomain: "library-pro.firebaseapp.com",
    projectId: "library-pro",
    storageBucket: "library-pro.appspot.com",
    messagingSenderId: "261050785079",
    appId: "1:261050785079:web:1108aba60f31969fdf8eb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export defalut firebase.firestore()