<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Equipos</h2>
                <br>
                <appCrearEquipo/>
                <br>
                <appRegistrosEquipos/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import appCrearEquipo from './appCrearEquipo'
import appRegistrosEquipos from './appRegistrosEquipos'
import footermsg from './footermsg'

export default {
    name: 'equipos',
    components: {
        appMenu,
        appCrearEquipo,
        appRegistrosEquipos,
        footermsg
    }
}
</script>
<style>

</style>