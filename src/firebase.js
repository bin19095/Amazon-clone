import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDICgiSLsemdtNIMAr-s75uBat33otznyA",
    authDomain: "challenge-1520d.firebaseapp.com",
    databaseURL: "https://challenge-1520d.firebaseio.com",
    projectId: "challenge-1520d",
    storageBucket: "challenge-1520d.appspot.com",
    messagingSenderId: "330008513433",
    appId: "1:330008513433:web:b7d62431afebdc49062108",
   
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const  auth = firebase.auth()

export { db, auth };