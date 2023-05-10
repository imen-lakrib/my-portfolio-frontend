// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL2tcpCIOgBpq5kVXGl-afRl0QIxY8ffw",
  authDomain: "my-portfolio-f8fd9.firebaseapp.com",
  projectId: "my-portfolio-f8fd9",
  storageBucket: "my-portfolio-f8fd9.appspot.com",
  messagingSenderId: "481508029202",
  appId: "1:481508029202:web:b4b900bb117d435c4739cb",
  measurementId: "G-2GBP6MKSGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };