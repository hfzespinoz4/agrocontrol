<template>
    <div>
        <h4 class="display-6">Crear Empleado</h4>
        <hr>
        <section>
            <h2></h2>
            <span class="col-sm-12 d-flex justify-content-between">
                <div class="col-sm-6">
                    <label for="employee-date">Fecha de Ingreso:</label>
                    <input class="form-control" type="date" required>
                </div>
                <div class="col-sm-6">
                    <label for="employee-id">DNI/NIE: </label>
                    <input class="form-control" type="text" id="employee-id" required>
                </div>
            </span>
        </section>
        <section>
            <h2></h2>
            <span class="col-sm-12 d-flex justify-content-between">
                <div class="col-sm-6">
                    <label for="employee-name">Nombre: </label>
                    <input class="form-control" type="text" id="employee-name" required>
                    <p> <!-- TODO: rellenar validación del nombre -->  </p>
                </div>
                <div class="col-sm-6">
                    <label for="employee-lastname">Apellido: </label>
                    <input class="form-control" type="text" id="employee-lastname" required>
                    <p> <!-- TODO: Rellenar con la validación del apellido --> </p>
                </div>
            </span>
        </section>
        <section>
            <h2></h2>
            <span class="col-sm-12 d-flex justify-content-between">
                <div class="col-sm-6">
                    <label for="employee-rol">Puesto:</label>
                    <input class="form-control" type="text" id="employee-rol" required>
                    <p> <!-- TODO: Completar Validacion --> </p>
                </div>
                <div class="col-sm-6">
                    <label for="employee-email">Email:</label>
                    <input class="form-control" type="email" id="employee-email" required>
                    <p> <!-- TODO:  Completar validación --> </p>
                </div>
            </span>         
        </section>
        <section>
            <h2></h2>
            <span class="col-sm-12 d-flex justify-content-between">
                <div class="col-sm-3">
                    <label for="employee-annualsalary">Salario Anual (€): </label>
                    <input class="form-control" type="number" id="employee-annualsalary" required>
                </div>
                <div class="col-sm-3">
                    <label for="employee-monthlysalary">Salario Mensual (€):</label>
                    <input class="form-control" type="number" id="employee-monthlysalary">
                </div>
                <div class="col-sm-3">
                    <label for="employee-dailysalary">Salario por Día (€):</label>
                    <input class="form-control" type="number" id="employeee-salaryperday">
                </div>
                <div class="col-sm-3">
                    <label for="employee-">Salario por Hora (€):</label>
                    <input class="form-control" type="number" id="employee-salaryperday">
                </div>
            </span>
        </section>
        <br>
        <div class="col-sm-12">
            <button class="btn btn-success">Crear Empleado</button>
            <!-- TODO: Agregar las alertas para guardar, eliminar, etc -->
        </div>
    </div>   
</template>
<script>
export default {
    name: 'appCrearEmpleado'
}
</script>
<style>

</style>