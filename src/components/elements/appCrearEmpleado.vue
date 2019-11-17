<template>
    <div>
        <h4 class="display-6">Crear Empleado</h4>
        <hr>
        <div>
            <label for="employee-date">Fecha de Ingreso:</label>
            <input type="date">
        </div>
        <div>
            <label for="employee-name">Nombre: </label>
            <input type="text" id="employee-name">
            <p>
                <!-- TODO: rellenar validación del nombre -->
            </p>
        </div>
        <div>
            <label for="employee-lastname">Apellido: </label>
            <input type="text" id="employee-lastname">
            <p>
                <!-- TODO: Rellenar con la validación del apellido -->
            </p>
        </div>
        <div>
            <label for="employee-id">DNI/NIE: </label>
            <input type="text" id="employee-id">
            <p>
                <!-- TODO: Rellenar validación del DNI -->
            </p>
        </div>
        <div>
            <label for="employee-rol">Puesto:</label>
            <input type="text" id="employee-rol">
            <p>
                <!-- TODO: Completar Validacion -->
            </p>
        </div>
        <div>
            <label for="employee-email">Email:</label>
            <input type="email" id="employee-email">
            <p>
                <!-- TODO:  Completar validación -->
            </p>
        </div>
        <div>
            <label for="employee-annualsalary">Salario Anual: </label>
            <input type="number" id="employee-annualsalary" required>
        </div>
        <div>
            <label for="employee-monthlysalary">Salario Mensual:</label>
            <input type="number" id="employee-monthlysalary">
        </div>
        <div>
            <label for="employee-dailysalary">Salario por Día:</label>
            <input type="number" id="employeee-salaryperday">
        </div>
        <div>
            <label for="employee-">Salario por Hora:</label>
            <input type="number" id="employee-salaryperday">
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