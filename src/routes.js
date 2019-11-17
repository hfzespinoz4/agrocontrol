// Enlaces de navegación página principal
import HomePage from './components/Pages/HomePage.vue';
import ContactPage from './components/Pages/ContactPage.vue';
import DemoPage from './components/Pages/DemoPage.vue';
import InfoPage from './components/Pages/InfoPage.vue';
import NotFoundPage from './components/Pages/NotFoundPage.vue';

/* Enlaces de navegación aplicación */

import consultas from './components/app/consultas';
import consumo from './components/app/consumo';
import empleados from './components/app/empleados';
import equipos from './components/app/equipos';
import labores from './components/app/labores';
import miempresa from './components/app/miempresa';
import registrar from './components/app/registrar';
import servicios from './components/app/servicios';
import usuarios from './components/app/usuarios';
import parcelas from './components/app/parcelas';
import mantenimientos from './components/app/mantenimientos';
import main from './components/app/main';

export default [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },    
    { path: '/demo', component: DemoPage },
    { path: '/information', component: InfoPage},
    { path: '/app', component: main},
    { path: '/app/consultas', component: consultas},
    { path: '/app/consumos', component: consumo},
    { path: '/app/empleados', component: empleados},
    { path: '/app/equipos', component: equipos},
    { path: '/app/labores', component: labores},
    { path: '/app/miempresa', component: miempresa},
    { path: '/app/registrar', component: registrar},
    { path: '/app/servicios', component: servicios},
    { path: '/app/usuarios', component: usuarios},
    { path: '/app/parcelas', component: parcelas},
    { path: '/app/mantenimientos', component: mantenimientos},
    { path: '*', component: NotFoundPage },
  ];