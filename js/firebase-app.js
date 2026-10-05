import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, updateDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const cfg = window.FIREBASE_CONFIG || {};
const configured = cfg.apiKey && cfg.apiKey !== "COLOQUE_AQUI" && cfg.projectId && cfg.projectId !== "COLOQUE_AQUI";
let app=null, auth=null, db=null;

if(configured){
  app=initializeApp(cfg);
  auth=getAuth(app);
  db=getFirestore(app);
}

export { configured, app, auth, db, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, collection, addDoc, doc, setDoc, getDoc, getDocs, updateDoc, query, orderBy, onSnapshot, serverTimestamp };
