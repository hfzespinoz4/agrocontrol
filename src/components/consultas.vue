<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
            <div class="col-10">
                <h2>Consultas</h2>
                <br>
                <p>Seleccione la consulta que desea realizar presione mostrar.</p>
                <hr>
                <p>nim quisquam ducimus necessitatibus corrupti consequatur. Labore iste tenetur aut possimus?</p>   
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import footermsg from './footermsg'

export default {
    name: 'labores',
    components: {
        appMenu,
        footermsg
    }
}
</script>
<style>

</style>