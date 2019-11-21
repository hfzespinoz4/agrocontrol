<template>
    <div>
        <h4>Crear Equipo</h4>
        <p>Registrar un nuevo equipo o maquinaria</p>
        <hr>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-4">
                    <label for="machine-type">Seleccione la categoría a registrar: </label>
                    <select class="form-control" name="machine-type" id="machine-type">
                        <option value="maquinaria">Maquinaria</option>
                        <option value="equipo">Equipo</option>
                        <option value="implemento">Implemento</option>
                    </select>
                </div>
                <div class="col-sm-4">
                    <label for="machine-name">Equipo: </label>
                    <input class="form-control" type="text" id="machine-name">
                </div>
                <div class="col-sm-4">
                    <label for="machine-hours">Horómetro:</label>
                    <input class="form-control" type="number" id="machine-hours">
                </div>
            </span>
        </section>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-4">
                    <label for="machine-mark">Marca:</label>
                    <input class="form-control" type="text" id="machine-mark">
                </div>
                <div class="col-sm-4">
                    <label for="machine-model">Modelo: </label>
                    <input class="form-control" type="text" id="machine-model">
                </div>
                <div class="col-sm-4">
                    <label for="machine-serialnumber">Numero de Serie:</label>
                    <input class="form-control" type="text" id="machine-serialnumber">
                </div>
            </span>
        </section>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-4">
                    <label for="machine-year">Año:</label>
                    <input class="form-control" type="number" id="machine-year">
                </div>
                
                <div class="col-sm-4">
                    <label for="machine-motor">Motor:</label>
                    <input class="form-control" type="text" id="machine-motor">
                </div>
                <div class="col-sm-4">
                    <label for="machine-code">Código:</label>
                    <input class="form-control" type="text" id="machine-code">
                </div>
            </span>
        </section>
        <br>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-3">
                    <label for="machine-owner">Propietario:</label>
                    <input class="form-control" type="text" id="machine-owner">
                </div>
                <div class="col-sm-3">
                    <label for="machine-bill">Factura No:</label>
                    <input class="form-control" type="text" id="machine-bill">
                </div>
                <div class="col-sm-3">
                    <label for="machine-price">Precio Total (€):</label>
                    <input class="form-control" type="number" id="machine-price">
                </div>
                <div class="col-sm-3">
                    <label for="machine-hoursprice">Precio Hora Maquina (€):</label>
                    <input class="form-control" type="number" id="machine-hoursprice">
                </div> 
            </span>
        </section>
        <br>
        <div class="col-sm-12">
            <br>
            <button class="btn btn-success">Registrar</button>      
        </div>
    </div>
</template>
<script>
export default {
    name: 'appCrearEquipo'
    
}
</script>
<style>

</style>