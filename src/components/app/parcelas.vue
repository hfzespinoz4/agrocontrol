<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
            <div class="col-10">
                <h2>Parcelas</h2>
                <br>
                <appCrearParcelas/>
                <br>
                <appRegistrosParcelas/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from '../elements/appMenu'
import appCrearParcelas from '../elements/appCrearParcelas'
import appRegistrosParcelas from '../elements/appRegistrosParcelas'
import footermsg from '../elements/footermsg'

export default {
    name: 'registrar',
    components: {
        appMenu,
        appCrearParcelas,
        appRegistrosParcelas,   
        footermsg
    }
}
</script>
<style>

</style>