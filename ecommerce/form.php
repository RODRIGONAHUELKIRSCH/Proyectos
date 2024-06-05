<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
    <link rel="stylesheet" href="estilo-form.css">
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

            <a href="home.php"> Inicio</a>
            <a href="catalogodeproductos.php">Catalogo de Productos</a>
            <a href="comprar.php">Comprar</a>
            <a href="contacto.php">Contacto</a>

        </nav>       

        <a class="iniciarsesion" href="" >Iniciar Sesiòn</a>
        <a  class="carritodecompras" href="" >Carrito de compras <img src="public/vector.svg" alt=""></a>

    </header> -->

    <div class="body">

        <div class="crea-una-cuenta">Crea una cuenta</div>

        <form method="POST" class="formulario" id="formulario">
            
            <div class="formulario__grupo" id="grupo__nombre">
                <div class="grupo1">
                    <input type="text" class="input-grupo1" id="nombre" placeholder="Nombre" name="nombre" required >
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span class="input_incorrecto" >El nombre debe ser mas largo o mas corto</span>
             </div>

             <div class="formulario__grupo" id="grupo__apellido">
                <div class="grupo1">
                    <input type="text" class="input-grupo1" id="apellido" placeholder="Apellido" name="apellido" >
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span class="input_incorrecto" >El apellido debe ser mas largo o mas corto</span>           
             </div>
                
            <div class="formulario__grupo" id="grupo__dni">
                <div class="grupo1">
                    <input type="text" class="input-grupo1"   id="dni" name="dni" required placeholder="DNI"  >
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span class="input_incorrecto" >El dni solo admite numeros</span>
            </div>
                
            <div class="formulario__grupo" id="grupo__direccion">
                <div class="grupo1">
                    <input type="text" class="input-grupo1" id="direccion"  name="direccion"   required placeholder="Direccion">
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span class="input_incorrecto" >La direccion debe ser mas larga o mas corta</span>
            </div>
                
            <div class="formulario__grupo" id="grupo__telefono">
                <div class="grupo1">
                    <input type="text" class="input-grupo1" id="telefono" placeholder="Telefono" name="telefono" required >
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span class="input_incorrecto" >El telefono debe tener 10 numeros como minimo.</span>
            </div>  
                
            <div class="formulario__grupo" id="grupo__password">
        
                <div class="grupo1" >
                    
                    <input type="password" class="input-grupo1" id="password" name="password" required placeholder="Contraseña" ><div class="fas fa-eye verPassword" onclick="vista()" id="verPassword"></div>
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
               
                </div>
           
                <span class="input_incorrecto" >Las contraseñas deben ser iguales</span>
                
            </div>
           
            <div class="formulario__grupo" id="grupo__email">
                <div class="grupo1">
                    <input type="email" class="input-grupo1" id="email" name="email" required placeholder="Email">
                    <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span class="input_incorrecto" >Solo puede contener letras, numeros, puntos, guiones y guion bajo.</span>
            </div>
            
            <div class="formulario__grupo" id="grupo__password2">
                <div class="grupo1">
                    <input type="password" class="input-grupo1 " id="password2" name="password2" required placeholder="Confirmar Contraseña"><div class="fas fa-eye verPassword" onclick="vista2()" id="verPassword2"></div>
                    <i class="formulario__validacion-estado fas fa-times-circle "></i>
                </div>
                <span class="input_incorrecto" >Las contraseñas deben ser iguales</span>
            </div>   

            <div class=" formulario_btn">
                <div class=" formulario__mensaje" id="formulario__mensaje">
                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                </div>
                <input type="submit" class="btn-form-cuenta" name="register" value="Crear Cuenta"></input>
                <span class="ya-tienes-cuenta"> Ya tienes una cuenta? <a class="Login" href="index.php">Inicia Sesiòn</a></span>
                <br>
                <span class="cuenta_creada" id="cuenta_creada">Cuenta creada exitosamente!</span>
                <?php
                    include("dbham.php");
                ?>          
            </div>


        </form>


        <!-- <span class="o"><hr class="hr1">O<hr class="hr2"></span><br>
        
        <button class="btn-google"><img class="img-google" src="public/google-icon.svg" alt="">Inicie Sesiòn con Google</button> -->

        
        
        <div class="decoration">

            <div class="espiral-pequeña"></div>
            <div class="espiral-imagen"><img class="imagen-body" src="public/frame4.svg" alt=""></div>
            <div class="espiral-grande"></div>

        </div>

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

    <!-- <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script> -->
    <script src="https://kit.fontawesome.com/d9528a9526.js" crossorigin="anonymous"></script>
    
    <script  src="codigo-form.js"></script>

</body>

</html>