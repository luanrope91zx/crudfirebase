import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOtDaXOC8af2L57EFB-5FTJ3rd0qsYYlo",
    authDomain: "crud-react-44d54.firebaseapp.com",
    databaseURL: "https://crud-react-44d54-default-rtdb.firebaseio.com",
    projectId: "crud-react-44d54",
    storageBucket: "crud-react-44d54.appspot.com",
    messagingSenderId: "442988706805",
    appId: "1:442988706805:web:0a92413661d3a984c77ebc",
    measurementId: "G-TGM0PBJ4Q7"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth=app.auth()

  export {auth}
