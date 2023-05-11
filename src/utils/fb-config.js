import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBUhUNwppApcyJrwLCbkoluLkBqbQsfM18",
    authDomain: "practiedeliveryfood.firebaseapp.com",
    databaseURL: "https://practiedeliveryfood-default-rtdb.firebaseio.com",
    projectId: "practiedeliveryfood",
    storageBucket: "practiedeliveryfood.appspot.com",
    messagingSenderId: "719009065503",
    appId: "1:719009065503:web:3e9deb8789f73e9150832a"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;