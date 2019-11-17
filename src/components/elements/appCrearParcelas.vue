<template>
    <div>
        <h4>Crear Parcelas</h4>
        <hr>
        <div>
            <div>
                <label for="plot-creationdate">Fecha:</label>
                <input type="date" required>
            </div>
            <div>
                <label for="plot-name">Nombre de Parcela:</label>
                <input type="text" required>
            </div>
            <div>
                <label for="plot-area">Área (ha):</label>
                <input type="number" required>
            </div>
            <div>
                <label for="plot-topograhy">Topografía:</label>
                <input type="text" required>
            </div>
            <div>
                <label for="plot-responsable">Responsable:</label>
                <input type="text" required>
            </div>
            <br>
            <button class="btn btn-primary">Crear Parcela</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'appCrearParcelas'
}
</script>
<style>

</style>