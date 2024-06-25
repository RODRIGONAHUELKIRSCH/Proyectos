<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
    <link rel="stylesheet" href="estilo-recuperar.css">
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
      href="https://fonts.googleapis.com/css2?family=Source Sans Pro:wght@400;700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto Sans:wght@400&display=swap"
    />
</head>
<body>
    <!-- <header >          
        <a class="logo" href="contacto.php"><img src="public/image-2@2x.png" alt=""></a>
        <nav >                    
            <a href="index.php"> Inicio</a>
            <a href="catalogodeproductos.php">Catalogo de Productos</a>
            <a href="comprar.php">Comprar</a>
            <a href="contacto.php">Contacto</a>
        </nav>       
        <a class="iniciarsesion" href="index.php" >     : Cerrar Sesion</a>
        <a  class="carritodecompras" href="" >Carrito de compras <img src="public/vector.svg" alt=""></a>
    </header> -->

    <form method="post" class="body">
      <span class="recuperar">Recuperar Contraseña:</span>
      <?php include("recoverpwd.php");
      ?>
      <label class="recuperar-label-email" for="input-email">Email:</label>
      <input class="recuperar-input-email" id="input-email" type="email" required name="email">
      <input class="recuperar-btn-email" name="recoverpw" type="submit" value="Recuperar Contraseña"></input>
      <a class="volver" href="index.php">Volver</a>
    </form>
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

    <script src="codigo-recuperar.js"></script>
    
</body>
</html>