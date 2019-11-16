<template>
    <div>
        <appMenu/>       
        <rotuer-view>
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