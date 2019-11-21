<template>
    <div>
        <h4 class="display-6">Crear Labor</h4>
        <hr>
        <section>
            <span class="d-flex justify-content-between">
                <div class="col-sm-6 my-2">
                    <label for="task-stage">Etapa de la labor:</label>
                    <input class="form-control" type="text" required>
                </div>
                <div class="col-sm-6 my-2">
                    <label for="task-activity">Actividad de la labor:</label>
                    <input class="form-control" type="text" required>
                </div>
            </span>
        </section> 
        <section>
            <span class="d-flex justify-content-between">
                <div class="col-sm-9">
                    <label for="task-name">Nombre Labor: </label>
                    <input class="form-control" type="text" id="task-name" required>
                </div>
                <div class="col-sm-3">
                    <label for="task-unity">Unidad de Medida:</label>
                    <input class="form-control" type="text" required>
                </div>
            </span>
        </section>       
        <div class="col-sm-12 my-2">
            <label for="task-description">Descripción: </label>
            <textarea class="form-control" type="text" id="task-description" required></textarea>
        </div> 
        <br> 
        <div class="col-sm-12">
            <button class="btn btn-success">Crear Labor</button>
        </div>
        <br>
    </div>
</template>
<script>
export default {
    name: 'appCrearLabor',
}
</script>
<style>

</style>