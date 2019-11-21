<template>
    <div>
        <h1>AgroControl</h1>
        <br>
        <section>   
            <p> AgroControl es una aplicación de gestión administrativa, diseñado para facilitar el registro y control de los costes de producción del ciclo Agrícola y Proyectos que se desarrollen en las parcelas determinadas por el usuario.</p>
            <br>
            <h4>Características</h4>
                <ul>
                    <li>Permite visualizar la información general de la empresa en todo momento</li>
                    <li>Creación de parcelas. Contará con un catálogo en línea de todas las parcelas existentes</li>
                    <li>Catálogo de labores de la maquinaria agrícola y personal de campo. </li>
                    <li>Catálogo de empleados</li>
                    <li>Catálogo de maquinaria agrícola, equipos e implementos</li>
                    <li>Registro de servicios realizados a la maquinaria </li>
                    <li>Control de consumo de combustible para labores mecanizadas</li>
                    <li>Control de aplicación de insumos agrícolas</li>
                    <li>Costeo automatizado del labor mecanizada</li>
                </ul> 
            <br>
            <h4>Requisitos Mínimos </h4>
                <ul>
                    <li>Conexión a Internet</li>
                    <li>Navegador Chrome o Firefox Actualziado</li>
                    <li>Procesador Dual Core 1.6 GHz</li>
                    <li>Memoria RAM 4GB</li>
                </ul>
            
            <h4>Herramientas Utilizadas</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>VueJS como Framework</li>
                    <li>GIthub</li>
                    <li>Google Sheets API</li>
                </ul>
            <br>
            <a href="https://github.com/hfzespinoz4/agrocontrol"><img src="../media/github-logo.png" alt="enlace al repositorio"></a>
        </section>
        <br>
        <footermsg/>
    </div>
</template>
<script>
import footermsg from '../footermsg'

export default {
    name: "InfoPage",
    components: {
        footermsg
    }
}
</script>
<style scoped>

</style>