<template>
    <div>
        <ul class="app-menu">
            <!-- <router-link @click="isShownRegistrar" tag="li" to="/app/registrar" class="my-3" exact><a>Registrar </a> </router-link> -->
            <!-- <router-link @click="isShownConsultas" tag="li" to="/app/consultas" class="my-3" exact><a>Consultas </a> </router-link> -->
            <router-link @click="isShownConsumo" tag="li" to="/consumos" class="my-3" exact><a>Consumos </a> </router-link>
            <router-link @click="isShownMantenimientos" tag="li" to="/mantenimientos" class="my-3" exact><a>Mantenimientos </a> </router-link>
            <li><br></li>            
            <!-- <router-link @click="isShownEmpleados" tag="li" to="/empleados" class="my-3" exact><a>Empleados </a> </router-link> -->
            <router-link @click="isShownEquipos" tag="li" to="/equipos" class="my-3" exact><a>Equipos </a> </router-link>
            <router-link @click="isShownLabores" tag="li" to="/labores" class="my-3" exact><a>Labores </a> </router-link>
            <router-link @click="isShownParcelas" tag="li" to="/parcelas" class="my-3" exact><a>Parcelas </a> </router-link>
            <router-link @click="isShownServicios" tag="li" to="/servicios" class="my-3" exact><a>Servicios </a> </router-link>
            <router-link @click="isShownUsuarios" tag="li" to="/usuarios" class="my-3" exact><a>Usuarios </a> </router-link>
            <li><br></li>
            <router-link @click="isShownMiEmpresa" tag="li" to="/miempresa" class="my-3" exact><a>Información </a> </router-link>
        </ul>
        <router-view>

        </router-view>
  </div>
</template>
<script>
export default {
    name: 'appMenu',

    data: function() {
        return{
            isShownRegistrar: true,
            isShownConsultas: false,
            isShownEquipos: false,
            isShownConsumo: false,
            isShownServicios: false,
            isShownLabores: false,
            isShownEmpleados: false,
            isShownUsuarios: false,
            isShownMiEmpresa: false,
            isShownParcelas: false,
            isShownMantenimientos: false
        };
    },

}
</script>
<style>

    .app-menu {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content:space-around
    }
</style>