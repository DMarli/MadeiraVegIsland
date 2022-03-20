import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Importar a firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Código da nossa firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAusCe8pvj_HZ1-adglj9q970n-nUqEnw",
  authDomain: "madeira-veglab.firebaseapp.com",
  projectId: "madeira-veglab",
  storageBucket: "madeira-veglab.appspot.com",
  messagingSenderId: "107281791399",
  appId: "1:107281791399:web:2307abb9ed62d0de935e82"
};

const app = createApp(App);

app.use(router);

app.mount("#app");

//Inicializar a firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };

//https://stackoverflow.com/questions/61236336/vue-js-error-app-is-assigned-a-value-but-never-used-no-unused-vars/61236532#61236532
