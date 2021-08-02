import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD0tTxvbx-UhZ61t2e6gyFvCWfdZtM9C3E",
  authDomain: "reactytclone.firebaseapp.com",
  projectId: "reactytclone",
  storageBucket: "reactytclone.appspot.com",
  messagingSenderId: "935658967922",
  appId: "1:935658967922:web:0a42b7608b81182fcb03eb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.auth() //auth
