<template>
    <div>
        <div class="d-flex">            
            <appMenu class="col-2 nav-links  bg-success justify-content-around"/>
            <div class="col-10">
                <h2>Crear Nuevo</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas officiis minus id corrupti blanditiis incidunt aperiam? Quia, commodi, voluptas odio explicabo adipisci minus, fugit ut totam aspernatur corporis placeat.Nesciunt cupiditate voluptatibus cumque est nisi! Nesciunt doloribus facere, distinctio similique dolor explicabo aliquid nisi dolorem dignissimos culpa sed enim quisquam ducimus necessitatibus corrupti consequatur. Labore iste tenetur aut possimus?</p>   
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import appMenu from './appMenu'
import footermsg from './footermsg'

export default {
    name: 'registrar',
    components: {
        appMenu,
        footermsg
    }
}
</script>
<style>

</style>