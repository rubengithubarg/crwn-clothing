import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDPL0MZn7yhKY36AgGjNWwMsxOIisbUMLs",
  authDomain: "crwn-clothing-db-21b63.firebaseapp.com",
  projectId: "crwn-clothing-db-21b63",
  storageBucket: "crwn-clothing-db-21b63.appspot.com",
  messagingSenderId: "874505303480",
  appId: "1:874505303480:web:9fd058656d6b1186294b4d",
  measurementId: "G-1N4KVXEX86"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
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