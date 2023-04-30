// import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
// import 'firebase/compat/auth';
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth";
// import 'firebase/compat/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFaIXKoRk06sTcn9f4K1Pynd77Sd1ep_A",
  authDomain: "whatsapp-clone-2568a.firebaseapp.com",
  projectId: "whatsapp-clone-2568a",
  storageBucket: "whatsapp-clone-2568a.appspot.com",
  messagingSenderId: "247351255332",
  appId: "1:247351255332:web:fbed7a8a4a9f65dd5ad3b1",
  measurementId: "G-7CP2L2J3TQ",
};
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = firebase.auth();
// const provider = new GoogleAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,  provider};
export default db;


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDFaIXKoRk06sTcn9f4K1Pynd77Sd1ep_A",
//   authDomain: "whatsapp-clone-2568a.firebaseapp.com",
//   projectId: "whatsapp-clone-2568a",
//   storageBucket: "whatsapp-clone-2568a.appspot.com",
//   messagingSenderId: "247351255332",
//   appId: "1:247351255332:web:fbed7a8a4a9f65dd5ad3b1",
//   measurementId: "G-7CP2L2J3TQ",
// };
// const app = firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


// export { auth, provider};
// export default db;