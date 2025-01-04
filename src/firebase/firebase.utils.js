import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactytclone.firebaseapp.com",
  projectId: "reactytclone",
  storageBucket: "reactytclone.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID_API_KEY,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.auth() //auth
