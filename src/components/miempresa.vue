<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10 mt-2">
                <h2>Inversiones Agrícolas, S.L.</h2>
                <hr>
                <div>
                    <p>CIF: </p>
                    <p></p>
                </div>
                <div>
                    <p>Responsable: </p>
                    <p></p>
                </div>
                <div>
                    <p>Cargo: </p>
                    <p></p>
                </div>
                 <div>
                    <p>Dirección: </p>
                    <p></p>
                </div>
                 <div>
                    <p>Teléfono: </p>
                    <p></p>
                </div>
                 <div>
                    <p>Email: </p>
                    <p></p>
                </div>

                   
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import footermsg from './footermsg'

/*
const firebaseConfig = {
    apiKey: "AIzaSyATMPbeq_gACjKBVov_NYNkvb5tdouFv_w",
    authDomain: "agrocontrol-de9a5.firebaseapp.com",
    databaseURL: "https://agrocontrol-de9a5.firebaseio.com",
    projectId: "agrocontrol-de9a5",
    storageBucket: "agrocontrol-de9a5.appspot.com",
    messagingSenderId: "922799928997",
    appId: "1:922799928997:web:1882418bb9f3c628b47f4c",
    measurementId: "G-GR2JG3V6S3"
};*/

export default {
    name: 'miempresa',
    components: {
        appMenu,
        footermsg
    }
}
</script>
<style>

</style>