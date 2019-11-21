<template>
    <div>
        <appMenu class="col-2 nav-links  bg-success justify-content-around" />       
        <router-view class="col-10">
        </router-view>
        <footermsg/>
    </div>    
</template>
<script>
import footermsg from './footermsg'
import appMenu from './appMenu'


export default {
    name: 'main',
    components: {
        footermsg,
        appMenu
    },

    data: function() {
        return{
            isShownRegistrar: false,
            isShownEquipos: false,
            isShownParcelas: false,
            isShownConsumo: true,
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

</style>