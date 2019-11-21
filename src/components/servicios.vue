<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Servicios</h2>
                <br>
                <appRegistrosServicios/>     
            </div>           
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
//import appCrearServicio from './appCrearServicio'
import appRegistrosServicios from './appRegistrosServicios'
import footermsg from './footermsg'

export default {
    name: 'servicios',
    components: {
        appMenu,
        //appCrearServicio,
        appRegistrosServicios,
        footermsg
    }
}
</script>
<style>

</style>