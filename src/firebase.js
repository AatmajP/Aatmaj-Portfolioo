// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.apiKey.trim() !== "" && firebaseConfig.projectId && firebaseConfig.projectId.trim() !== ""
);

let app = null;
let auth = null;
let db = null;
let provider = null;

if (isFirebaseConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
    db = getFirestore(app);
  } catch (error) {
    console.warn("Firebase initialization error:", error);
  }
}

export { auth, db };

export const loginWithGoogle = () => {
  if (!auth || !provider) {
    alert("Firebase is not configured yet. Add your Firebase credentials in src/firebase.js to enable login and live chat.");
    return Promise.reject(new Error("Firebase not configured"));
  }
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  if (!auth) return Promise.resolve();
  return signOut(auth);
};
