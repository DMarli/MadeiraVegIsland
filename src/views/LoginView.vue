<template>
<div class = "loginFlex">
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
   <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="login">Login</button></p>
  <p><button @click="loginGmail">Login com Gmail</button></p>
</div>
</template>
<script setup>
  import { ref } from 'vue'
  import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
  import { useRouter } from 'vue-router' //Para criar rota para a página de utilizadores
  const errMsg = ref() // Mensagens de erro
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const login = () => {
   signInWithEmailAndPassword(getAuth(), email.value, password.value) 
    .then(() => {
        console.log('Registado com sucesso!');
        router.push('/veg') // Vai para a página só de utilizadores
      })
      .catch(error => {
        console.log(error.code)
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'E-mail inválido'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
  }
      });
  };

  const loginGmail = () => {
   
  };
</script>
<style scoped>
.loginFlex
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>