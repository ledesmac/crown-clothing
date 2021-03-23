import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJG7DTyxoogdlIkeiPe4eSjAgMdXcttPk",
    authDomain: "ledesmac-crown-clothing-db.firebaseapp.com",
    projectId: "ledesmac-crown-clothing-db",
    storageBucket: "ledesmac-crown-clothing-db.appspot.com",
    messagingSenderId: "874013981528",
    appId: "1:874013981528:web:cfcb0f4d964f1b0f22432d",
    measurementId: "G-TNFC0DQM4B"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
   
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
