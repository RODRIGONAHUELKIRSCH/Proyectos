<?php

session_start();
if (empty($_SESSION["id"])) {
 header("location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
    <link rel="stylesheet" href="estilo-contacto.css"> 
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Josefin Sans:wght@400&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Noto Sans:wght@400&display=swap"
  />
</head>
<body>
    <header>
        <a class="logo" href="contacto.php"><img src="public/image-2@2x.png" alt=""></a>

        <nav >                    
            <a href="home.php"> Inicio</a>
            <a href="catalogodeproductos.php">Catalogo de Productos</a>
            <a href="comprar.php">Comprar</a>
            <a href="contacto.php">Contacto</a>
        </nav>

        <a class="login" href="" ><?php echo $_SESSION['Fn'].", ". $_SESSION['Ln']?></a>
        <a  class="logout" href="salir.php" >Cerrar Sesion </a>
        
    </header>

    <div class="body">

    <div class="contactanos">Contàctanos</div>
    <div class="duda"> <br> <br>Tienes una consulta? Estamos aqui para ayudarte.</div>
    <div class="grupo">
        <br><br>
        <img class="chat" src="public/vector4.svg" alt="" id="Chat">
        <div class="texto">Puedes mandarnos tu consulta mediante un mensaje al:  <a class="amsj" href="https://wa.me/543624275600" target="_blank">3624-275600</a>.</div>
        <br><br><br><br><br>
        <img class="email" src="public/mdigmail.svg" alt="" id="Email" >
        <div class="texto">Envianos un email con tu consulta al:<a class="aemail" href="mailto:HechoAMano.Luky@gmail.com">HechoAMano.Luky@gmail.com</a>.</div>

    </div>
    <img class="imagen" src="public/ellipse-2@2x.png" alt="">
    <div class="closing">Nuestro equipo de soporte se contactara contigo, no olvides darnos tu feedback.</div>

    </div>

    <footer class="footer">
        
        <!-- <hr class="linea1"> -->
        <span class="span-footer1"><hr class="hr-footer1"></span>
        <div class="seguinosen">   Seguinos en:  </div>
        <img id="face" class="facebook" alt="" src="./public/vector3.svg">
        <img id="ins" class="insta" alt="" src="./public/vector2.svg" >
        <!-- <hr class="linea2"> -->
        <span class="span-footer2"><hr class="hr-footer2"></span>
        <img class="logo-footer" src="public/image-2@2x.png" alt="">
        <div class="copiright">Copiright @ 2023</div>
        
    </footer>
    <script src="codigo-contacto.js"></script>
</body>
</html>