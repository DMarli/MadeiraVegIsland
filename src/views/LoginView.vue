<template>
  <div class="form-group">
    <div class="loginFlex">
      <h1>Login</h1>
      <br />
      <p>
        <input
          type="text"
          placeholder="E-mail"
          v-model="email"
          class="form-control"
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="form-control"
        />
      </p>
      <p v-if="errMsg">{{ errMsg }}</p>
      <p>
        <button
          @click="login"
          style="background-color: #7fb414"
          class="btn btn-success"
        >
          Login
        </button>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; //Para criar rota para a página de utilizadores

const errMsg = ref(); // Mensagens de erro
const router = useRouter();
const email = ref("");
const password = ref("");
const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Registado com sucesso!");
      router.push("/veg"); // Vai para a página só de utilizadores
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "E-mail inválido.";
          break;
        case "auth/user-not-found":
          errMsg.value = "E-mail não encontrado.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Password incorreta.";
          break;
        default:
          errMsg.value = "Email ou Password incorretos.";
          break;
      }
    });
};
</script>
<style scoped>
.loginFlex {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 7%;
}
body {
  font-family: "Source Sans Pro", sans-serif;
}
h1 {
  font-family: "Inspiration", cursive;
  font-size: 60px;
}
</style>