import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDboYDnfLik8Gj9pTqJTBgJ8k55B6EZauU",
  authDomain: "vue3-projeler-ffdb4.firebaseapp.com",
  projectId: "vue3-projeler-ffdb4",
  storageBucket: "vue3-projeler-ffdb4.appspot.com",
  messagingSenderId: "857880386349",
  appId: "1:857880386349:web:dc515b30bcf166dafdd1a4"
};

const db = initializeApp(firebaseConfig);

export { db };
