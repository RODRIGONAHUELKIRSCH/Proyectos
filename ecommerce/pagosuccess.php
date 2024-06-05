<?php 
include("con_db.php");
require __DIR__.'/vendor/autoload.php';
session_start();
if (empty($_SESSION["id"])) {
    header("location: index.php");
   }
$paympid=$_REQUEST["payment_id"];
$paympstatus=$_REQUEST["status"];
$idprodstat;
$userpdfid=$_SESSION["id"];
$ppdf=array();
$prodpdf=unserialize($_COOKIE['products']??'');
date_default_timezone_set("America/Argentina/Buenos_Aires");

$totalps=0;

$dateps=date("d/m/Y H:i:s");
if(isset($paympid)&&$paympstatus=="approved"){
    ?>
    <!DOCTYPE html>
<html lang="en">
<head>    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
</head>
    </html>
    <?php
        foreach($prodpdf as $productpdf){
                $totalps+=$productpdf['prod_cant']*$productpdf['prod_precio'];
        }
        $mpquery=$con->query("INSERT INTO `pagos`(`id_Pagos`, `idcliente`, `fecha_pago`, `Total`) VALUES ('".$paympid."','".$userpdfid."','".$dateps."','".$totalps."')");


    require("borrarcarrito.php");
    require("receiptemail.php");

}
    ?>