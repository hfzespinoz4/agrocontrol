<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Labores</h2>
                <hr>
                <appCrearLabor/>
                <appRegistrosLabores/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import appCrearLabor from './appCrearLabor'
import appRegistrosLabores from './appRegistrosLabores'
import footermsg from './footermsg'

export default {
    name: 'labores',
    components: {
        appMenu,
        appCrearLabor,
        appRegistrosLabores,
        footermsg
    }
}
</script>
<style>

</style>