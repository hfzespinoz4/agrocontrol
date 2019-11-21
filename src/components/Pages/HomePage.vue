<template>
    <div>
        <div>
            <header>
                <section class="main-banner">
                    <div class="banner-container">
                        <img class="banner-images" src="" alt="" id="banner-images">
                    </div>
                    <div id="serv-info">
                        <div class="title container">
                            <h1 id="h1"> Servicio </h1>
                        </div>
                        <div class="serv-container">
                            <p class="serv-description" id="serv-description">Breve referencia a los beneficios del servicio</p>
                        </div>
                        <div class="button-container">
                            <button class="call-to-action">Más Información</button>
                        </div> 
                    </div>             
                </section>
            </header>
            <main>
                <section>
                    <h2></h2>
                    <div class="company-description">
                        <p> TDI es líder en servicios de tecnología. Es distribuidor y representante de marcas importantes como Lenovo, Cisco, SAP, Microsoft, entre muchas otras. Ofrece infraestructura, software, servicios de TI, así como apoyo y asesoría en la planeación e implementación de tecnología para las empresas.</p> 
                    </div>   
                </section>
                <section class="space-bet-section">
                    <h2 class="hidden-title">Título de Sección</h2>
                    <hr>
                    <div class="main-promos">
                        <div class="us">
                            <img alt="Productos de Calidad" class="us-img">
                            <p>Productos de Calidad</p>
                        </div>
                        <div class="us">
                            <img src="" alt="Servicio 24 7" class="us-img">
                            <p>Asistencia Técnica 24/7</p> 
                        </div>
                        <div class="us">
                            <img src="" alt="Personal Calificado" class="us-img">
                            <p>Personal Altamente Calificado</p>     
                        </div>
                        <div class="us">
                            <img src="" alt="Proyectos a la medida" class="us-img" >
                            <p>Proyectos a la Medida</p>     
                        </div>
                    </div>
                </section>
                <section class="space-bet-section">
                    <h2>Casos de Éxito</h2>
                    <hr>
                    <div class="main-promos">
                        <div class="business-case">
                            <p>"Trabajar con TDI ha sido la mejor inversión que hemos realizado - Xinwei Inc.</p>
                        </div>
                        <div class="business-case">
                            <p>"TDI nos ha ayudado a establecer politicas correctas en cuanto a nuestros equipos" - Crea Comunicaciones</p> 
                        </div>
                        <div class="business-case">
                            <p>"Confiamos en TDI como el socio preferencial en España" - IBM</p>     
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <footermsg/>
    </div>
    
</template>
<script>
import footermsg from '../footermsg'

export default {
    name: "HomePage",
    components: {
        footermsg
    }
}
</script>
<style scoped>

</style>