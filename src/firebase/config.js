import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyClt2ojWJVB1B68wbzwNtX-X2aKDG4M_D4",
    authDomain: "photo-gallery-6d45f.firebaseapp.com",
    databaseURL: "https://photo-gallery-6d45f.firebaseio.com",
    projectId: "photo-gallery-6d45f",
    storageBucket: "photo-gallery-6d45f.appspot.com",
    messagingSenderId: "338581196669",
    appId: "1:338581196669:web:9f071a9103ab0ce2fc8614"
  };
  // Initialize Firebase
  const config = firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp, config };
  
