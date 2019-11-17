<template>
    <div>
        <h4 class="display-6">Crear Labor</h4>
        <hr>
        <div class="my-2">
            <label for="task-stage">Etapa de la labor:</label>
            <input type="text" required>
        </div>
        <div class="my-2">
            <label for="task-activity">Actividad de la labor:</label>
            <input type="text" required>
        </div>
        <div class="my-2">
            <label for="task-name">Nombre Labor: </label>
            <input type="text" id="task-name" required>
        </div>
        <div class="my-2">
            <label for="task-description">Descripción: </label>
            <input type="text" id="task-description" required>
        </div> 
        <div>
            <label for="task-unity">Unidad de Medida:</label>
            <input type="text" required>
        </div>
        <div class="my-1">
            <label for="task-state">Estado: </label>
            <select name="task-state" id="task-state">
                <option value="">Indica el Estado</option>
                <option value="enabled">Activa</option>
                <option value="disabled">Inactiva</option>
            </select>
        </div>
        <br> 
        <button class="btn btn-primary">Crear Labor</button>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'appCrearLabor',
}
</script>
<style>

</style>