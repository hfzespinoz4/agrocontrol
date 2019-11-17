<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2"/>
            <div class="col-10">
                <h2>Empleados</h2>
                <hr>
                <appCrearEmpleado/>
                <appRegistrosEmpleados/>
                
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from '../elements/appMenu'
import appCrearEmpleado from '../elements/appCrearEmpleado'
import appRegistrosEmpleados from '../elements/appRegistrosEmpleados'
import footermsg from '../elements/footermsg'

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