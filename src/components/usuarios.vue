<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Usuarios</h2>
                <hr>
                <appCrearUsuario/>
                <br>
                <appRegistrosUsuarios/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import appCrearUsuario from  './appCrearUsuario'
import appRegistrosUsuarios from './appRegistrosUsuarios'
import footermsg from './footermsg'

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