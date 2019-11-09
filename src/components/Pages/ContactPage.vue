<template>
    <div>
        <h1 clasS="display-4">Contact Us!</h1>
        <hr>
        <div class="d-flex">
            <section class="col-6">
                <div>
                    <h3>Adress</h3>
                    <p>Adress</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>Email</p>
                </div>
                <div>
                    <h3>Telephone</h3>
                    <p>Telephone</p>
                </div>
            </section>
            <section class="col-6">
                <h2>More Information</h2>
                <div>
                    <div>
                        <label for="input-fname">First Name (Requerido)</label>
                        <input type="text" name="input-fname">
                    </div>
                    <div>
                        <label for="input-lname">Last Name (Requerido)</label>
                        <input type="text" name="input-lname">
                    </div>
                    <div>
                        <label for="input-email">Email (Requerido)</label>
                        <input type="email" name="input-email">
                    </div>
                    <div>
                        <label for="input-phone">Phone Number (Requerido)</label>
                        <input type="telephone" name="input-phone">
                    </div>
                    <div>
                        <label for="input-subject">Subject (Requerido)</label>
                        <input type="text" name="input-subject">
                    </div>
                    <div>
                        <label for="input-message">Subject (Requerido)</label>
                        <input type="history" name="input-history">
                    </div>
                    <button class="btn btn-form color-acept">Send Email</button>
                </div>
            </section>
        </div>
        <footermsg/>
    </div>
</template>
<script>
import footermsg from '../elements/footermsg'

export default {
    name: "ContactPage",
    components: {
        footermsg
    }
}
</script>
<style scoped>

</style>