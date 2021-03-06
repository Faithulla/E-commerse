// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCu_Co_1klHAoK7Pq17swBLRAVQxn84FQI",
  authDomain: "crwn-db-1a.firebaseapp.com",
  databaseURL: "https://crwn-db-1a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crwn-db-1a",
  storageBucket: "crwn-db-1a.appspot.com",
  messagingSenderId: "335547212900",
  appId: "1:335547212900:web:39195082c09bd8aff86b71",
  measurementId: "G-5YN8XR6Q4H"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;