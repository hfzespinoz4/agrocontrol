<template>
    <div>
        <h4>Crear Equipo</h4>
        <p>Registrar un nuevo equipo o maquinaria</p>
        <hr>
        <div>
            <div>
                <label for="machine-type">Seleccione la categoría a registrar: </label>
                <select name="machine-type" id="machine-type">
                    <option value="maquinaria">Maquinaria</option>
                    <option value="equipo">Equipo</option>
                    <option value="implemento">Implemento</option>
                </select>
            </div>
            <div>
                <label for="machine-name">Equipo: </label>
                <input type="text" id="machine-name">
            </div>
            <div>
                <label for="machine-mark">Marca:</label>
                <input type="text" id="machine-mark">
            </div>
            <div>
                <label for="machine-model">Modelo: </label>
                <input type="text" id="machine-model">
            </div>
            <div>
                <label for="machine-year">Año:</label>
                <input type="number" id="machine-year">
            </div>
            <div>
                <label for="machine-serialnumber">Numero de Serie:</label>
                <input type="text" id="machine-serialnumber">
            </div>
            <div>
                <label for="machine-motor">Motor:</label>
                <input type="text" id="machine-motor">
            </div>
            <div>
                <label for="machine-code">Código:</label>
                <input type="text" id="machine-code">
            </div>
            <div>
                <div>
                    <input type="radio" id="propio" name="owner" value="propio">
                    <label for="propio"> Maquina Propia</label>
                </div>
                <div>
                    <input type="radio" id="rentado" name="owner" value="rentado">
                    <label for="rentado">Maquina Rentada</label>
                </div>
            </div>
            <div>
                <label for="machine-owner">Propietario:</label>
                <input type="text" id="machine-owner">
            </div>
            <div>
                <label for="machine-bill">Factura No:</label>
                <input type="text" id="machine-bill">
            </div>
            <div>
                <label for="machine-price">Precio Total (€):</label>
                <input type="number" id="machine-price">
            </div>
            <div>
                <label for="machine-hours">Horómetro:</label>
                <input type="number" id="machine-hours">
            </div>
            <div>
                <label for="machine-hoursprice">Precio Hora Maquina (€):</label>
                <input type="number" id="machine-hoursprice">
            </div>            
        </div>
        <br>
        <button class="btn btn-primary">Registrar</button>

    </div>
</template>
<script>
export default {
    name: 'appCrearEquipo'
    
}
</script>
<style>

</style>