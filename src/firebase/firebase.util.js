import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCxfusvII1LEnV93qhpgfc_XoFqtN63-M",
  authDomain: "crwn-db-628a4.firebaseapp.com",
  projectId: "crwn-db-628a4",
  storageBucket: "crwn-db-628a4.appspot.com",
  messagingSenderId: "408368800645",
  appId: "1:408368800645:web:9f992d8c866a82f4249aec",
};

export const createUserProfileDocument = async (userAuth, additionnalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionnalData });
    } catch (error) {
      console.log(error, "create");
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const singnInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
