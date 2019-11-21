// Enlaces de navegación página principal
//import HomePage from './components/Pages/HomePage.vue';
import ContactPage from './components/Pages/ContactPage.vue';
import DemoPage from './components/Pages/DemoPage.vue';
import InfoPage from './components/Pages/InfoPage.vue';
import NotFoundPage from './components/Pages/NotFoundPage.vue';

/* Enlaces de navegación aplicación */

import consultas from './components/consultas';
import consumo from './components/consumo';
import empleados from './components/empleados';
import equipos from './components/equipos';
import labores from './components/labores';
import miempresa from './components/miempresa';
import registrar from './components/registrar';
import servicios from './components/servicios';
import usuarios from './components/usuarios';
import parcelas from './components/parcelas';
import mantenimientos from './components/mantenimientos';
import main from './components/main';

export default [
    { path: '/', component: main},
    { path: '/contact', component: ContactPage },    
    { path: '/demo', component: DemoPage },
    { path: '/information', component: InfoPage},
    { path: '/app', component: main},
    { path: '/consultas', component: consultas},
    { path: '/consumos', component: consumo},
    { path: '/empleados', component: empleados},
    { path: '/equipos', component: equipos},
    { path: '/labores', component: labores},
    { path: '/miempresa', component: miempresa},
    { path: '/registrar', component: registrar},
    { path: '/servicios', component: servicios},
    { path: '/usuarios', component: usuarios},
    { path: '/parcelas', component: parcelas},
    { path: '/mantenimientos', component: mantenimientos},
    { path: '*', component: NotFoundPage },
  ];