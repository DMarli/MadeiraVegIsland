<template>
<!-- https://codepen.io/SimoTuognia/pen/ZjYJQo -->

<div class ="Flex">
<form id="shopping-list">
  <h2>Administrador</h2>
<table id="shopping-list-table" class="table table-condensed table-hover">
  <thead>
     <tr>
       <th>Restaurante</th>
       <th>Comentário</th>
       <th>Actions</th>
     </tr>
  </thead>
  <tr v-for="(item, index) in itemsList" :key="item.id">
    <td>
      <span v-show="!item.inEditMode">{{ item.restaurante }}</span>
      <input type="number" v-bind:placeholder="item.restaurante" v-show="item.inEditMode" v-model="item.restaurante" /> 
    </td>
    <td>
      <span v-show="!item.inEditMode">{{ item.itemComentario }}</span>
      <input v-bind:placeholder="item.itemComentario" v-show="item.inEditMode" v-model="item.itemComentario" />
    </td>
    <td>
      <button type="button" class="btn btn-success" v-show="item.inEditMode" @click="editItemComplete(item)"><i class="fa fa-save"></i> Save  </button>
      <button type="button" class="btn btn-info" v-show="!item.inEditMode" @click="editItem(item)"  ><i class="fa fa-edit"></i> Edit  </button>
      <button type="button" class="btn btn-danger" @click="removeItem(index)"><i class="fa fa-remove"></i> Delete  </button>
    </td>
  </tr>
</table>
<div class="row col-md-6">
              <div class="col-md-6 form-group">
                Restaurante
                <input type="number" v-model="restaurante" class="checkbox" autofocus>
              </div>
              <div class="col-md-6 form-group">
                Comentário
                <input type="text" v-model="itemComentario" class="checkbox">
              </div>
              <button type="button" @click="increment" class="btn btn-primary" ><i class="fa fa-plus"></i>Add</button>
              </div>
</form>
</div>
</template>

<script>

export default {
  data() {
    return {
      restaurante: '',
                  itemComentario: '',
                  itemsList: [ 
                    {
                      restaurante: "Mundo Vegan",
                      itemComentario: "Comida muito salgada, preços acima da média",
                      inEditMode: false
                    }],
                    
                  inEditMode: false
    }
  },
  methods: {
    increment() {
                      var restauranteIN = this.restaurante;
                      var itemComentarioIN = this.itemComentario.trim();
                      this.itemsList.push({ 
                        restaurante: restauranteIN,
                        itemComentario: itemComentarioIN,
                        inEditMode: false
                      });
                      this.clearAll();
                  },
                  clearrestaurante: function () {
                      this.restaurante = '';
                  },
                  clearItemComentario: function () {
                      this.itemComentario = '';
                  },
                  clearAll: function () {
                    this.clearrestaurante();
                    this.clearItemComentario();
                  },
                  removeItem: function (index){
                      this.itemsList.splice(index, 1); //delete 1 element from the array at the position index
                  },
                  editItem:function (item){
                      item.inEditMode = true;
                  },
                  editItemComplete: function (item) {
                      item.inEditMode = false;
                  }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment()
  }
}

</script>

<style scoped>
.Flex
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h2{
font-family: "Inspiration", cursive;
  font-size: 60px;
}
</style>