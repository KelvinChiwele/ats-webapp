import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDXLehU5_QSUFoOjYd34WQ0h2aJFXjGZfU",
  authDomain: "ats-agrochemicals-limite-1d317.firebaseapp.com",
  databaseURL: "https://ats-agrochemicals-limite-1d317.firebaseio.com",
  projectId: "ats-agrochemicals-limite-1d317",
  storageBucket: "ats-agrochemicals-limite-1d317.appspot.com",
  messagingSenderId: "776253897833"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 