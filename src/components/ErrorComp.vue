<template>
  <div class="cuerpo">
    <div class="titulo"><h1>Pagina de Error</h1></div>
    <img src="../assets/error.jpg">
  </div>
</template>

<script>
export default {
  name: 'ErrorComp',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cuerpo{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url("../assets/error.jpg") no-repeat center center/cover;
}
.titulo {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
}
h1{
  color:white;
}
</style>
