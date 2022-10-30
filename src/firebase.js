import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBcgk8u_iulHw3JznFOsRmomTSfkBaLIE4",
  authDomain: "r3lease.firebaseapp.com",
  projectId: "r3lease", 
  databaseURL: "https://r3lease-default-rtdb.firebaseio.com/",
  storageBucket: "r3lease.appspot.com",
  messagingSenderId: "207456674774",
  appId: "1:207456674774:web:73d16396b2f0aff4b83a77",
  measurementId: "G-3345PV0VDR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
