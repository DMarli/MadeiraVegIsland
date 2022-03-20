<template>
  <div class="madeiraFlex">
    <div class="bemvindo">Bem-vindo</div>
    <div class="madeiraVeg" data-item="Madeira">Madeira</div>
    <div class="madeiraVeg" data-item="VegIsland">VegIsland</div>
  </div>
</template>



<!-- Scoped, CSS que só se aplica a esta página -->

<style scoped>
/* Madeira Island texto */
/* Para alinhar o texto ao centro, numa div */

.madeiraFlex {
  margin-top: -3%;
  /*Para centrar com a parte branca do fundo */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.27;
}

.madeiraVeg {
  /* Texto e cor */
  font-family: "Inspiration", cursive;
  font-size: 100px;
  color: rgb(94, 94, 94);
  /* Efeitos */
  transition: all 0.5s ease-in-out;
  position: relative;
}

.bemvindo {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
}

/* Efeitos depois de passar o rato por cima, parcialmente retirado do CodePen */
.madeiraVeg::before {
  content: attr(data-item);
  transition: all 1s ease-in-out;
  color: #62a288;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  overflow: hidden; /*Esconde o texto verde, antes de passarmos o rato */
}
.madeiraVeg:hover::before {
  width: 115%; /*Senão for maior que 100% aparecem partes cinzentas no verde */
}
</style>