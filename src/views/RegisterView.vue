<template>
  <div class="form-group">
    <div class="registoFlex">
      <h1>Registo</h1>
      <br />
      <p>
        <input
          type="text"
          placeholder="Exemplo@email.com"
          class="form-control"
          v-model="email"
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
        />
      </p>
      <p>
        <button
          @click="register"
          style="background-color: #7fb414"
          class="btn btn-success"
        >
          Criar conta
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; //Para criar rota para a página de utilizadores

const router = useRouter();
const email = ref("");
const password = ref("");
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Registado com sucesso!");
      router.push("/veg"); // Vai para a página só de utilizadores
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
<style scoped>
/* 
Para alinhar */
.registoFlex {
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