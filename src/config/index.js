// import {initiazeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAsYlxBvFpqFNyRg5UPxXXXeO12Gt8JS3I",
    authDomain: "atv-vue-firebase.firebaseapp.com",
    projectId: "atv-vue-firebase",
    storageBucket: "atv-vue-firebase.appspot.com",
    messagingSenderId: "872039604263",
    appId: "1:872039604263:web:35feaf8e0416ed285eee02",
    measurementId: "G-GHE6R5LLQ4"
  };

  initializeApp(firebaseConfig);

  export const db = getFirestore();
  export const auth = getAuth();
  export const storage = getStorage();

