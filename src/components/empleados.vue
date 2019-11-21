<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Empleados</h2>
                <br>
                <appCrearEmpleado/>
                <br>
                <appRegistrosEmpleados/>
                
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import appCrearEmpleado from './appCrearEmpleado'
import appRegistrosEmpleados from './appRegistrosEmpleados'
import footermsg from './footermsg'

export default {
    name: 'empleados',
    components: {
        appMenu,
        appCrearEmpleado,
        appRegistrosEmpleados,
        footermsg
    }
}
</script>
<style>

</style>