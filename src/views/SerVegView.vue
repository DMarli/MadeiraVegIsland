<template>
  <div class="flex-container" style="background-color: transparent">
    <div class="vegFlex">
      <div id="content_veg">
        <h6>Bem-vindo à página de Cliente!</h6>
      <h1>Razões para ser Vegetariano</h1>
      <img src="@/assets/animal.png" alt="Animal" width="10%" /> 
      <p>Pelos animais.</p>
   
      <img src="@/assets/saude.png" alt="Saúde" width="10%" /> 
      <p>Pela sua saúde.</p>
   
      <img src="@/assets/planeta.png" alt="Ambiente" width="10%" /> 
      <p>Pelo ambiente.</p>
   
      <img src="@/assets/justica.png" alt="Justiça" width="10%" />
      <p>Pela justiça.</p>
    
      <h1>Madeira - Onde Comer?</h1>
      <img src="@/assets/pimpinelas.jpg" alt="Pimpinelas" width="30%" />
      <p>
        Coffee shop vegetariano, localizado no centro de Santa Cruz,
        oferece bolos, cafés, chás, sumos naturais, tostas, quiches,
        salgadinhos, refeições leves e saudáveis. Um espaço diferente, acolhedor
        e amigo do ambiente :)
      </p>
      

      <img src="@/assets/oliveggie.jpg" alt="Olie" width="30%" />
      <p>
        <br />Para quem quer uma boa refeição vegetariana sem sair de casa. A
        deliciosa lasanha é a protagonista do Oli Veggie 🌵 É a base de
        bolonhesa de soja, bechamel, massa e queijo! Podem escolher a versão
        queijo mozzarella ou queijo vegan. Ambas são uma delícia! 🤤 Para
        encomendas, consultem o
        <a href="https://www.facebook.com/Oli-veggie-105041001930430"
          >Facebook</a
        >
        da página. Encomendas todos os dias até as 19h, e entregas a partir das
        20h, ao domicílio 🏠
      </p>
    
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
 
 <style scoped>

#content_veg{
  background-color:white;
  margin:15%;
}

h6{
  font-family: 'Source Code Pro', monospace;
}
p {
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  width: 50%;
  margin-left: 25%;
}
h1 {
  font-family: "Inspiration", cursive;
  font-size: 70px;
  line-height: 2;
}
.vegFlex {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  line-height: 2.5;
  block-size: fit-content;
  width: fit-content;
}
img {
  padding-bottom: 5px;
}
</style>