<template>
  <div class="cuerpo">
    <title>Inicio</title>
    <div class="titulo"><h1>Pagina de Inicio</h1></div>
    <div class="image"><img src="../assets/imghome.png"></div>
    <div class="text">
      <p>Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense 
      de animación para adultos creada por <span>Roiland</span>  y <span>Harmon</span> en 
      2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick, 
      y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica 
      y los viajes espaciales, temporales e intergalácticos. Roiland es el encargado de darle voz a Morty 
      y Knoxville se encarga a darle voz a rick, y la serie también incluye las voces de Chris Parnell, 
      Spencer Grammer y Sarah Chalke. La serie se originó por un cortometraje rudimentario animado por 
      Roiland para el festival de cine "Channel 101" llamado Doc and Mharti, una parodia de los principales 
      protagonistas de <span>Back to the Future</span>. Cuando la cadena NBC despidió a Harmon en 2013 por 
      discusiones entre él y los ejecutivos de la serie que había creado, Community, él y 
      Roiland desarrollaron una serie basada en los personajes ya creados por Roiland.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
  props: {
    
  },
  mounted(){
    document.title = 'Inicio';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cuerpo{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #161b22;
  
}
h1{
  color: white;
}
.titulo{
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
}
.image{
  display: flex;
  justify-content: center;
  align-content: center;
}

.image img{
  width: 40%;
  height: 40%;
}

.text{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
.text p{
  width: 70%;
  color: white;
  text-align: justify;
}
span{
  color:teal;
}
</style>