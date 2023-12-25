import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWwLgJd_hqMdPMkl4HiYV3sBR6J7AQjbk",
    authDomain: "netflix-clone-1d7de.firebaseapp.com",
    projectId: "netflix-clone-1d7de",
    storageBucket: "netflix-clone-1d7de.appspot.com",
    messagingSenderId: "487997596618",
    appId: "1:487997596618:web:89d64d2b15c46288c2a533",
    measurementId: "G-400BFYQPCK"
  };


 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {auth};
 export default db;