
import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBjqx76KrrVqKF0T00cUfYqSYEDCXAMU5w",
    authDomain: "crwn-clothing-db-2e25c.firebaseapp.com",
    projectId: "crwn-clothing-db-2e25c",
    storageBucket: "crwn-clothing-db-2e25c.appspot.com",
    messagingSenderId: "369483879671",
    appId: "1:369483879671:web:df14ce91c36ab4e2e02ff2",
    measurementId: "G-KM76KCX0V1"
  };



  const app = initializeApp(firebaseConfig);




  

  export const auth = getAuth(app);
 // export const firestore = firebase.firestore();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({'prompt' :'select_account'});
  export const signInWithGoogle =() => signInWithPopup(auth, provider);

 