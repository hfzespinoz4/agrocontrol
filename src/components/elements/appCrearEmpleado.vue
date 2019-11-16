<template>
    <div>
        <h4 class="display-6">Crear Empleado</h4>
        <hr>
        <div>
            <label for="employee-name">Nombre: </label>
            <input type="text" name="employee-name">
            <p>
                <!-- TODO: rellenar comentario de lo que sea -->
            </p>
        </div>
        <div>
            <label for="employee-lastname">Apellido: </label>
            <input type="text" name="employee-lastname">
            <p>
                <!-- TODO: Rellenar con la validación del apellido -->
            </p>
        </div>
        <div>
            <label for="employee-id">DNI/NIE: </label>
            <input type="text" name="employee-id">
            <p>
                <!-- TODO: Rellenar validación del DNI -->
            </p>
        </div>
        <div>
            <label for="employee-rol">Puesto:</label>
            <input type="text" name="employee-rol">
            <p>
                <!-- TODO: Completar Validacion -->
            </p>
        </div>
        <div>
            <label for="employee-email">Email:</label>
            <input type="email" name="employee-email">
            <p>
                <!-- TODO:  Completar validación -->
            </p>
        </div>
            
        <button class="btn btn-primary">Crear Empleado</button>
        <!-- TODO: Agregar las alertas para guardar, eliminar, etc -->
        <br>
        <br>
    </div>
    
</template>
<script>
export default {
    name: 'appCrearEmpleado'
}
</script>
<style>

</style>