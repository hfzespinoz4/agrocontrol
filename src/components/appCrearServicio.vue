<template>
    <div>
        <h4>Crear un Servicio </h4>
        <p> Registro de los servicios prestados a la maquinaria agrícola </p>
        <hr>
        <div>
            <label for="service-name">Nombre del Servicio: </label>
            <input type="text" name="service-name">
            <p>
                <!-- TODO: Aqui la validación dle nombre del servicio  -->
            </p>
        </div>
        <div>
            <label for="service-description">Descripción del Servicio</label>
            <textarea type="text" name="service-description"> Descripción completa del servicio </textarea>
        </div>
        <br>
        <button class="btn btn-success">Crear Servicio</button>
        <br>
    </div>
</template>
<script>
export default {
    name: 'appCrerarServicio'
}
</script>
<style>

</style>