<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
            <div class="col-10">
                <h2>Servicios</h2>
                <br>
                <appCrearServicio/>
                <br>
                <appRegistrosServicios/>     
            </div>           
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from '../elements/appMenu'
import appCrearServicio from '../elements/appCrearServicio'
import appRegistrosServicios from '../elements/appRegistrosServicios'
import footermsg from '../elements/footermsg'

export default {
    name: 'servicios',
    components: {
        appMenu,
        appCrearServicio,
        appRegistrosServicios,
        footermsg
    }
}
</script>
<style>

</style>