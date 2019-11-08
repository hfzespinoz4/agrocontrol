<template>
  <div class="container">
    <header>
      <ul class="main-menu">
        <router-link @click="showHomePage" tag="li" to="/" exact><a>Home </a> </router-link>
        <router-link @click="showInfoPage" tag="li" to="/information" exact><a>Information </a> </router-link>
        <router-link @click="showDemoPage" tag="li" to="/demo" exact><a>AgroControl </a></router-link>
        <router-link @click="showContactPage" tag="li" to="/contact" exact><a>Contact </a></router-link>
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
      isShownProductsPage: false,
      isShownDemoPage: false,
      isShownContactPage: false
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
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration-style: none;
}

a{
  text-decoration-style: none;
}

li{
  list-style-type: none;
}

:root{
    background-image: url("./components/media/background.jpg");
}

.main-menu{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-decoration-style: none;
}

</style>
