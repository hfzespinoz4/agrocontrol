<template>
    <div>
        <h4>Registro de Consumos por Labor Mecanizada</h4>
        <hr>
        <div>
            <section class="d-flex"> 
                <div class="col-sm-3">  
                    <label for="consumption-date">Fecha:</label>
                    <input class="form-control" type="date" required>
                </div>
                <div class="col-sm-7">
                    <label for="consumption-labor">Labor Realizada:</label>
                    <select class="form-control" name="consumption-labor" id="consumption-labor">
                        <option value="">Selecciona una Labor</option>
                    </select>
                </div>
                
                <div class="col-sm-2">
                    <label for="consumption-area">Area(ha):</label>
                    <input class="form-control" type="number"  id="consumption-area">
                </div> 
            </section>
            <section class="d-flex mt-3">
                <div class="col-sm-5 my-2">
                    <label for="consumption-machine">Maquinaria Utilizada:</label>
                    <select class="form-control" name="consumption-machine" id="consumption-machine">
                        <option value="">Selecciona la Maquinaria</option>
                        <!-- TODO: configurar que la maquinaria cargue desde el Combobox -->
                    </select>
                </div>
                <div class="col-sm-5 my-2">
                    <label for="consumption-operator">Operador:</label>
                    <select class="form-control" name="consumption-operador" id="consumption-operator">
                        <option value="">Selecciona un Operador</option>
                    </select>
                </div>
                <div class="col-sm-2 my-2">
                    <label for="consumption-operatorshour">Salario/Hora (€):</label>
                    <input class="form-control" type="number" id="consumption-operatorshour" required>
                </div>   
            </section>
            <br>
            <section class="mt-2">
                <h4>Cálculos de Rendimiento de Maquinaria</h4>
                <hr>
                <div class="d-flex"> 
                    <div class="col-sm-3">
                        <div>
                            <label for="consumption-shr">Horómetro Inicial:</label>
                            <input class="form-control" type="number" id="consumption-shr" required>
                        </div>
                        <div >
                            <label for="consumption-fhr">Horómetro Final:</label>
                            <input class="form-control" type="number" id="consumption-fhr" required> 
                        </div>
                        <div>
                            <label for="consumption-ehr">Horas Efectivas:</label>
                            <input class="form-control" type="number" id="consumption-ehr" required>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div>
                            <label for="consumption-fuelltprice">Precio Lt (€):</label>
                            <input class="form-control" type="number" id="consumption-fuelltprice" required>
                        </div>
                        <div>
                            <label for="consumption-fuelstart">Combustible Inicial (lt):</label>
                            <input class="form-control" type="number" id="consumption-fuelstart" required>
                        </div>
                        <div>
                            <label for="consumption-fuelend">Combustible Final (lt):</label>
                            <input class="form-control" type="number" id="consumption-fuelend" required>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div>
                            <label for="consumption-fuel">Consumo (Lts): </label>
                            <input class="form-control" type="number" id="consumption-fuel" required> 
                        </div>
                        <div>
                            <label for="consumption-ltphr">Consumo Lt/Hr:</label>
                            <input class="form-control" type="number" id="consumption-ltphr" required>
                        </div>
                        <div>
                            <label for="consumption-ltpha">Consumo Lt/Ha:</label>
                            <input class="form-control" type="number" id="consumption-ltpha" required>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div>
                            <label for="consumption-costltpha">Coste Litro/Ha (€):</label>
                            <input class="form-control" type="number" id="consumption-costltpha" required>
                        </div>
                        <div>
                            <label for="consumption-costltphr">Coste Litro/Hr (€):</label>
                            <input class="form-control" type="number" id="consumption-costltphr" required>
                        </div>                       
                        <div>
                            <label for="consumption-costmachinehr">Coste Hr/Máquina (€):</label>
                            <input class="form-control" type="number" id="consumption-costmachinehr" required>
                        </div>
                        <div>
                            <label for="consumption-costmachinerental">Total Hr/Máquina (€):</label>
                            <input class="form-control" type="number" id="consumption-costmachinerental" required>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-2">
                <h4>Aplicación de Insumos Agrícolas</h4>
                <hr>
                <div class="d-flex">
                    <div class="col-sm-5">
                        <label for="consumption-productname:">Producto:</label>
                        <input class="form-control" type="text" name="consumption-productname" id="consumption-productname" required>
                    </div>
                    <div class="col-sm-4">
                        <label for="consumption-productqty">Cantidad (Kg):</label>
                        <input class="form-control" type="number" name="consumption-productqty" id="consumption-productqty" required>
                    </div>
                    <div class="col-sm-3">
                        <label for="consumption-productunitcost">Coste/Kg (€):</label>
                        <input class="form-control" type="number" name="consumption-productcost" id="consumption-productcost" required>
                    </div>
                </div>                
            </section>                        
            <br>
            <section class="my-2"> 
                <h4>Costes Totales de la Labor</h4>
                <hr>
                <div class="d-flex" >
                    <div class="mx-3">
                        <label for="consumptiontotal-fuel">Coste Combustible (€):</label>
                        <input class="form-control" type="number" name="consumption-totalfuel" id="consumption-totalfuel">
                    </div>
                    <div class="mx-3">
                        <label for="consumptiontotal-machine">Coste Maquinaria (€):</label>
                        <input class="form-control" type="number" name="consumptiontotal-machine" id="consumptiontotal-machine">
                    </div>
                    <div class="mx-3">
                        <label for="consumptiontotal-product">Coste Producto (€):</label>
                        <input class="form-control" type="number" name="consumptiontotal-product" id="consumptiontotal-product">
                    </div>
                    <div class="mx-3">
                        <label for="consumptiontotal">Coste Total Labor (€):</label>
                        <input class="form-control" type="number" name="consumptiontotal" id="consumptiontotal">
                    </div>
                </div>
            </section>
            <br>
            <button class="btn btn-success">Registrar Consumo</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>