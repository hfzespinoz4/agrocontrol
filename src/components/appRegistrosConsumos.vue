<template>
    <div>
        <h4>Histórico de Consumos</h4>
        <hr>
        <div>
            <!-- TODO: Aquí va la tabla de vue  -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'appRegistrosConsumos'
    
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