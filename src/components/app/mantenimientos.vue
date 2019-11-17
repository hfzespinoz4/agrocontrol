<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
            <div class="col-10">
                <h2>Mantenimientos</h2>
                <br>
                <appCrearMantenimiento/>
                <br>
                <appRegistrosMantenimientos/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from '../elements/appMenu'
import appCrearMantenimiento from '../elements/appCrearMantenimiento'
import appRegistrosMantenimientos from '../elements/appRegistrosMantenimientos'
import footermsg from '../elements/footermsg'

export default {
    name: 'mantenimientos',
    components: {
        appMenu,
        appCrearMantenimiento,
        appRegistrosMantenimientos,
        footermsg
    }
}
</script>
<style>

</style>