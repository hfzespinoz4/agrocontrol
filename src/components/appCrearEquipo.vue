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
                    <input class="form-control" name="machine-type" id="machine-type" v-model="newMachineType">
                </div>
                <div class="col-sm-4">
                    <label for="machine-name">Equipo: </label>
                    <input class="form-control" type="text" id="machine-name" v-model="newMachineName">
                </div>
                <div class="col-sm-4">
                    <label for="machine-hours">Horómetro:</label>
                    <input class="form-control" type="number" id="machine-hours" v-model="newMachineHr">
                </div>
            </span>
        </section>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-4">
                    <label for="machine-brand">Marca:</label>
                    <input class="form-control" type="text" id="machine-brand" v-model="newMachineBrand">
                </div>
                <div class="col-sm-4">
                    <label for="machine-model">Modelo: </label>
                    <input class="form-control" type="text" id="machine-model" v-model="newMachineModel">
                </div>
                <div class="col-sm-4">
                    <label for="machine-serialnumber">Numero de Serie:</label>
                    <input class="form-control" type="text" id="machine-serialnumber" v-model="newMachineSerialNumber">
                </div>
            </span>
        </section>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-4">
                    <label for="machine-year">Año:</label>
                    <input class="form-control" type="number" id="machine-year" v-model="newMachineYear">
                </div>
                
                <div class="col-sm-4">
                    <label for="machine-motor">Motor:</label>
                    <input class="form-control" type="text" id="machine-motor" v-model="newMachineMotor">
                </div>
                <div class="col-sm-4">
                    <label for="machine-code">Código:</label>
                    <input class="form-control" type="text" id="machine-code" v-model="newMachineCode">
                </div>
            </span>
        </section>
        <br>
        <section>
            <h2></h2>
            <span class="d-flex justify-content-between">
                <div class="col-sm-4">
                    <label for="machine-owner">Propietario:</label>
                    <input class="form-control" type="text" id="machine-owner" v-model="newMachineOwner">
                </div>
                <div class="col-sm-4">
                    <label for="machine-bill">Factura No:</label>
                    <input class="form-control" type="text" id="machine-bill" v-model="newMachineBill">
                </div>
                <div class="col-sm-4">
                    <label for="machine-price">Precio Total (€):</label>
                    <input class="form-control" type="number" id="machine-price" v-model="newMachinePrice">
                </div>
            </span>
        </section>
        <br>
        <div class="col-sm-12">
            <br>
            <button @click="createMachine" class="btn btn-success">Registrar</button>  
            <br>    
        </div>
        <br>
        <section>
            <h4>Maquinaria y Equipo</h4>
            <p>Catálogo de la maquinaria agrícola, implementos y equipos registrados.</p>
            <hr>
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <table class="table table-stripped table-bordered"> 
                        <thead>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Numero Serie</th>
                            <th>Motor</th>
                            <th>Propietario</th>
                        </thead>
                        <tbody>
                            <tr v-for="(machine, index) in machines"
                                :key="index"
                                :machine="machine"
                                @remove="removeMachine">
                                <td class="col-sm-2">{{machine.machineName}}</td>
                                <td class="col-sm-2">{{machine.machineBrand}}</td>
                                <td class="col-sm-2">{{machine.machineModel}}</td>
                                <td class="col-sm-2">{{machine.machineSerialNumber}}</td>
                                <td class="col-sm-2">{{machine.machineMotor}}</td>
                                <td class="col-sm-2">{{machine.machineOwner}}</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
export default {
    name: 'appCrearEquipo',
    data: () => {
        return {
            newMachineType: "",
            newMachineName: "",
            newMachineHr: "",
            newMachineBrand: "",
            newMachineModel:"",
            newMachineSerialNumber:"",
            newMachineYear: "",
            newMachineMotor: "",
            newMachineCode: "",
            newMachineOwner:"",
            newMachineBill:"",
            newMachinePrice:"",
            machines: [
                {
                    Type: "",
                    Name: "",
                    Hr: "",
                    Brand: "",
                    Model:"",
                    SerialNumber:"",
                    Year: "",
                    Motor: "",
                    Code: "",
                    Owner:"",
                    Bill:"",
                    Price:"",
                }
            ]
        };
    },

    methods: {
        createMachine: function() {
            this.machines.push({
                Type: this.newMachineType,
                Name: this.newMachineName,
                Hr: this.newMachineHr,
                Brand: this.newMachineBrand,
                Model:this.newMachineModel,
                SerialNumber:this.newMachineSerialNumber,
                Year: this.newMachineYear,
                Motor: this.newMachineMotor,
                Code: this.newMachineCode,
                Owner:this.newMachineOwner,
                Bill:this.newMachineBill,
                Price:this.newMachinePrice,
            });
            
            alert("Maquinaria o Equipo Registrado");
            this.newMachineType = "",
            this.newMachineName = "" ,
            this.newMachineHr = "",
            this.newMachineBrand = "",
            this.newMachineModel = "",
            this.newMachineSerialNumber = "",
            this.newMachineYear = "",
            this.newMachineMotor = "",
            this.newMachineCode = "",
            this.newMachineOwner = "",
            this.newMachineBill = "",
            this.newMachinePrice = ""
        },

        removeMachine: function(machineName){
            alert("El equipo " + machineName + " será eliminado")
            this.machines = this.machines.filter (x => x.id !==machineName);
        }
    }
    
}
</script>
<style>

</style>