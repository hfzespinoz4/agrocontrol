<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
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
import appMenu from './appMenu'
import appCrearMantenimiento from './appCrearMantenimiento'
import appRegistrosMantenimientos from './appRegistrosMantenimientos'
import footermsg from './footermsg'

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