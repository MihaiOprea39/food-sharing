import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2EdzOBRdmd5DkAZQank_-26zexLMXF9E",
    authDomain: "food-sharing-2e2b2.firebaseapp.com",
    databaseURL: "https://food-sharing-2e2b2.firebaseio.com",
    projectId: "food-sharing-2e2b2",
    storageBucket: "food-sharing-2e2b2.appspot.com",
    messagingSenderId: "1002664262358",
    appId: "1:1002664262358:web:b39060748afbcc86bfe777"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
