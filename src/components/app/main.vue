<template>
    <div>
        <appMenu class="col-2" />       
        <rotuer-view class="col-10">
        </rotuer-view>
        <footermsg/>
    </div>    
</template>
<script>
import footermsg from '../elements/footermsg'
import appMenu from '../elements/appMenu'


export default {
    name: 'main',
    components: {
        footermsg,
        appMenu
    },

    data: function() {
        return{
            isShownRegistrar: true,
            isShownEquipos: false,
            isShownParcelas: false,
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

</style>