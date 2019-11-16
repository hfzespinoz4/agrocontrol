import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes.js";
import App from './App.vue'

Vue.use(VueRouter);
/*
//Firebase Configuration
import vueFire from 'vuefire';
vue.use(vueFire);
*/

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
