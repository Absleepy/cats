import firebase from "firebase";
// firebase SDK
let firebaseConfig = {
    apiKey: "AIzaSyAuopCq-8XMHSvDBvqVUvHz1STgs1T9XiQ",
    authDomain: "sleepy-cats.firebaseapp.com",
    projectId: "sleepy-cats",
    storageBucket: "sleepy-cats.appspot.com",
    messagingSenderId: "889753606433",
    appId: "1:889753606433:web:df4e24edc7a02aff7a0660"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;