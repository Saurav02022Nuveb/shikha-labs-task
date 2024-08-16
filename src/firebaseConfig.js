// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjbRJK6TGGCsnJvqBanh-kqjlhdXoqHz0",
  authDomain: "shikha-labs-task.firebaseapp.com",
  projectId: "shikha-labs-task",
  storageBucket: "shikha-labs-task.appspot.com",
  messagingSenderId: "364902460497",
  appId: "1:364902460497:web:9a55c15d7d4e17ff755c70",
  measurementId: "G-2F65HJZCBQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
