<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="header">
          <div class="logo">
            <img src="./assets/logorick.png" alt="" />
          </div>
          <div class="banner"></div>
        </div>
        <nav>
          <ul>
            <li>
              <router-link to="/home" active-class="menuactive" title="Inicio"
                >Inicio</router-link
              >
            </li>
            <li>
              <router-link
                to="/personajes"
                active-class="menuactive"
                title="Personajes"
                >Personajes</router-link
              >
            </li>
            <li>
              <router-link
                to="/capitulos"
                active-class="menuactive"
                title="Capitulos"
                >Capitulos</router-link
              >
            </li>
            <li>
              <router-link
                to="/lugares"
                active-class="menuactive"
                title="Lugares"
                >Lugares</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <body>
      <router-view></router-view>
    </body>
    <footer>
      <div class="footercontainer">
        <div class="footeritems">
          <div class="links">
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Preguntas frecuentes</a>
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Preferencias de cookies</a>
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Centro de ayuda</a>
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Información corporativa</a>
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Información corporativa</a>
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Términos de uso</a>
            <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Privacidad</a>
          </div>
          <div class="redes">
            <ul>
              <li>
                <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Facebook</a>
              </li>
              <li>
                <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Twitter</a>
              </li>
              <li>
                <a rel="nofollow noopener noreferrer" href="https://google.com.ar" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
          <h2 class="copy">&copy; 2021 <a class="autor" href="https://damiandries.com.ar/" target="-blank">Damián David Dries</a> | Todos los derechos reservados</h2>
        </div>
      </div>
      
    </footer>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");
#app {
  font-family: "Dancing Script", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.menuactive {
  color: teal !important;
  font-size: 1.4rem;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body h1 {
  text-transform: uppercase;
  color: #0d1117;
}
ul li {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: crimson;
}

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: url(./assets/header.jpg) no-repeat center center/cover;
}

.logo {
  width: 100%;
  height: 80px;
}

.logo img {
  width: 30%;
  margin: -30px 0px 0px 0px;
}

.banner {
  width: 60%;
  height: 50px;
}

nav {
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 15px 0px 0px 0px;
  background-color: #0d1117;
}

nav ul {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: white;
  padding: 0;
  margin: 0;
}

nav ul li {
  font-size: 1.2rem;
  margin: 0px 10px 0px 20px;
  list-style: none;
  cursor: pointer;
}
footer{
  width: 100%;
  height: 150px;
  background-color: #0d1117;
}

.footercontainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.footeritems{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.links {
  width: 100%;
  margin: -20px 0px 0px 10px;
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.links a {
  color: white;
  font-size: 1rem;
  font-weight: normal;
  margin: 0px 0px 0px 20px;
}
.links a:hover{
  color:crimson;
}
.redes {
  margin: 0px 10px 0px -10px;
  color: white;
}

.redes ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;

}

.redes ul li {
  font-size: 1.5rem;
  margin: 0px 0px 0px 10px;
  cursor: pointer;
}
.copy {
  width: 100%;
  margin: 0px 0px 0px 50px;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 400;
  color: white;
}
.autor{
  color:teal;
}

@media (max-width:576px){
 
  .links {
  width: 100%;
  display: block;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  text-align: center;
 }
  .links a {
    margin: 0px 0px 0px 0px;
    padding: 0px 10px 0px 0px;
    font-size: 0.9rem;
    
 }
 .copy {
  width: 90%;
  margin: 0px 0px 0px 0px;
  font-size: 1rem;
 }
}

@media (max-width:414px){
 
  .links {
  width: 100%;
  display: block;
  margin: 0px 10px 0px -30px;
  padding: 0px 0px 0px 0px;

  text-align: right;
 }
  .links a {
    margin: 0px 0px 0px 0px;
    padding: 0px 10px 0px 0px;
    font-size: 0.8rem;
    
 }
 .copy {
  width: 90%;
  margin: 0px 0px 0px 0px;
  font-size: 1rem;
 }
}

@media (max-width:392px){
 
  .links {
  width: 100%;
  display: block;
  margin: 0px 10px 0px -8px;
  padding: 0px 0px 0px 0px;

  text-align: right;
 }
  .links a {
    margin: 0px 0px 0px 0px;
    padding: 0px 10px 0px 0px;
    font-size: 0.7rem;
    
 }
 .copy {
  width: 70%;
  margin: 0px 0px 0px 0px;
  font-size: 1rem;
 }
}
</style>
