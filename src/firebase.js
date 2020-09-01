import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBL1Wa3lVdMFMUETUBxU_RwyOu_YMTmpe4",
    authDomain: "tinder-clone-86a58.firebaseapp.com",
    databaseURL: "https://tinder-clone-86a58.firebaseio.com",
    projectId: "tinder-clone-86a58",
    storageBucket: "tinder-clone-86a58.appspot.com",
    messagingSenderId: "384922684787",
    appId: "1:384922684787:web:252966919fa15bec98c906",
    measurementId: "G-GZ7YV6XJQB"
  };




  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const database = firebaseApp.firestore();



  export default database; 