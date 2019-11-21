<template>
    <div>
        <h4 class="display-6">Crear Labor</h4>
        <br>
        <section>
            <span class="d-flex justify-content-between">
                <div class="col-sm-6 my-2">
                    <label for="task-stage">Etapa de la labor:</label>
                    <input class="form-control" type="text" v-model="newTaskPeriod" >
                </div>
                <div class="col-sm-6 my-2">
                    <label for="task-activity">Actividad de la labor:</label>
                    <input class="form-control" type="text" v-model="newTaskActivity">
                </div>
            </span>
        </section> 
        <section>
            <span class="d-flex justify-content-between">
                <div class="col-sm-9">
                    <label for="task-name">Nombre Labor: </label>
                    <input class="form-control" type="text" id="task-name" v-model="newTaskName" >
                </div>
                <div class="col-sm-3">
                    <label for="task-unity">Unidad de Medida:</label>
                    <input class="form-control" type="text" v-model="newTaskUnit" >
                </div>
            </span>
        </section>       
        <div class="col-sm-12 my-2">
            <label for="task-description">Descripción: </label>
            <textarea class="form-control" type="text" id="task-description" v-model="newTaskDescription"></textarea>
        </div> 
        <br> 
        <div class="col-sm-12">
            <button class="btn btn-success" @click="createTask">Crear Labor</button>
        </div>
        <br>
        <section>
            <h4 class="display-6">Labores registradas</h4>
            <hr>
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <table class="table table-stripped table-bordered"> 
                        <thead>
                            <th>Etapa</th>
                            <th>Actividad</th>
                            <th>Labor</th>
                            <th>U/M </th>
                            <th>Descripción</th>
                        </thead>
                        <tbody>
                            <tr v-for="(task, index) in tasks"
                                :key="index"
                                :task="task"
                                @remove="removetask">
                                <td class="col-sm-2">{{task.period}}</td>
                                <td class="col-sm-3">{{task.activity}}</td>
                                <td class="col-sm-3">{{task.task}}</td>
                                <td class="col-sm-1">{{task.unit}}</td>
                                <td class="col-sm-3">{{task.description}}</td>
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
    name: 'appCrearLabor',
    data: () => {
        return {
            newTaskPeriod: '',
            newTaskActivity: '',
            newTaskName: '',
            newTaskUnit: '',
            newTaskDescription: '',
            tasks: [
                {
                    period: 'Preparación de Suelo',
                    activity: 'Preparación de Suelo',
                    task: 'Riego',
                    unit: 'Ha',
                    description: 'Riego de la parcela',
                },
                {
                    period: 'Preparación de suelo',
                    activity: 'Manejo y Sanidad',
                    task: 'Quema de Malezas',
                    unit: 'Ha',
                    description: 'Quema de malezas en la parcela',
                },
                {
                    period: 'Siembra',
                    activity: 'Manejo y Sanidad',
                    task: 'Aplicación de Herbicidas',
                    unit: 'Ha',
                    description: 'Aplicación de Herbicidas para control de plagas',
                }
            ]
        };
    },
    methods: {
        createTask: function(){
            this.tasks.push({
                period: this.newTaskPeriod,
                activity: this.newTaskActivity,
                task: this.newTaskName,
                unit: this.newTaskUnit,
                description: this.newTaskDescription,
            });
            alert("Labor Registrada");
            this.newTaskPeriod = "",
            this.newTaskActivity = "",
            this.newTaskName= "",
            this.newTaskUnit = "",
            this.newTaskDescription= ""        
        },

        removetask: function(task, id){
            alert("La labor " + task + " será eliminada")
            this.tasks = this.tasks.filter (x => x.id !==id);
        
        }
    }
}
</script>
<style>

</style>