
import { initializeApp } from "firebase/app";
import{ getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArPTrF-Dn12mDgpO1w1P_tZMm2gw04L10",
  authDomain: "netflix-30327.firebaseapp.com",
  projectId: "netflix-30327",
  storageBucket: "netflix-30327.appspot.com",
  messagingSenderId: "1037675956803",
  appId: "1:1037675956803:web:d757e556c654295031a2f6",
  measurementId: "G-10VMDGQVS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const firebaseAuth = getAuth(app)