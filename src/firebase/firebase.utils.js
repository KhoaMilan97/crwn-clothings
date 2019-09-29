import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAHbeIeoOKYQW0TCKKxQLY4q0igaBG-Dq0",
  authDomain: "crw-clothing.firebaseapp.com",
  databaseURL: "https://crw-clothing.firebaseio.com",
  projectId: "crw-clothing",
  storageBucket: "",
  messagingSenderId: "711339457057",
  appId: "1:711339457057:web:7fe2065a0c01cd94948160",
  measurementId: "G-5HVKRPJX6X"
};

export const createUserProfileDocumnet = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdA = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdA,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
