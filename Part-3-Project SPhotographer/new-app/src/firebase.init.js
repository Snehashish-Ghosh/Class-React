import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUoLguzXHIZoz3T_VJzScMT2iNj5_e36A",
  authDomain: "spotographer-b62f2.firebaseapp.com",
  projectId: "spotographer-b62f2",
  storageBucket: "spotographer-b62f2.appspot.com",
  messagingSenderId: "921828366681",
  appId: "1:921828366681:web:33ac2f1e5acd78b6789448",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
