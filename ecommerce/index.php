<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
    <link rel="stylesheet" href="estilo-iniciarsesion.css">
    <!-- <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script> -->
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
        <a class="iniciarsesion" href="index.php" > <?php  ?>   : Cerrar Sesion</a>
        <a  class="carritodecompras" href="" >Carrito de compras <img src="public/vector.svg" alt=""></a>
    </header> -->

    <div class="body">
        <div class="titulo"><b> Iniciar Sesiòn</b></div>
        <div class="subtitulo"><span class="notienes-unacuenta">No tienes una cuenta?</span> <a class="creala-ahora" id="crea-ahora" href="form.php">Creala Ahora</a></div>
        <?php include ("login.php")?>
        <form class="grupo" id="formulario" action="" method="post">           
            <label class="texto-email" for="email-text">Email </label><input   class="input-texto" type="email" name="email" id="email-text" placeholder="Ingrese su email.." required >
            <br><br>
            <label class="password-texto" for="password-text">Contraseña</label><input class="input-texto" type="password" name="password" id="password-text" placeholder="Ingrese su contraseña.." required >
            <div class="fas fa-eye verPassword" onclick="vista()" id="verPassword"></div>
            <br><br>
            <input class="btniniciarsesion" type="submit" name="login" id="login" value="Iniciar Sesiòn"></input>
            <br><br>
        </form>
        <a class="olvido" href="recuperarpassword.php">Olvido su contraseña?</a><br>
        <!-- <span class="o"><hr class="hr1">O<hr class="hr2"></span><br>
        <button class="btngoogle"  id="btniniciargoogle"><img class="img-google" src="public/google.png" alt=""> Inicie Sesion con Google</button> -->
        
      
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

    <script src="https://kit.fontawesome.com/d9528a9526.js" crossorigin="anonymous"></script>

    <!-- <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> -->
    <script src="codigo-iniciarsesion.js"></script>
    
</body>
</html>