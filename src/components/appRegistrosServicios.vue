<template>
    <div>
        <div>
        <h4>Crear un Servicio </h4>
        <p> Registro de los servicios prestados a la maquinaria agrícola </p>
        <hr>
        <div>
            <label for="service-name">Nombre del Servicio: </label>
            <input type="text" name="service-name" class="form-control" v-model="newServiceName">
            <p>
                <!-- TODO: Aqui la validación dle nombre del servicio  -->
            </p>
        </div>
        <div>
            <label for="service-description">Descripción del Servicio</label>
            <textarea type="text" name="service-description" class="form-control" v-model="newServiceDescription"> Descripción completa del servicio </textarea>
        </div>
        <br>
        <button class="btn btn-success" @click="createService">Crear Servicio</button>
        <br>
    </div>
    <br>
    <div>
        <h4>Catálogo de Servicios</h4>
            <hr>
            <div class="card">
                <div class="card-header"></div>
                    <div class="card-body">
                        <table class="table table-stripped table-bordered">
                            <thead>
                                <th class="col-sm-5">Servicio</th>
                                <th class="col-sm-6">Descripción del Servicio</th>
                               
                            </thead>
                            <tbody>
                                <tr v-for="(service, index) in services"
                                    :key="index"
                                    :service="service"
                                    @remove="removeService">

                                    <td class="col-sm-5">{{service.service}}</td>
                                    <td class="col-sm-6">{{service.description}}</td>
                                </tr> 
                            </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </div>
</template>
<script> 
export default {
    name: 'appRegistrosServicios',
    data: () => {
        return {
            newServiceName: '',
            newServiceDescription: '',
            services: [
                {
                    id: 0,
                    service: 'Mantenimeinto de 1000 Hrs',
                    description: 'Mantenimiento Básico de 1000 Hrs',
                },
                {
                    id: 1,
                    service: 'Mantenimeinto de 5000 Hrs',
                    description: 'Mantenimiento de 5000 Hrs, incluye revisión de piezas de rodaje y dirección del tractor',
                },
                {
                    id: 2,
                    service: 'Cambio de batería',
                    description: 'Cambio de batería 30H',
                }
            ]
        };
    },

    methods: {
        createService: function(){
            this.services.push ({
                id: this.services.lenght,
                service: this.newServiceName,
                description: this.newServiceDescription
            });
            alert("Servicio Creado")
            this.newServiceName = "",
            this.newServiceDescription = ""
        },

        removeService: function(service, id){
            alert("El servicio " + service + " será eliminado");
            this.services = this.services.filter (x => x.id !==id);
        }
    }

}
</script>
<style>

</style>