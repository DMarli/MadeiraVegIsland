<template>
<div class = "registoFlex">
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Criar conta</button></p>
  <p><button @click="registerGmail">Registar com Gmail</button></p>
</div>
</template>
<script setup>
  import { ref } from 'vue'
  import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
  import { useRouter } from 'vue-router' //Para criar rota para a página de utilizadores
  
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const register = () => {
   createUserWithEmailAndPassword(getAuth(), email.value, password.value) 
    .then(() => {
        console.log('Registado com sucesso!');
        router.push('/veg') // Vai para a página só de utilizadores
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  };

  const registerGmail = () => {
   
  };
</script>
<style scoped>
.registoFlex
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>