<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
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
import appMenu from '../elements/appMenu'
import appCrearEquipo from '../elements/appCrearEquipo'
import appRegistrosEquipos from '../elements/appRegistrosEquipos'
import footermsg from '../elements/footermsg'

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