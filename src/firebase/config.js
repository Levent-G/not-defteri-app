import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQuVkWfUWGayBondcZWwA6Poum0PpRha0",
  authDomain: "ileri-react-redux-bae86.firebaseapp.com",
  projectId: "ileri-react-redux-bae86",
  storageBucket: "ileri-react-redux-bae86.appspot.com",
  messagingSenderId: "844529974253",
  appId: "1:844529974253:web:3f50b07e109ec79972c5e4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
