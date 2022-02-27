<template>
  <div class="cuerpo">
    <div class="titulo"><h1>Pagina de Personajes</h1></div>
    <div class="imgcont">
      <div class="inicio" v-for="(item, index) in result" @click="getDetalles(item.id); showModal=true" :key="index" >
        <img class="imgini" :src="item.image" :alt="item.name" />
      </div>
    </div>
    <div class="numero">
      <h1>Pag: {{ contador }}</h1>
    </div>
    <div class="botones">
      <button v-if="contador >= 2" @click="getPaginacionAnterior()">
        Anterior
      </button>
      <button v-if="contador <= 33" @click="getPaginacionSiguiente()">
        Siguiente
      </button>
    </div>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"> 
      </div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <img class="imgove" :src="descripcion.image">
        <h1>{{descripcion.name}}</h1>
        <hr>
        <h1 class="ficha">Ficha</h1>
        <hr>
        <p><span>Estado:</span> {{descripcion.status}}<br><span>Especie:</span> {{descripcion.species}}<br>
        <span>Genero:</span> {{descripcion.gender}}<br><span>Origen:</span> {{origen.name}}</p>
        <button @click="showModal = false">Cerrar</button>
      </div>
    </transition> 
  </div>
</template>

<script>
import { Global } from "../global";
import axios from "axios";
export default {
  name: "PersonajesComp",
  data() {
    return {
      servicios: [],
      descripcion: {},
      result: [],
      contador: 1,
      showModal: false,
      origen: {}
    };
  },
  created() {
    this.getMuestra();
    document.title = "Personajes";
  },

  methods: {
     getMuestra() {
      this.contador;
      axios
        .get(Global.url + "character/?page=" + this.contador)
        .then((res) => {
          this.servicios = res.data;
          this.result = res.data.results;
          console.log("result", this.result);
        });
    },
    getPaginacionSiguiente() {
      this.contador++;
      axios
        .get(Global.url + "character/?page=" + this.contador)
        .then((res) => {
          this.servicios = res.data;
          this.result = res.data.results;
          console.log("result", this.result);
        });
    },

    getPaginacionAnterior() {
      this.contador--;
      axios
        .get(Global.url + "character/?page=" + this.contador)
        .then((res) => {
          this.servicios = res.data;
          this.result = res.data.results;
          console.log("result", this.result);
        });
    },
    getDetalles(id) {
      axios
        .get(Global.url + "character/"+id)
        .then((res) => {
          this.descripcion = res.data;
          this.origen = res.data.location;
          console.log("result", this.descripcion);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cuerpo {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: #161b22;
}
.titulo {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
}
span{
  text-decoration: underline;
  color:crimson;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
}
p {
  color: white;
  font-size: 1.6rem;
}
h1 {
  color: white;
}
.ficha{
  color: teal;
  font-size: 1.2rem;
  margin: 0;
}
.botones {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
}
button {
  width: 80px;
  margin: 0px 0px 0px 8px;
  border: none;
  cursor: pointer;
  font-family: "Dancing Script", cursive;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: rgb(0, 128, 128);
  border-radius: 10px 10px;
}
button:hover {
  background-color: rgb(220, 20, 60);
}
.numero {
  display: flex;
  justify-content: center;
  align-content: center;
}
.imgcont {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.inicio {
  width: 250px;
  height: 180px;
}
.inicio:hover {
  transform: scale(1.3);
 
}
.inicio {
  transition: 0.5s ease;
}
.imgini {
  width: 160px;
  height: 160px;
  cursor: pointer;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  border-radius: 10px 10px;
  -webkit-box-shadow: -1px -3px 13px 3px rgb(0, 128, 128, 0.767);
  -moz-box-shadow: -1px -3px 13px 3px rgba(0, 128, 128, 0.767);
  box-shadow: -1px -3px 13px 3px rgb(0, 128, 128, 0.767);
}
.imgini:hover{
  -webkit-box-shadow: -1px -3px 13px 3px rgb(220, 20, 60, 0.767);
  -moz-box-shadow: -1px -3px 13px 3px rgba(220, 20, 60, 0.767);
  box-shadow: -1px -3px 13px 3px rgb(220, 20, 60, 0.767);
}

.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: 100%;
  max-width: 300px;
  background-color:black;
  border-radius: 15px;
  padding: 10px;
}
.slide{
   margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

.imgove{
  width: 200px;
  height: 200px;
  border-radius: 120px 120px;
}
</style>
