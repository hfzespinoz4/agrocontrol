<template>
    <div>
        <h4>Registrar Mantenimiento a Maquinaria</h4>
        <hr>
        <section class="d-flex justify-content-between">
            <h2></h2>
            <div class="col-sm-3">
                <label for="maintenance-date">Fecha:</label>
                <input class="form-control" type="date" id="maintenance-date" required>
            </div>
            <div class="col-sm-7">
                <label for="maintenance-machine">Seleccione la máquinaria:</label>
                <select class="form-control" name="maintenance-machine" id="maintenance-machine">
                    <option value="">Selecione un elemento</option>
                    <!-- TODO: Cargar los elementos desde firebase -->
                </select>
            </div>
            <div class="col-sm-2">
                <label for="maintenance-hour">Horómetro:</label>
                <input class="form-control" type="number" id="maintenance-hour" name="maintenance-hour" required>
            </div>
        </section>
        <br>
        <section class="col-sm-12 mt-2">
            <h2></h2>
             <div class="d-flex justify-content-between align-content-center"> 
                <label  for="maintenance-service">Servicio Realizado:</label>
                <select class="form-control" name="maintenance-service" id="maintenance-service">
                    <option value="">Selecciona un servicio</option>
                </select>
            </div>
            <div class="d-block">
                <label for="maintenance-servdescription">Descripción del Servicio:</label>
                <textarea class="form-control" name="maintenance-servdescription" id="maintenance-servdescription" cols="50" rows="3"></textarea>
            </div>
        </section>
        <br>
        <section>
            <h2></h2>
            <div class="d-flex">   
                <div class="col-sm-5">
                    <label for="maintenance-provider">Proveedor:</label>
                    <input class="form-control" type="text" id="maintenance-provider" name="maintenance-provider" required> 
                </div>
                <div class="col-sm-4">
                    <label for="maintenance-billnumber">No. Factura:</label>
                    <input class="form-control" type="text" id="maintenance-billnumber" required>
                </div>
                <div class="col-sm-3"> 
                    <label for="maintenance-totalamount">Total (€):</label>
                    <input class="form-control" type="number" id="maintenance-totalamount" name="maintenance-totalamount" required>
                </div>
            </div>          
        </section>
        <br>
        <div class="col-sm-12">
            <button class="btn btn-success">Registrar Mantenimiento</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'appCrearMantenimiento'
}
</script>
<style>
/*Deshabilitar los botones de input number */
input[type="number"]::-webkit-outer-spin-button, 
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>