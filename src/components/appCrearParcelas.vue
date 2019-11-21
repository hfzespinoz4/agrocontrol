<template>
    <div>
        <h4>Crear Parcelas</h4>
        <hr>
        <section>
            <h2></h2>
            <div class="col-sm-4"> 
                <label for="plot-creationdate">Fecha:</label>
                <input class="form-control" type="date" v-model="newDate" >
            </div>
            <div class="col-sm-12">
                <label for="plot-name">Nombre de Parcela:</label>
                <input class="form-control" type="text" v-model="newPlotName">
            </div>
            <span class="d-flex justify-content-between mt-2">
                <div class="col-sm-4">
                    <label for="plot-area">Área (ha):</label>
                    <input class="form-control" type="number" v-model="newPlotArea" >
                </div>
                <div class="col-sm-4">
                    <label for="plot-topograhy">Topografía:</label>
                    <input class="form-control" type="text" v-model="newPlotChar">
                </div>
                <div class="col-sm-4">
                    <label for="plot-responsable">Responsable:</label>
                    <input class="form-control" type="text" v-model="newPlotResponsable">
                </div>
            </span>
        </section>
        <div class="col-sm-12"> 
            <br>
            <button @click="createPlot" class="btn btn-success">Crear Parcela</button>
        </div>
        <br>
        <section class="mt-2">
            <h4>Listado de Parcelas</h4>
            <hr>
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <table class="table table-stripped table-bordered"> 
                        <thead>
                            <th>Fecha</th>
                            <th>Parcela</th>
                            <th>Área (ha)</th>
                            <th>Topografía</th>
                            <th>Responsable</th>
                        </thead>
                        <tbody>
                            <tr v-for="(plot, index) in plots"
                                :key="index"
                                :plot="plot"
                                @remove="removePlot">
                                <td class="col-sm-1">{{plot.date}}</td>
                                <td class="col-sm-2">{{plot.plotName}}</td>
                                <td class="col-sm-2">{{plot.plotArea}}</td>
                                <td class="col-sm-2">{{plot.plotChar}}</td>
                                <td class="col-sm-3">{{plot.plotResponsable}}</td>
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
    name: 'appCrearParcelas',
    data: () =>{
        return {
            newDate: '',
            newPlotName: '',
            newPlotArea: '',
            newPlotChar: '',
            newPlotResponsable: '',
            plots: [
                {
                    date: '21/11/2019',
                    plotName:'Junquillo 1',
                    plotArea: '134',
                    plotChar: 'Nivelado',
                    plotResponsable: 'William Sanchez'
                },
                {
                    date: '21/11/2019',
                    plotName:'Las Bombas 1',
                    plotArea: '100',
                    plotChar: 'Sin Nivelar',
                    plotResponsable: 'Luis Manuel Ruiz'
                }
            ]
        };
    },

    methods: {
        createPlot: function (){
            this.plots.push({
                date: this.newDate,
                plotName: this.newPlotName,
                plotArea: this.newPlotArea,
                plotChar: this.newPlotChar,
                plotResponsable: this.newPlotResponsable
            });
            alert ("Parcela Registrada");
            this.newDate= "",
            this.newPlotResponsable = "",
            this.newPlotName = "",
            this.newPlotArea = "",
            this.newPlotChar = "",
            this.newPlotResponsable = ""
        },

        removePlot: function(plotName, id){
            alert("la Parcela " + plotName + " será eliminado");
            this.plots = this.plots.filter (x => x.id !==id);
        }
    }
}
</script>
<style>

</style>