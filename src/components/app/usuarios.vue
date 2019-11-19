<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
            <div class="col-10">
                <h2>Usuarios</h2>
                <hr>
                <appCrearUsuario/>
                <appRegistrosUsuarios/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from '../elements/appMenu'
import appCrearUsuario from  '../elements/appCrearUsuario'
import appRegistrosUsuarios from '../elements/appRegistrosUsuarios'
import footermsg from '../elements/footermsg'

export default {
    name: 'usuarios',
    components: {
        appMenu,
        appCrearUsuario,
        appRegistrosUsuarios,
        footermsg
    }
}
</script>
<style>

</style>