<?php
include("con_db.php");
if(isset($_POST['register'])){
   
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $dni=$_POST['dni'];
    $direccion=$_POST['direccion'];
    $telefono=$_POST['telefono'];
    $password=$_POST['password'];
    $email=$_POST['email'];
    $consulta="INSERT INTO clientes(Nombre,Apellido,Direccion,Telefono,DNI,email,pw) VALUES ('$nombre','$apellido','$direccion','$telefono','$dni','$email','$password')";
    $resultado =mysqli_query($con,$consulta);
    
    if($resultado){
        ?>
        <script>
            window.setTimeout(function(){
                 window.location.href ="index.php";  // header('location: index.php'); otra forma de hacerlo
            },6000);
        </script>
        <?php
    }
}
?>