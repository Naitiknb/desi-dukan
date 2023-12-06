import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8rck3qeujLXNiUR-seaxL2Fdbwnx1kk4",
  authDomain: "the-organic-store-21039.firebaseapp.com",
  projectId: "the-organic-store-21039",
  storageBucket: "the-organic-store-21039.appspot.com",
  messagingSenderId: "1046421221457",
  appId: "1:1046421221457:web:35373db8c7c4536a86c870",
  measurementId: "G-PF8QP00YKC"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export { auth };