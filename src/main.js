import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyAAusCe8pvj_HZ1-adglj9q970n-nUqEnw",
      authDomain: "madeira-veglab.firebaseapp.com",
      databaseURL: "https://madeira-veglab-default-rtdb.firebaseio.com",
      projectId: "madeira-veglab",
      storageBucket: "madeira-veglab.appspot.com",
      messagingSenderId: "107281791399",
      appId: "1:107281791399:web:2307abb9ed62d0de935e82"
};

// Inilizar a Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount("#app");


var storage = firebase.storage();
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };
