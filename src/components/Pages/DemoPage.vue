<template>
    <div>
        <h1>Login</h1>
        <br>
        <p>Please enter a valid email and password </p>
        <div>
            <div class="flex-column">
                <input type="email" class="form form-element" placeholder="email">
                <input type="password" class="form form-element" placeholder="pasword">
                <button class="btn btn-form btn-acept">Login</button>
            </div>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import footermsg from '../footermsg'

export default {
    name: "DemoPage",
    components:{
        footermsg
    }
}
</script>
<style scoped>

</style>