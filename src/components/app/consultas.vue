<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-3"/>
            <div class="col-9">
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
import appMenu from '../elements/appMenu'
import footermsg from '../elements/footermsg'

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