import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCu_Co_1klHAoK7Pq17swBLRAVQxn84FQI",
    authDomain: "crwn-db-1a.firebaseapp.com",
    projectId: "crwn-db-1a",
    storageBucket: "crwn-db-1a.appspot.com",
    messagingSenderId: "335547212900",
    appId: "1:335547212900:web:39195082c09bd8aff86b71",
    measurementId: "G-5YN8XR6Q4H"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;