<template>
    <div>
        <ul class="app-menu">
            <router-link @click="isShownRegistrar" tag="li" to="/app/registrar" class="my-3" exact><a>Registrar </a> </router-link>
            <router-link @click="isShownEquipos" tag="li" to="/app/equipos" class="my-3" exact><a>Equipos </a> </router-link>
            <router-link @click="isShownConsumo" tag="li" to="/app/consumos" class="my-3" exact><a>Consumo </a> </router-link>
            <router-link @click="isShownServicios" tag="li" to="/app/servicios" class="my-3" exact><a>Servicios </a> </router-link>
            <router-link @click="isShownLabores" tag="li" to="/app/labores" class="my-3" exact><a>Labores </a> </router-link>
            <router-link @click="isShownEmpleados" tag="li" to="/app/empleados" class="my-3" exact><a>Empleados </a> </router-link>
            <router-link @click="isShownUsuarios" tag="li" to="/app/usuarios" class="my-3" exact><a>Usuarios </a> </router-link>
            <router-link @click="isShownMiEmpresa" tag="li" to="/app/miempresa" class="my-3" exact><a>Mi Empresa </a> </router-link>
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
            isShownEquipos: false,
            isShownConsumo: false,
            isShownServicios: false,
            isShownLabores: false,
            isShownEmpleados: false,
            isShownUsuarios: false,
            isShownMiEmpresa: false
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