<template>
    <div>
        <h4 class="display-6">Crear Usuario</h4>
        <br>
        <div>
            <label for="user-name">Nombre: </label>
            <input type="text" id="user-name" v-model="newFirstName">
            <p> {{invalidFirstName}} </p>
        </div>
        <div>
            <label for="user-lastname">Apellido: </label>
            <input type="text" id="user-lastname" v-model="newLastName">
            <p> {{invalidLastName}} </p>
        </div>
        <div>
            <label for="user-id">DNI/NIE: </label>
            <input type="text" id="user-id" v-model="newUserId">
            <p> {{invalidUserId}} </p>
        </div>
        <div>
            <label for="user-email">Email: </label>
            <input type="email" id="user-email" v-model="newUserEmail">
            <p> {{invalidUserEmail}} </p>
        </div>
        <div>
            <label for="user-password">Contraseña:</label>
            <input type="password" id="user-password" v-model="newUserPassword">
        </div>
        <div>
            <label for="user-passwordval">Repita Contraseña:</label>
            <input type="password" id="user-paswwordval" v-model="newUserPasswordVal">
            <p>
                <!-- TODO: Mensaje de validación de contraseña -->
            </p>
        </div>
        <br>
        <button @click="validateUser" class="btn btn-primary">Crear Usuario</button>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'appCrearUsuario',
    data: () => {
        return{
            newFirstName: "",
            invalidFirstName: "",
            newLastName: "",
            invalidLastName: "",
            newUserId: "",
            invalidUserId: "",
            newUserEmail: "",
            invalidUserEmail: ""
        };
    },
    computed: {

    }, 

    methods: {
        /*Esta función valida que los datos ingresados
        cumplan los requerimientos */
        validateName: function(){
            this.invalidLastName = valLastName(this.newLastName);

            function valLastName(newLastName){
                if(newLastName === "") {
                    return "Verifica que has ingresado un apellido"
                }
                return "";
            }

            this.invalidFirstName = valFirstName(this.newFirstName);

            function valFirstName(newFirstName){
                if(newFirstName === "") {
                    return "Verifica que has ingresado un nombre"
                }
                return "";
            }

            this.invalidUserId = valUserEmail(this.newUserEmail);

            function valUserEmail(newUserEmail){
                if(newUserEmail == "") {
                    return "Verifica que has ingresado un correo"
                }
                return "";
            }

        }, 
    }

}
</script>
<style >

</style>