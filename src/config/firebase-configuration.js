import firebase from 'firebase/app';
// import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtXRSDFXB39hPdBBV61Oeel93N_z8k2Ug",
    authDomain: "ecompetencia-a6a80.firebaseapp.com",
    databaseURL: "https://ecompetencia-a6a80.firebaseio.com",
    projectId: "ecompetencia-a6a80",
    storageBucket: "ecompetencia-a6a80.appspot.com",
    messagingSenderId: "422452388949"
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const db = firebase.database();
  export const storage = firebase.storage();
