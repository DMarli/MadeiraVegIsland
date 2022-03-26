<template>
  <div id="main-form">
    <div id="form-div">
      <form id="form-one" class="form">
        <h2>Administrador</h2>
        <p class="name">
          <input
            type="text"
            class="feedback-input"
            v-model="restaurante"
            placeholder="Restaurante"
          />
        </p>
        <!-- Nomes dos restaurantes -->
        <p class="name">
          <input
            type="url"
            class="feedback-input"
            v-model="imgURL"
            placeholder="Imagem (URL)"
          />
        </p>
        <!-- URLS -->
        <p class="text">
          <textarea
            name="text"
            class="feedback-input"
            v-model="itemComentario"
            placeholder="Comentário"
          ></textarea>
        </p>
        <!-- Comentários -->
        <div class="submit">
          <button type="button" @click="guardar()" id="button-bottom">
            Submeter
          </button>
          <!-- Botão que chama a função e redireciona para a página de comentários -->
          <div class="ease"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      restaurante: "",
      itemComentario: "",
      imageData: "", //imagem em string
      imgURL: "",
    };
  },
  mounted() {},
  methods: {
    guardar() {
      axios
        // Guardar na firebase
        .post("https://madeira-veglab-default-rtdb.firebaseio.com/.json", {
          restaurante: this.restaurante,
          itemComentario: this.itemComentario,
          imageData: this.imgURL,
        })
        .then(
          (response) => (
            (this.articleId = response.data.id),
            this.$router.push("/comentarios") //encaminhar para a página de comentários
          )
        );
    },
  },
};
</script>

<style scoped>
/* Título admin */
h2 {
  color: #fcfcf5;
  text-align: center;
  letter-spacing: 0.01em;
  font-family: "Inspiration", cursive;
  font-size: 60px;
}

/* Template adaptado de: https://codepen.io/musgrove/pen/kNwLgO */

#form-main {
  width: 0%;
  float: left;
  padding-top: 0px;
  display: flex;
}
/* CSS principal do formulário */
#form-div {
  background-color: rgba(5, 110, 79, 0.9);
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 10px;
  padding-bottom: 20px;
  width: 450px;
  margin-top: 5%;
  float: left;
  left: 52%;
  position: absolute;
  margin-left: -20%;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
}

.feedback-input {
  color: #62a288;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  border-radius: 0;
  vertical-align: middle;
  background-color: #ecf0f1;
  padding: 10px 10px 10px 50px;
  margin-bottom: 8px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid #bdc3c7;
}

/* Quando clicamos em cada formulário */
.feedback-input:focus {
  background: #ecf0f1;
  box-shadow: 0;
  border: 3px solid #62a288;
  color: #3498db;
  outline: none;
  padding: 13px 13px 13px 54px;
}

/* Cor apresentada após escrevermos no formulário */
.focused {
  color: #62a288;
  border: #62a288 solid 3px;
}

/* Caixa do comentário */
textarea {
  width: 100%;
  height: 90px;
  line-height: 150%;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  background-color: white;
}

/* Botão submeter */
#button-bottom {
  float: left;
  width: 100%;
  border: #fbfbfb solid 4px;
  cursor: pointer;
  background-color: rgba(9, 179, 116, 0.9);
  color: white;
  font-size: 24px;
  padding-top: 22px;
  padding-bottom: 22px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-top: -4px;
}

/* Cor do hover principal do botão submeter */
#button-bottom:hover {
  background-color: rgba(78, 188, 221, 0.9); /*Cor que muda no botão */
  color: rgba(36, 86, 100, 0.9);
}

/* Hover do botão a colocar o branco lentamente*/
.ease {
  width: 0px;
  height: 80px;
  background-color: #fbfbfb;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  transition: 0.3s ease;
}

.submit:hover .ease {
  width: 100%;
  background-color: white;
}
</style>