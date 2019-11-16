<template>
    <div>
        <h4 class="display-6">Crear Labor</h4>
        <hr>
        <div>
            <label for="task-name">Nombre Labor: </label>
            <input type="text" id="task-name">
        </div>
        <div>
            <label for="task-description">Descripción: </label>
            <input type="text" id="task-description">
        </div>
        <div>
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