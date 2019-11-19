<template>
    <div>
        <div>
        <h4>Crear un Servicio </h4>
        <p> Registro de los servicios prestados a la maquinaria agrícola </p>
        <hr>
        <div>
            <label for="service-name">Nombre del Servicio: </label>
            <input type="text" name="service-name" class="form-control" v-model="ServiceCatalog.service" placeholder="Descripción del Servicio">
            <p>
                <!-- TODO: Aqui la validación dle nombre del servicio  -->
            </p>
        </div>
        <div>
            <label for="service-description">Descripción del Servicio</label>
            <textarea type="text" name="service-description" class="form-control" v-model="ServiceCatalog.description" placeholder="Descripción del Servicio"> Descripción completa del servicio </textarea>
        </div>
        <br>
        <button class="btn btn-primary">Crear Servicio</button>
        <br>
    </div>
    <div>
        <h4>Catálogo de Servicios</h4>
            <hr>
            <div class="card">
                <div class="card-header">
                    <p>Listado de servicios disponibles para la maquinaria agrícola</p>
                </div>
                    <div class="card-body">
                        <table class="table table-stripped table-bordered">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Servicio</th>
                                    <th>Descripción</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>

//Firebase
import Firebase from 'firebase/app';
import config from '../elements/config';
 // Initialize Firebase
firebase.initializeApp(config);
/*let app = Firebase.initializeApp(config);
let db = app.database();
let servicesRef = db.ref('services');*/

export default {
    name: 'appRegistrosServicios',
    firebase: {
        RegServices: servicesRef
    },
    data() {
        return {
            ServiceCatalog: {
                service: '',
                description: '',
                option: ''
            }
        }
    }
}
</script>
<style>

</style>