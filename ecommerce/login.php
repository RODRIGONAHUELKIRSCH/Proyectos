<?php 
include("con_db.php");

session_start();

if(isset($_POST['login'])){
    if(strlen($_POST['email']) >=1 && strlen($_POST['password'])>=1){
        $umail = $_POST['email'];
        $pass= $_POST['password'];
        $q=$con->query("SELECT id_cliente,Nombre, Apellido from clientes where email='$umail' and pw='$pass'");
        if($datos=$q->fetch_object()){
            $_SESSION['id']= $datos->id_cliente;
            $_SESSION['Fn']= $datos->Nombre;
            $_SESSION['Ln']= $datos->Apellido;
            header('location: home.php');
        }else{
            
            echo    '<div class="notfound">¡No se ha encontrado la cuenta!</div>';
            
        }

    }

}

?>