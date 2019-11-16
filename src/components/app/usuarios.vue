<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-3"/>
            <div class="col-9">
                <h2>Usuarios</h2>
                <hr>
                <appCrearUsuario/>
                <appRegistrosUsuarios/>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from '../elements/appMenu'
import appCrearUsuario from  '../elements/appCrearUsuario'
import appRegistrosUsuarios from '../elements/appRegistrosUsuarios'
import footermsg from '../elements/footermsg'
/*import Firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyATMPbeq_gACjKBVov_NYNkvb5tdouFv_w",
    authDomain: "agrocontrol-de9a5.firebaseapp.com",
    databaseURL: "https://agrocontrol-de9a5.firebaseio.com",
    projectId: "agrocontrol-de9a5",
    storageBucket: "agrocontrol-de9a5.appspot.com",
    messagingSenderId: "922799928997",
    appId: "1:922799928997:web:1882418bb9f3c628b47f4c",
    measurementId: "G-GR2JG3V6S3"
};
*/
/*const app = Firebase.initializeApp(firebaseConfig);
const db = app.database();

const usersRef= db.ref('usuarios');*/
export default {
    name: 'usuarios',
    components: {
        appMenu,
        appCrearUsuario,
        appRegistrosUsuarios,
        footermsg
    }
}
</script>
<style>

</style>