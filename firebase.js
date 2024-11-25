import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCBZgsdiEecVJUQIagD4dd9qLIdDSL6Hk",
  authDomain: "week11-68ba2.firebaseapp.com",
  projectId: "week11-68ba2",
  storageBucket: "week11-68ba2.firebasestorage.app",
  messagingSenderId: "659083212567",
  appId: "1:659083212567:web:59688f49b164ad6fb3a952",
  measurementId: "G-DM9LXVJMJW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };