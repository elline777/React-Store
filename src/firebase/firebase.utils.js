import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDcedbsMR-jC4DM-O0yH_LQ8IQD8m9H7Ds",
    authDomain: "crown-db-d23ed.firebaseapp.com",
    databaseURL: "https://crown-db-d23ed.firebaseio.com",
    projectId: "crown-db-d23ed",
    storageBucket: "crown-db-d23ed.appspot.com",
    messagingSenderId: "39649427786",
    appId: "1:39649427786:web:93fe29e1ebdfe52ca781b3"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

