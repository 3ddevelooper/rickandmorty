<template>
  <div class="cuerpo">
    <div class="titulo"><h1>Pagina de Capitulos</h1></div>

    <section class="container">
      <div class="card" v-for="resultado in result" :key="resultado.id">
        <div class="card-image"></div>
        <h2>Capitulos</h2>
        <p class="list">
          <span>Capitulo:</span> {{ resultado.id }}<br /><span>Titulo:</span>
          {{ resultado.name }}<br /><span>Temporada:</span>
          {{ resultado.episode }} <br /><span>Emisión:</span>
          {{ resultado.air_date }}<br />
        </p>
      </div>
    </section>
    <div class="numero">
      <h1>Pag: {{ contador }}</h1>
    </div>
    <div class="botones">
      <button v-if="contador >= 2" @click="getPaginacionAnterior()">
        Anterior
      </button>
      <button v-if="contador <= 1" @click="getPaginacionSiguiente()">
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import { Global } from "../global";
import axios from "axios";
export default {
  name: "CapitulosComp",
  data() {
    return {
      result: [],
      contador: 1,
    };
  },
  created() {
    this.getMuestra();
    document.title = "Capitulos";
  },

  methods: {
    getMuestra() {
      this.contador;
      axios.get(Global.url + "episode/?page=" + this.contador).then((res) => {
        this.servicios = res.data;
        this.result = res.data.results;
        console.log("resultsi", this.result);
      });
    },

    getPaginacionSiguiente() {
      this.contador++;
      axios.get(Global.url + "episode/?page=" + this.contador).then((res) => {
        this.servicios = res.data;
        this.result = res.data.results;
        console.log("resultsi", this.result);
      });
    },

    getPaginacionAnterior() {
      this.contador--;
      axios.get(Global.url + "episode/?page=" + this.contador).then((res) => {
        this.servicios = res.data;
        this.result = res.data.results;
        console.log("resultan", this.result);
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
span {
  text-decoration: underline;
  color: crimson;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}
p {
  color: teal;
}
h1 {
  color: white;
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
  background-color: teal;
  border-radius: 10px 10px;
}
button:hover {
  background-color: crimson;
}
.numero {
  display: flex;
  justify-content: center;
  align-content: center;
}
.capcont {
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
.list {
  width: 260px;
  height: 160px;
  cursor: default;
  font-size: 1.2rem;
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: white;
  width: 270px;
  height: 380px;
  margin: 10px;
  border-radius: 15px;
}

.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}

.card {
  transition: 0.5s ease;
  cursor: default;
  margin: 20px;
}

.card-image {
  height: 150px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 15px 15px 0 0;
  background-image: url("../assets/cap.jpg");
}
</style>
