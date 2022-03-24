
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyBjqx76KrrVqKF0T00cUfYqSYEDCXAMU5w",
    authDomain: "crwn-clothing-db-2e25c.firebaseapp.com",
    projectId: "crwn-clothing-db-2e25c",
    storageBucket: "crwn-clothing-db-2e25c.appspot.com",
    messagingSenderId: "369483879671",
    appId: "1:369483879671:web:df14ce91c36ab4e2e02ff2",
    measurementId: "G-KM76KCX0V1"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc('users/${userAuth.uid}' );
  
  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
       userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating users', error.message);
    }
  }
return userRef;
}

  firebase.initializeApp(config);

  




  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt' :'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);


  export default firebase;

 