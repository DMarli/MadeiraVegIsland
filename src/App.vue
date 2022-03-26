<!-- Aqui colocamos o CSS geral, NavBar, Footer, o que for comum entre as páginas -->

<template>
  <!-- Ligações entre as páginas -->
  <router-link to="/"></router-link>
  <router-link to="/404"></router-link>
  <router-link to="/admin"></router-link>
  <router-link to="/login"></router-link>
  <router-link to="/register"></router-link>
  <router-link to="/veg"></router-link>
  <router-link to="/comentarios"></router-link>
  <router-view />

  <!-- Navbar -->
  <!-- Condição v-if LoggedIn: só surgem estas opções na NavBar se houver sessão ativa, senão, só aparecem as LoggedIn=false -->
  <div
    class="navbar"
    v-show="
      $route.path === '/admin' ||
      $route.path === '/login' ||
      $route.path === '/register' ||
      $route.path === '/veg' ||
      $route.path === '/comentarios' ||
      $route.path === '/'
    "
  >
    <!-- Para esconder a Navbar da página 404, tentei fazer com !==404, mas as páginas de erro, tendo várias hipóteses, só mesmo no /404 é que não ficava a navbar -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <form action="#/">
              <button type="submit" class="btn">
                <i class="bi bi-house"></i> INÍCIO
              </button>
            </form>
          </li>
          <li class="nav-item">
            <form action="#/admin">
              <button type="submit" class="btn" v-if="isLoggedIn">
                <i class="bi-gear"></i> ADMIN
              </button>
            </form>
          </li>

          <li class="nav-item">
            <form action="#/login">
              <button type="submit" class="btn" v-if="isLoggedIn == false">
                <i class="bi-people-fill"></i> LOGIN
              </button>
            </form>
          </li>

          <li class="nav-item">
            <form action="#/register">
              <button type="submit" class="btn" v-if="isLoggedIn == false">
                <i class="bi bi-person-lines-fill"></i> REGISTO
              </button>
            </form>
          </li>

          <li class="nav-item">
            <form action="#/veg">
              <button type="submit" class="btn" v-if="isLoggedIn">
                <i class="bi bi-heart"></i> VEG LIFE
              </button>
            </form>
          </li>

          <li class="nav-item">
            <form action="#/comentarios">
              <button type="submit" class="btn" v-if="isLoggedIn">
                <i class="bi bi-card-text"></i> COMENTÁRIOS
              </button>
            </form>
          </li>

          <li class="nav-item">
            <button @click="handleSignOut" class="btn" v-if="isLoggedIn">
              <!-- Click para encerrar sessão, tem v-if porque só podemos sair se tivermos com sessão iniciada-->
              <i class="bi bi-backspace-reverse"></i> SAIR
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <!-- Footer -->
  <div
    class="footer"
    v-show="
      $route.path === '/admin' ||
      $route.path === '/login' ||
      $route.path === '/register' ||
      $route.path === '/veg' ||
      $route.path === '/comentarios' ||
      $route.path === '/'
    "
  >
    <!-- Para esconder o footer -->
    <div id="button"></div>
    <div id="container">
      <div class="Img">
        <img src="@/assets/logonovo.png" alt="MadeiraVegIsland" width="15%" />
      </div>
      <h3>© 2022 Requalificar +Digital Class</h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(false);

// definir o auth
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true; //se houver utilizador
    } else {
      isLoggedIn.value = false; // se não houver
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/"); //Envia para a home
  });
};
</script>

<style>
/* Importação de fontes do google */

@import url("https://fonts.googleapis.com/css2?family=Inspiration&display=swap");
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400);

body {
  margin: 0;
  padding: 0;
  background: url("@/assets/fundo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  /* Viewport, o que vemos a 100% */
}

/* Footer do CodePen, alterado. Fonte exata: https://codepen.io/Anurag-Chitnis/pen/jOEYpKL */

.footer #button {
  width: 35px;
  height: 35px;
  border: #727172 8px solid;
  border-radius: 35px;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.footer #button:hover {
  width: 35px;
  height: 35px;
  border: #3a3a3a 12px solid;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
}
.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 2em;
  overflow: hidden;
  margin: 0 auto;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 999;
}
.footer:hover {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  height: 8.5em; /*tamanho footer*/
}
.footer #container {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7); /* Para ficar opaco*/
  /* Alinhar o copyright e o logo */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  line-height: 1;
}

.footer h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
}

.Img {
  line-height: 1;
}
/* Alterar texto navbar, important dá prioridade a esta font */
.navbar {
  font-family: "Source Sans Pro", sans-serif !important;
}
</style>

