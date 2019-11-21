<template>
    <div>
        <h4>Crear Usuario</h4>
        <section>
            <span class="col-sm-12 ">
                <div class="col-sm-6"> 
                    <label for="user-name">Nombre: </label>
                    <input class="form-control" type="text" id="user-name" v-model="newUserName">
                </div>
                <div class="col-sm-6">
                    <label for="user-lastname">Apellido: </label>
                    <input class="form-control" type="text" id="user-lastname" v-model="newUserLastName">
                </div>
                <div class="col-sm-6">
                    <label for="user-id">DNI/NIE: </label>
                    <input class="form-control" type="text" id="user-id" v-model="newUserID">
                </div>
                <div class="col-sm-6">
                    <label for="user-email">Email: </label>
                    <input class="form-control" type="email" id="user-email" v-model="newUserEmail">
                </div>
                <div class="col-sm-6">
                    <label for="user-password">Contraseña:</label>
                    <input class="form-control" type="password" id="user-password" v-model="newUserPassword">
                </div>
            </span>
            <div class="col-sm-12">
                <br>
                <button @click="createUser" class="btn btn-success">Crear Usuario</button>
                <br>
            </div>
        </section>
        <br>
        <section>
            <h4 class="display-6"> Usuarios Registrados </h4>
            <hr>
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <table class="table table-stripped table-bordered"> 
                        <thead>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>DNI/NIE</th>
                            <th>Correo Electrónico</th>
                            <th>Password</th>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users"
                                :key="index"
                                :user="user"
                                @remove="remmoveUser">
                                <td class="col-sm-1">{{user.id}}</td>
                                <td class="col-sm-2">{{user.name}}</td>
                                <td class="col-sm-2">{{user.lastname}}</td>
                                <td class="col-sm-2">{{user.uid}}</td>
                                <td class="col-sm-3">{{user.email}}</td>
                                <td class="col-sm-2">{{user.password}}</td>
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
    
    name: 'appCrearUsuario',
    data: () => {
        return {
            newUserName: "",
            newUserLastName: "",
            newUserID: "",
            newUserEmail: "",
            newUserPassword: "",
            users: [
                {
                    id: 0,
                    name: 'Juan Carlos',
                    lastname: 'Perez',
                    email: 'jperez@email.com',
                    uid: 'Y90090090',
                    password: '12345'
                },
                {
                    id: 1,
                    name: 'Francisco',
                    lastname: 'Rosales',
                    email: 'frosales@email.com',
                    uid: '898945CI',
                    password: '12345'
                }
            ]
        };
    },

    methods: {
        createUser: function(){

            this.users.push({
                id: this.users.lenght,
                name: this.newUserName,
                lastname: this.newUserLastName,
                email: this.newUserEmail,
                uid: this.newUserID,
                password: this.newUserPassword 
            });    
            alert("Usuario Registrado")
            this.newUserName = "",
            this.newUserLastName ="",
            this.newUserID = "",
            this.newUserEmail = "",
            this.newUserPassword = ""
        },

        removeUser: function(name, lastname, id){
            alert("El usuario " + name + " " + lastname + " será eliminado")
            this.users = this.users.filter (x => x.id !==id);
        }
    }    

}

</script>
<style >

</style>