import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAS50b4iwEIISRXVbyzgqO2HYSa5WYcW7w",
    authDomain: "disneyplus-clone-7df0b.firebaseapp.com",
    projectId: "disneyplus-clone-7df0b",
    storageBucket: "disneyplus-clone-7df0b.appspot.com",
    messagingSenderId: "936449581190",
    appId: "1:936449581190:web:05ae8c0e7625b1b81db107",
    measurementId: "G-ZQQT03NE6V"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
//const storage = firebase.storage();

export { auth, provider };
export default db;
// export { storage };
