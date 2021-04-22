import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXBbAL4UDLROxIJ05k_PkaISvJmrWgz2E",
  authDomain: "playlist-vue-c28a0.firebaseapp.com",
  projectId: "playlist-vue-c28a0",
  storageBucket: "playlist-vue-c28a0.appspot.com",
  messagingSenderId: "445389135512",
  appId: "1:445389135512:web:8e3eac34d0f9195385faed",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
