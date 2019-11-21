<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
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
import appMenu from './appMenu'
import appCrearParcelas from './appCrearParcelas'
import appRegistrosParcelas from './appRegistrosParcelas'
import footermsg from './footermsg'

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