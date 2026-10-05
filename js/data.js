export const PRODUCTS = [
 {id:"tradicional",name:"Pudim Tradicional",gourmet:false,image:"assets/pudim-tradicional-site.jpg",prices:{80:6.99,120:11.99,250:21.99,500:39.99,1100:69.99}},
 {id:"cafe",name:"Pudim de Café",gourmet:false,image:"assets/pudim-cafe-site.jpg",prices:{80:10.99,120:13.99,250:25.99,500:47.99,1100:83}},
 {id:"chocolate",name:"Pudim de Chocolate 50%",gourmet:false,image:"assets/pudim-chocolate-site.jpg",prices:{80:8.99,120:13.99,250:25.99,500:46.99,1100:81.99}},
 {id:"ninho",name:"Pudim de Leite Ninho",gourmet:false,image:"assets/pudim-leite-ninho-site.jpg",prices:{80:9.99,120:14.99,250:27.99,500:50.99,1100:89.99}},
 {id:"ovomaltine",name:"Pudim de Ovomaltine",gourmet:false,image:"assets/pudim-ovomaltine-site.jpg",prices:{80:10.99,120:15.99,250:29.99,500:54.99,1100:96.99}},
 {id:"maracuja",name:"Pudim de Maracujá",gourmet:true,image:"assets/pudim-maracuja-site.jpg",prices:{80:12.99,120:15.99,250:27.99,500:49.99,1100:85.99}},
 {id:"limao",name:"Pudim de Limão Siciliano",gourmet:true,image:"assets/pudim-limao-siciliano-site-v2.svg",prices:{80:12.99,120:17.99,250:31.99,500:56.99,1100:98.99}},
 {id:"frutas",name:"Pudim de Frutas Vermelhas",gourmet:true,image:"assets/pudim-frutas-vermelhas-v3.jpg",prices:{80:14.99,120:19.99,250:33.99,500:58.99,1100:100.99}}
];
export const SIZES=[80,120,250,500,1100];
export const money=v=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v);
