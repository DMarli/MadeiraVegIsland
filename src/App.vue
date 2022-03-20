<!-- Aqui colocamos o CSS geral, NavBar, Footer, o que for comum entre as páginas -->

<template>
  <!-- Ligações entre as páginas -->
  <router-link to="/"></router-link>
  <router-link to="/404"></router-link>
  <router-link to="/admin"></router-link>
  <router-link to="/login"></router-link>
  <router-link to="/register"></router-link>
  <router-link to="/veg"></router-link>
  <router-view />

  <!-- Navbar -->
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <!-- Items à esquerda -->
      <div
        class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#/veg">Porquê ser Veg?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/comer">Restaurantes</a>
          </li>
        </ul>
      </div>
      <!-- Items à esquerda -->
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
              <button type="submit" class="btn">
                <i class="bi-gear"></i> ADMIN
              </button>
            </form>
          </li>

          <li class="nav-item">
            <form action="#/login">
              <button type="submit" class="btn">
                <i class="bi-people-fill"></i> LOGIN
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div id="button"></div>
    <div id="container">
      <div class="Img">
        <img src="@/assets/logonovo.png" alt="MadeiraVegIsland" width="15%" />
      </div>
      <h3>© 2022 Requalificar +Digital Class</h3>
    </div>
  </div>
</template>


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

.navbar {
  font-family: "Source Sans Pro", sans-serif !important;
}
</style>

