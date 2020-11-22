// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCRDLtVNkqF59q6QG_0uA-O2tUs-5kkpEs",
  authDomain: "fbclone-410f4.firebaseapp.com",
  databaseURL: "https://fbclone-410f4.firebaseio.com",
  projectId: "fbclone-410f4",
  storageBucket: "fbclone-410f4.appspot.com",
  messagingSenderId: "1070791211047",
  appId: "1:1070791211047:web:d58cd36eaef8fa81c9b602",
  measurementId: "G-4L4J5725DT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
