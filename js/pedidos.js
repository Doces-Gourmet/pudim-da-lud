import {configured,db,collection,addDoc,serverTimestamp} from "./firebase-app.js";

export async function salvarPedido(pedido){
  const payload={...pedido,criadoEm:serverTimestamp ? serverTimestamp() : new Date().toISOString()};
  if(configured){
    const ref=await addDoc(collection(db,"pedidos"),payload);
    return {id:ref.id,online:true};
  }
  const pedidos=JSON.parse(localStorage.getItem("pudim_pedidos")||"[]");
  const id=String(Date.now());
  pedidos.unshift({...payload,id,criadoEm:new Date().toISOString()});
  localStorage.setItem("pudim_pedidos",JSON.stringify(pedidos));
  return {id,online:false};
}
