<template>
  <div class="container">
    <header>
      <nav class="d-flex logo">
        <img src="../src/components/media/logo.png" class="logo" alt="Logotipo de la página">
        <h1 class="display-4">AgroControl</h1>
      </nav>
      <ul class="nav-links  bg-success justify-content-around">
          <router-link class="col-sm-3" @click="isShownHomePage" tag="li" to="/" exact><a>Inicio </a> </router-link>
          <router-link class="col-sm-3" @click="isShownInfoPage" tag="li" to="/information" exact><a>Información </a> </router-link>
          <router-link class="col-sm-3" @click="isShownMain" tag="li" to="/app" exact><a>AgroControl </a></router-link>
          <router-link class="col-sm-3" @click="isShownContactPage" tag="li" to="/contact" exact><a>Contacto </a></router-link>
        </ul>
    </header>
    <main>
      <router-view>

      </router-view>
    </main>
  </div>
</template>

<script>


export default {
  name: 'app',
  data: function() {
    return{
      isShownHomePage: true,
      isShownInfoPage: false,
      isShownContactPage: false,
      isShownMain: false
    };
  }
}
</script>

<style>
:root{
  background-image: url("./components/media/background.jpg");
  background-size: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
 
}

a{
  text-decoration-style: none;
  color: white;
}

li{
  list-style-type: none;
}

:root{
  background-color: rgb(5, 175, 70);
}

.main-menu{
  list-style-type: none;
  display: inline block;
  flex-direction: row;
  justify-content: space-around;
  text-decoration-style: none;
  color: white;
}

.logo{
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  align-content: space-around;
  justify-items: center;
  position:relative;
  display:block;  
  height: 10rem;
  width: 15rem; 
}

.nav-links{
  display: flex;
  justify-content: space-around;
  /*width: 30%;*/
  position: sticky;
}

.nav-links li{
  list-style: none;
  text-align: center;
  padding: 0.7rem;
}

.nav-links li:hover, .nav-links li:active{
  background-color: white;
  transition: 1.1s ease;
    
}

.nav-links a{
  color: #fff;
  text-decoration: none;
  letter-spacing:3px;
  font-size: 16px;
  width: 12rem;
}

.nav-links a:hover{
  color: rgb(5, 175, 70)
}

body{
  background: linear-gradient(to top, rgb(5, 175, 70), rgb(250, 248, 248) 10%);
}
</style>
