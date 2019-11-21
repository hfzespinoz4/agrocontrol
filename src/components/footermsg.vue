<template>
    <div class="nfooter">
        <hr>
        <nav class="nav-footer">
            <a class="nav-footer-image" href="https://www.facebook.com">
                <img src="./media/facebook-footer.png" alt="Enlace a Facebook">
            </a>
            <a class="nav-footer-image" href="https://twitter.com/?lang=es">
                <img src="./media/twitter-footer.png" alt="Enlace a Twitter">
            </a>
            <a class="nav-footer-image" href="https://instagram.com">
                <img  src="./media/instagram-footer.png" alt="Enlace a Instagram">
            </a>
            <a class="nav-footer-image" href="https://linkedin.com">
                <img src="./media/linked-footer.png" alt="Enlace a LinkedIn">
            </a>
            <a class="nav-footer-image" href="https://youtube.com">
                <img  src="./media/youtube-footer.png" alt="Enlace a Youtube">
            </a>
            <a class="nav-footer-image" href="./html/Contact.html">
                <img src="./media/correo-footer.png" alt="Enlace a Contacto">
            </a>
        </nav>
        <br>
        <p>Copyright 2019</p>
    </div>
</template>
<script>
export default {
    name: "footermsg",
}
</script>
<style>
.nfooter{
    align-content: space-around;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    margin-top: 2rem;
    position: relative;      
    padding-top: 2rem;
}

.nav-footer{
    align-content: center;
    align-items:center;
    display: flex;
    justify-content: center;
    margin-top: 3.5rem;
    margin-left: 1rem;
    margin-right:1rem;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;   
}

.nav-footer-image{
    cursor: pointer;
    transition: all  0.7s ease-in-out;
    /*position: relative;*/
}

.nav-footer-image:hover{
    transform: translateY(-2rem);
}
</style>