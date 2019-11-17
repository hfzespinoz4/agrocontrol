<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
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
import appMenu from '../elements/appMenu'
import appCrearLabor from '../elements/appCrearLabor'
import appRegistrosLabores from '../elements/appRegistrosLabores'
import footermsg from '../elements/footermsg'

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