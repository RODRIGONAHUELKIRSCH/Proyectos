<?php 
session_start();
if(empty($_SESSION["id"])){
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
    <link rel="stylesheet" href="estilo.css"> 
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

    <header >   

        <a class="logo" href="contacto.php"><img src="public/image-2@2x.png" alt=""></a>

        <nav >                    
            <a href="home.php"> Inicio</a>
            <a href="catalogodeproductos.php">Catalogo de Productos</a>
            <a href="comprar.php">Comprar</a>
            <a href="contacto.php">Contacto</a>
        </nav>       

        <a class="login" href="" ><?php echo $_SESSION['Fn'].", ". $_SESSION['Ln']?></a>
        <a  class="logout" href="salir.php" > Cerrar Sesion </a>
   
    </header>

    <div class="cuerpo">      

        <div class="titulo">Hecho a Mano: Indumentaria y accesorios para bebes y tus mascotas</div>

        <div class="grupo">
            <br>
            <br>
            <img class="tickicon" src="public/vector1.svg" alt="">
            <div class="texto">Una empresa que ofrece productos de calidad para tus bebes
                como para tus mascotas.
            </div>       
                <br>
                <br>            
                <img class="tickicon" src="public/vector1.svg" alt="">
            <div class="texto"> Brindamos productos con diseños originales como tambièn
                    con tus temàticas favoritas.
            </div>
                <br>
                <br>               
                <img class="tickicon" src="public/vector1.svg" alt="">
            <div class="texto">Comprometidos a mejorar para asi poder brindarte un mejor
                    servicio.
                    
            </div>

        </div>

        <div class="ahora-podes-elegir">Ahora podes elegir los productos que confias online!</div>
        <img class="imagenes" alt="" src="./public/frame1.svg" />

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

    <script  src="codigo-inicio.js"></script>
</body>

</html>