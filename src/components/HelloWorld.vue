<!-- Não vamos usar esta página no projeto, vai buscar conteúdo da Home -->

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
