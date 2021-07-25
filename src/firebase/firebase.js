import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAVQUa2Ti-eZRkhx9z3WMyjOwDLLLsWcEQ",
    authDomain: "react-ecommerce-b79b6.firebaseapp.com",
    projectId: "react-ecommerce-b79b6",
    storageBucket: "react-ecommerce-b79b6.appspot.com",
    messagingSenderId: "573140562367",
    appId: "1:573140562367:web:d0355b35cb48792626710a"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

//disponible para todos
export const  dataBase = fb.firestore();