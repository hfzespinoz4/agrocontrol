<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Consumos</h2>
                <br>
                <appCrearConsumo/>
                <br>
                <appRegistrosConsumos/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import appCrearConsumo from './appCrearConsumo'
import appRegistrosConsumos from './appRegistrosConsumos'
import footermsg from './footermsg'

export default {
    name: 'consumo',
    components: {
        appMenu,
        appCrearConsumo,
        appRegistrosConsumos,
        footermsg
    }
}
</script>
<style>

</style>