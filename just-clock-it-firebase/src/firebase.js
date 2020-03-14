import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

var firebaseConfig = {
    apiKey: "AIzaSyB0D7-8Ukj8waszkdXbKNjp1aya1RbjsNA",
    authDomain: "react-firebase-b1706.firebaseapp.com",
    databaseURL: "https://react-firebase-b1706.firebaseio.com",
    projectId: "react-firebase-b1706",
    storageBucket: "react-firebase-b1706.appspot.com",
    messagingSenderId: "789832346779",
    appId: "1:789832346779:web:ccfde6f41b14872d342a3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;