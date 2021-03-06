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

export const convertCollectionsSnapshotToMap = collections => {
  const transformCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getUserCartRef = async userId => {
  const cartRef = firestore.collection("carts").where("userId", "==", userId);
  const snapShot = await cartRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection("carts").doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.doc[0].ref();
  }
};

export const addCollectionAndDocumnet = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const gooleProvider = new firebase.auth.GoogleAuthProvider();
gooleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(gooleProvider);

export default firebase;
