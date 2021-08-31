import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAseUAGJHtOyaa87-LRn_7WYquiQ1ErTak",
    authDomain: "chat-app-1c773.firebaseapp.com",
    projectId: "chat-app-1c773",
    storageBucket: "chat-app-1c773.appspot.com",
    messagingSenderId: "1006103149011",
    appId: "1:1006103149011:web:340f8462470034570c9726"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);