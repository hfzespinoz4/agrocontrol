import HomePage from './components/Pages/HomePage.vue';
import ContactPage from './components/Pages/ContactPage.vue';
import DemoPage from './components/Pages/DemoPage.vue';
import InfoPage from './components/Pages/InfoPage.vue';
import NotFoundPage from './components/Pages/NotFoundPage.vue';

export default [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },    
    { path: '/demo', component: DemoPage },
    { path: '/information', component: InfoPage},
    { path: '*', component: NotFoundPage }
  ];