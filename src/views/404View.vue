<template>
  <div class="body_404">
    <div class="loginBox_404">
    <h1>404 - PAGE NOT FOUND</h1>
      <form action="#/">
        <button
          type="submit"
          style="background-color: #7fb414"
          class="btn"
        >
          Keep walking!
        </button>
      </form>

        <!-- Brócolo a correr -->
    <div class="scroll">
  
      <img src="../assets/correr.gif" alt="Correr" width="50%">
      
      </div>
      
    </div>
  </div>
</template>

<style scoped>
h1{
	font-family: 'Source Code Pro', monospace;
	font-size: 70px;
	margin-bottom: 10%;
}
button
{
  font-family: "Source Code Pro", monospace;
  align-content: center;
  text-align: center;
  align-items: center;
  margin-top: -15%;
  margin-left: 40%;
}

/* Animação do brócolo */
.scroll {
  position: fixed;
  animation-name: across;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: linear;
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

</style>