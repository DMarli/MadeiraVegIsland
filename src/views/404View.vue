<template>
  <div class="body_404">
    <div class="loginBox_404">
      <h1>404 - PAGE NOT FOUND</h1>
      <!-- Botão a redirecionar para a página inicial -->
      <form action="#/">
        <button type="submit" style="background-color: #7fb414" class="btn">
          Keep walking!
        </button>
      </form>

      <!-- Brócolo a correr -->
      <div class="correr">
        <img src="../assets/correr.gif" alt="Correr" width="50%" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Source Code Pro", monospace;
  font-size: 70px;
  margin-bottom: 10%;
}
button {
  font-family: "Source Code Pro", monospace;
  align-content: center;
  text-align: center;
  align-items: center;
  margin-top: -15%;
  margin-left: 40%;
}

/* Animação do brócolo */
.correr {
  position: fixed;
  animation-timing-function: linear;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-name: across;
  animation-play-state: running;
  bottom: 40px;
  right: -210px;
}
@keyframes across {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(-1700px, 0px);
  }
}

.body_404 {
  background-repeat: no-repeat;
  background-image: url("@/assets/maratona.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar{
     visibility: hidden !important;
}
</style>