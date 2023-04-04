import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyBo0WhWo4MXc-ke3Lm81bK1vt37OjlC-ws",
  authDomain: "tiktok---jornada-82b25.firebaseapp.com",
  projectId: "tiktok---jornada-82b25",
  storageBucket: "tiktok---jornada-82b25.appspot.com",
  messagingSenderId: "419155130214",
  appId: "1:419155130214:web:e7f9a3a7c2edd5ad6f3aa7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;