<template>
  <!-- https://codepen.io/SimoTuognia/pen/ZjYJQo -->

  <div class="Flex">
    <v-card elevation="16" outlined shaped></v-card>
    <form id="shopping-list">
      <h2>Administrador</h2>
      <!-- <table id="shopping-list-table" class="table table-condensed table-hover">
        <thead>
          <tr>
            <th>Restaurante</th>
            <th>Comentário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in itemsList" :key="index.id">
          <td>
            <span>{{ item.restaurante }}</span>
            <input
              type="text"
              v-bind:placeholder="item.restaurante"
              v-model="item.restaurante"
            />
          </td>
          <td>
            <span>{{ item.itemComentario }}</span>
            <input
              v-bind:placeholder="item.itemComentario"
              v-model="item.itemComentario"
            />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-success"
              @click="editItemComplete(item)"
            >
              <i class="fa fa-save"></i> Save
            </button>
          </td>
        </tr>
      </table> -->
      <div class="row col-md-6">
        <div class="col-md-6 form-group">
          Restaurante
          <input type="text" v-model="restaurante" class="checkbox" autofocus />
        </div>
        <div class="col-md-6 form-group">
          Comentário
          <input type="text" v-model="itemComentario" class="checkbox" />
        </div>
        <button type="button" @click="guardar()" class="btn btn-primary">
          <i class="fa fa-plus"></i>Add
        </button>
      </div>
    </form>
  </div>

  <div>
    <div class="file-upload-form">
      Upload an image file:
      <input type="file" @change="previewImage" accept="image/*" />
    </div>
    <div class="image-preview" v-if="imageData.length > 0">
      <img class="preview" :src="imageData" />
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
    };
  },
  mounted() {},
  methods: {
    previewImage: function (event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    guardar() {
      axios
        .post("https://madeira-veglab-default-rtdb.firebaseio.com/.json", {
          restaurante: this.restaurante,
          itemComentario: this.itemComentario,
          imageData: this.imageData, 
        })
        .then(
          (response) => (
            (this.articleId = response.data.id),
            console.log("res " + this.articleId)
          )
        );
    },
  },
};
</script>

<style scoped>
.Flex {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h2 {
  font-family: "Inspiration", cursive;
  font-size: 60px;
}
</style>