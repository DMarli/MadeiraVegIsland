<template>
  <div class="card text-center m-3">
    <h2>Comentários</h2>
    <div v-for="(item, id) in restaurantes" :key="id">
      <h5 class="card-header">{{item.restaurante}}</h5>
      <div class="card-body">{{item.itemComentario}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "get-request-async-await",
  data() {
    return {
      restaurantes: null,
    };
  },
  async created() {
    // GET request using axios with async/await
    const response = await axios.get(
      "https://madeira-veglab-default-rtdb.firebaseio.com/.json"
    );

    this.restaurantes = response.data;
  },
};
</script>
