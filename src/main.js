import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes.js";
import App from './App.vue'

//Conf. VueFire
const VueFire = require('vuefire');
Vue.use(VueFire);


//Conf. VueRouter
Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
