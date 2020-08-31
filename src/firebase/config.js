// Connect project to Firebase services:
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration (as an object):
let firebaseConfig = {
  apiKey: "AIzaSyCL4MAvESqbeSus6zXsIyeiOhgtjQMrqaw",
  authDomain: "asc-gram.firebaseapp.com",
  databaseURL: "https://asc-gram.firebaseio.com",
  projectId: "asc-gram",
  storageBucket: "asc-gram.appspot.com",
  messagingSenderId: "553661421338",
  appId: "1:553661421338:web:800802026d86457631fea3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initalize 'storage' and 'firestore' services:
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

// Export services to use within other components:
export { projectStorage, projectFirestore, timeStamp }