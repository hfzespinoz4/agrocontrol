<template>
    <div>
        <h4>Registro de Consumos por Labor Mecanizada</h4>
        <hr>
        <div>
            <div>
                <label for="consumption-date">Fecha:</label>
                <input type="date" required>
            </div>
            <div>
                <label for="consumption-labor">Labor Realizada:</label>
                <select name="consumption-labor" id="consumption-labor">
                    <option value="">Selecciona una Labor</option>
                </select>
            </div>
            <div>
                <label for="consumption-machine">Maquinaria Utilizada:</label>
                <select name="consumption-machine" id="consumption-machine">
                    <option value="">Selecciona la Maquinaria</option>
                    <!-- TODO: configurar que la maquinaria cargue desde el Combobox -->
                </select>
            </div>
            <div>
                <label for="consumption-operator">Operador:</label>
                <select name="consumption-operador" id="consumption-operator">
                    <option value="">Selecciona un Operador</option>
                </select>
            </div>
            <div>
                <label for="consumption-operatorshour">Salario por Hora (€):</label>
                <input type="number" id="consumption-operatorshour" required>
            </div>
            <div>
                <label for="consumption-area">Area(ha):</label>
                <input type="number"  id="consumption-area">
            </div>
            <div>
                <label for="consumption-shr">Horómetro Inicial:</label>
                <input type="number" id="consumption-shr" required>
            </div>
            <div>
                <label for="consumption-fhr">Horómetro Final:</label>
                <input type="number" id="consumption-fhr" required> 
            </div>
            <div>
                <label for="consumption-ehr">Horas Efectivas:</label>
                <input type="number" id="consumption-ehr" required>
            </div>
            <div>
                <label for="consumption-fuelstart">Combustible Inicial (lt):</label>
                <input type="number" id="consumption-fuelstart" required>
            </div>
            <div>
                <label for="consumption-fuelend">Combustible Final (lt):</label>
                <input type="number" id="consumption-fuelend" required>
            </div>
            <div>
                <label for="consumption-fuel">Consumo de Combustible (lt): </label>
                <input type="number" id="consumption-fuel" required> 
            </div>
            <div>
                <label for="consumption-fuelltprice">Precio Lt (€):</label>
                <input type="number" id="consumption-fuelltprice" required>
            </div>
            <div>
                <label for="consumption-ltphr">Consumo Lt/Hr:</label>
                <input type="number" id="consumption-ltphr" required>
            </div>
            <div>
                <label for="consumption-ltpha">Consumo Lt/Ha:</label>
                <input type="number" id="consumption-ltpha" required>
            </div>
            <div>
                <label for="consumption-costltpha">Coste Litro/Ha (€):</label>
                <input type="number" id="consumption-costltpha" required>
            </div>
            <div>
                <label for="consumption-costltphr">Coste Litro/Hr (€):</label>
                <input type="number" id="consumption-costltphr" required>
            </div>
            <div>
                <label for="consumption-costmachinehr">Coste Hr/Máquina (€):</label>
                <input type="number" id="consumption-costmachinehr" required>
            </div>
            <div>
                <label for="consumption-costmachinerental">Total Hr/Máquina (€):</label>
                <input type="number" id="consumption-costmachinerental" required>
            </div>
            <div class="d-flex">
                <p>¿Se han aplicado insumos?</p>
                <div>
                    <input type="radio" id="consumption-productappliedyes" name="product-applied" required>
                    <label for="consumption-productappliedyes">Si</label>
                </div>
                <div>
                    <input type="radio" id="consumption-productappliedno" name="product-applied" required>
                    <label for="consumption-productappliedno">No</label>
                </div>
            </div>
            <div>
                <label for="consumption-productname:">Producto:</label>
                <input type="text" name="consumption-productname" id="consumption-productname" required>
            </div>
            <div>
                <label for="consumption-productqty">Cantidad (Kg):</label>
                <input type="number" name="consumption-productqty" id="consumption-productqty" required>
            </div>
            <div>
                <label for="consumption-productunitcost">Coste/Kg (€):</label>
                <input type="number" name="consumption-productcost" id="consumption-productcost" required>
            </div>
            <div>
                <div>
                    <label for="consumptiontotal-fuel">Coste Combustible (€):</label>
                    <input type="number" name="consumption-totalfuel" id="consumption-totalfuel">
                </div>
                <div>
                    <label for="consumptiontotal-machine">Coste Maquinaria (€):</label>
                    <input type="number" name="consumptiontotal-machine" id="consumptiontotal-machine">
                </div>
                <div>
                    <label for="consumptiontotal-product">Coste Producto (€):</label>
                    <input type="number" name="consumptiontotal-product" id="consumptiontotal-product">
                </div>
                <div>
                    <label for="consumptiontotal">Coste Total Labor (€):</label>
                    <input type="number" name="consumptiontotal" id="consumptiontotal">
                </div>
            </div>
            <button class="btn btn-primary">Registrar Consumo</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>