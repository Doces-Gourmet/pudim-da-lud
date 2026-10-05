import {configured,auth,db,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,doc,getDoc,setDoc,serverTimestamp} from "./firebase-app.js";

export function watchAuth(callback){
  if(!configured){ callback(null); return ()=>{}; }
  return onAuthStateChanged(auth,callback);
}
export async function login(email,password){
  if(!configured) throw new Error("Firebase ainda não foi configurado.");
  return signInWithEmailAndPassword(auth,email,password);
}
export async function logout(){ if(configured) return signOut(auth); }
export async function ensureUserProfile(user,role="funcionario"){
  if(!configured) return;
  const ref=doc(db,"usuarios",user.uid);
  const snap=await getDoc(ref);
  if(!snap.exists()) await setDoc(ref,{uid:user.uid,nome:user.email,email:user.email,role,ativo:true,criadoEm:serverTimestamp()});
}
export {configured};
