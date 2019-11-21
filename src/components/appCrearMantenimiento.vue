<template>
    <div>
        <h4>Registrar Mantenimiento a Maquinaria</h4>
        <hr>
        <section class="d-flex justify-content-between">
            <h2></h2>
            <div class="col-sm-3">
                <label for="maintenance-date">Fecha:</label>
                <input class="form-control" type="date" id="maintenance-date" v-model="newDate">
            </div>
            <div class="col-sm-7">
                <label for="maintenance-machine">Máquinaria:</label>
                <input class="form-control" name="maintenance-machine" id="maintenance-machine" v-model="newMachine">
            </div>
            <div class="col-sm-2">
                <label for="maintenance-hour">Horómetro:</label>
                <input class="form-control" type="number" id="maintenance-hour" name="maintenance-hour" v-model="newHorometer">
            </div>
        </section>
        <br>
        <section class="col-sm-12 mt-2">
            <h2></h2>
             <div class="d-flex justify-content-between align-content-center"> 
                <label  for="maintenance-service">Servicio Realizado:</label>
                <input class="form-control" name="maintenance-service" id="maintenance-service" v-model="newService">
            </div>
            <div class="d-block">
                <label for="maintenance-servdescription">Descripción del Servicio:</label>
                <textarea class="form-control" name="maintenance-servdescription" id="maintenance-servdescription" cols="50" rows="3" v-model="newDescription"></textarea>
            </div>
        </section>
        <br>
        <section>
            <h2></h2>
            <div class="d-flex">   
                <div class="col-sm-5">
                    <label for="maintenance-provider">Proveedor:</label>
                    <input class="form-control" type="text" id="maintenance-provider" name="maintenance-provider" v-model="newSupplier"> 
                </div>
                <div class="col-sm-4">
                    <label for="maintenance-billnumber">No. Factura:</label>
                    <input class="form-control" type="text" id="maintenance-billnumber" v-model="newBill">
                </div>
                <div class="col-sm-3"> 
                    <label for="maintenance-totalamount">Total (€):</label>
                    <input class="form-control" type="number" id="maintenance-totalamount" name="maintenance-totalamount" v-model="newAmount">
                </div>
            </div>          
        </section>
        <br>
        <div class="col-sm-12">
            <button @click="createService" class="btn btn-success">Registrar Mantenimiento</button>
            <br>
        </div>
        <br>
        <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <table class="table table-stripped table-bordered"> 
                        <thead>
                            <th>Fecha/th>
                            <th>Maquinaria</th>
                            <th>Horómetro</th>
                            <th>Servicio Realizado</th>
                            <th>Proveedor</th>
                            <th>Coste Total(€)</th>
                        </thead>
                        <tbody>
                            <tr v-for="(service, index) in services"
                                :key="index"
                                :service="service"
                                @remove="removeService">
                                <td class="col-sm-1">{{service.date}}</td>
                                <td class="col-sm-2">{{service.machine}}</td>
                                <td class="col-sm-2">{{service.horometer}}</td>
                                <td class="col-sm-2">{{service.service}}</td>
                                <td class="col-sm-3">{{service.supplier}}</td>
                                <td class="col-sm-2">{{service.amount}}</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>          
    </div>
</template>
<script>
export default {
    name: 'appCrearMantenimiento',
    data: () => {
        return{
            newDate: "",
            newMachine: "",
            newHorometer: "",
            newService: "",
            newDescription:"",
            newSupplier:"",
            newBill:"",
            newAmount:"",
            services:[
                {
                    date: "20/10/2019",
                    machine: "Tractor JD 6155J",
                    horometer: "1230",
                    service: "Cambio de Aceite",
                    description:"Cambio de Aceite de motor y transmisión",
                    supplier:"Agropartes, S.L",
                    bill:"8976",
                    amount:"1234,56"
                },
                 {
                    date: "20/10/2019",
                    machine: "Tractor JD 6403",
                    horometer: "6780",
                    service: "Cambio de Aceite",
                    description:"Cambio de Aceite de motor y transmisión",
                    supplier:"Agropartes, S.L",
                    bill:"8976",
                    amount:"1234,56"
                }
            ]
        };
    },

    methods: {
        createService: function(){
            this.services.push({
                date: this.newDate,
                machine: this.newMachine,
                horometer: this.newHorometer,
                service: this.newService,
                description:this.newDescription,
                supplier:this.newSupplier,
                bill:this.newBill,
                amount:this.newAmount
            });
            alert("Mantenimiento Registrado")
            this.newDate = "",
            this.newMachine= "",
            this.newHorometer= "",
            this.newService = "",
            this.newDescription = "",
            this.newSupplier = "",
            this.newBill = "",
            this.newAmount = ""
        },

        removeService: function(service){
            alert("El servicio " + service + " será eliminado")
            this.services = this.services.filter (x => x.id !==service);
        }
    }
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