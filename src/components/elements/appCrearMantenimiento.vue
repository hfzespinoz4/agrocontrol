<template>
    <div>
        <h4>Registrar Mantenimiento a Maquinaria</h4>
        <hr>
        <div>
            <div>
                <label for="maintenance-date">Fecha:</label>
                <input type="date" id="maintenance-date" required>
            </div>
            <div>
                <label for="maintenance-machine">Seleccione la máquinaria:</label>
                <select name="maintenance-machine" id="maintenance-machine">
                    <option value=""></option>
                    <!-- TODO: Cargar los elementos desde firebase -->
                </select>
            </div>
            <div>
                <label for="maintenance-hour">Horómetro:</label>
                <input type="number" id="maintenance-hour" name="maintenance-hour" required>
            </div>
            <div>
                <label for="maintenance-service">Servicio Realizado:</label>
                <select name="maintenance-service" id="maintenance-service">
                    <option value="">Selecciona un servicio</option>
                </select>
            </div>
            <div class="d-block">
                <label for="maintenance-servdescription">Descripción del Servicio:</label>
                <textarea name="maintenance-servdescription" id="maintenance-servdescription" cols="50" rows="5"></textarea>
            </div>
            
            <div>
                <label for="maintenance-provider">Proveedor:</label>
                <input type="text" id="maintenance-provider" name="maintenance-provider" required> 
            </div>
            <div>
                <label for="maintenance-billnumber">No. Factura:</label>
                <input type="text" id="maintenance-billnumber" required>
            </div>
            <div>
                <label for="maintenance-totalamount">Total (€):</label>
                <input type="number" id="maintenance-totalamount" name="maintenance-totalamount" required>
            </div>
            <button class="btn btn-primary">Registrar Mantenimiento</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'appCrearMantenimiento'
}
</script>
<style>

</style>