import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHWrbOD0ERfUls8n9v39utyJNcPOs296c",
  authDomain: "instagram-clone-curso-9ff48.firebaseapp.com",
  projectId: "instagram-clone-curso-9ff48",
  storageBucket: "instagram-clone-curso-9ff48.appspot.com",
  messagingSenderId: "928524816080",
  appId: "1:928524816080:web:0c3ded71605aa7016158d5",
  measurementId: "G-B086092TC5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
//const storage = firebase.storage();
//const functions = firebase.functions();

export { auth, db };
