import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtP7zkVGjIqNGRoFQhM2YcLkZ-cd6h43Q",
    authDomain: "diagondialogue.firebaseapp.com",
    projectId: "diagondialogue",
    storageBucket: "diagondialogue.appspot.com",
    messagingSenderId: "613536954114",
    appId: "1:613536954114:web:c060892242299c9e99b41b",
    measurementId: "G-GCW7ERN9XQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();





