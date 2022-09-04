import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3LMqLl2NB0GlgAFLvlP_ckCMXuQUC_MI",
  authDomain: "start-my-diet-official.firebaseapp.com",
  projectId: "start-my-diet-official",
  storageBucket: "start-my-diet-official.appspot.com",
  messagingSenderId: "229967671857",
  appId: "1:229967671857:web:e85ea31ae9f3b4edce9b10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
