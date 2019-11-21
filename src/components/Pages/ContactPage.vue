<template>
    <div>
        <h1 clasS="display-4">¡Contáctanos!</h1>
        <hr>
        <div class="d-flex">
            <section class="col-6">
                <span>
                    <h2>Llámanos</h2>
                    <hr>
                    <p>+34 604 26 59 54</p>
                    <br>
                    <div class="main-productos shadow callto d-flex justify-content-around">
                        <a href="tel:+34604265954"> <img src="../media/call.png" alt="contactar por skype" class="d-rounded contact-image"/></a>
                        <a href="whatsapp://call?number=34604265954"> <img src="../media/whatsapp.png" alt="contactar por whatsapp" class="d-rounded contact-image"/></a>
                        <a href="skype:h.zuniga"> <img src="../media/skype.png" alt="contactar por skype" class="d-rounded contact-image"/></a>
                    </div>
                </span>
                <br>
                <span class="mt-3">
                    <h3>Dirección:</h3>
                    <hr>
                    <div class="main-productos shadow">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.7097745674403!2d-3.7019625414876574!3d40.4159792222592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880f3369961%3A0xc8665784f573c48b!2sCalle+de+la+Victoria%2C+9%2C+28012+Madrid!5e0!3m2!1ses-419!2ses!4v1563311110076!5m2!1ses-419!2ses" width="100%" height="300" style="border:0" allowfullscreen></iframe>
                    </div>
                </span>
            </section>
            <section class="col-6">
                <h2>Mas Información</h2>
                <hr>
                <div>
                    <div>
                        <label for="input-fname">Nombre: </label>
                        <input class="form-control" type="text" name="input-fname">
                    </div>
                    <div>
                        <label for="input-lname">Apellidos: </label>
                        <input class="form-control" type="text" name="input-lname">
                    </div>
                    <div>
                        <label for="input-email">Email: </label>
                        <input class="form-control" type="email" name="input-email">
                    </div>
                    <div>
                        <label for="input-phone">Teléfono: </label>
                        <input class="form-control" type="telephone" name="input-phone">
                    </div>
                    <div>
                        <label for="input-subject">Asunto: </label>
                        <input class="form-control" type="text" name="input-subject">
                    </div>
                    <div>
                        <label for="input-message">Mensaje:</label>
                        <textarea class="form-control" type="history" name="input-history">  </textarea>
                    </div>
                    <br>
                    <p class="color-dark">Todos los campos son requeridos</p>
                    <button class="btn btn-success">Enviar</button>
                </div>
            </section> 
        </div>
        <footermsg/>
    </div>
</template>
<script>
import footermsg from '../footermsg'

export default {
    name: "ContactPage",
    components: {
        footermsg
    }
}
</script>
<style scoped>
.contact-image{
   width: 6rem;
   height: 6rem;
}

.contact-image:hover{
    box-shadow: 0 10px 20px rgba(207, 52, 39,0.19), 0 6px 6px rgb(5, 175, 70);
}
</style>