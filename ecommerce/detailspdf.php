<?php
include("con_db.php");
date_default_timezone_set("America/Argentina/Buenos_Aires");

$date=date("d/m/Y H:i:s");
$iduserpdf=$_SESSION['id'];
$consulta2;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho A Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
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
  <style>

@font-face {
  font-family: 'Josefin Sans';
  src: url("https://fonts.googleapis.com/css2?family=Josefin Sans:wght@400&display=swap");
}

@font-face {
  font-family: 'Noto Sans';
  src: url("https://fonts.googleapis.com/css2?family=Noto Sans:wght@400&display=swap");
}
.title_pdf{
  font-size: 40px;
font-family: 'Josefin Sans';
color: #0e4a67;
font-weight: bold;
}

.name_pdf{
  width: 100%;
    font-family: 'Noto Sans';
    color: #0e4a67;
}
.email_pdf{
  width: 100%;
    font-family: 'Noto Sans';
    color: #0e4a67;
}

.telefono_pdf{
  width: 100%;
    font-family: 'Noto Sans';
    color: #0e4a67;
}

.fecha_compra{
  width: 100%;
    font-family: 'Noto Sans';
    color: #0e4a67;
}

.agradecimiento{
  font-size: 35px;
font-family: 'Josefin Sans';
color: #0e4a67;
font-weight: bold;
}

.prod_table_left{
    margin-left: 15px;
    margin-top: 20px;
    width: 90%;
    position: relative;
    float: left;
}

.payr{
    position: relative;
    margin-top: 50px;
    float: right;
}

.table_title{
font-size: 20px;
font-family: 'Josefin Sans';
color: #0e4a67;
font-weight: bold;
}

.tab-payprod{
    width: 100%;
    font-family: 'Noto Sans';
    color: #0e4a67;
}

.thead-payprod{
    font-size: 14px;
    color: #0e4a67;
    font-family: 'Noto Sans';

}

th{
    padding: 20px 15px;
    text-transform: uppercase;
    border-bottom: 3px solid #d4b9d6;
}

td{
    padding: 15px;

}

.t-pay_prod{
    font-size: 14px;
    color: #0e4a67;
    font-family: 'Noto Sans';

}

.nopayprod{
    display: none;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    color: #0e4a67;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-top: 30px;
}
.t-pay_prod tr{
    cursor: pointer;
}

.t-pay_prod tr:hover{
    background-color: #D0dfe0;
}
  </style>
</head>
<body>
<h1 class="title_pdf" style='text-align: center'><u>Comprobante de Pago</u></h1>
<div class="body">
    <div class="buyer_details">
        <?php
        try{
        $consulta2="SELECT id_cliente,Nombre,Apellido,email,Telefono FROM `clientes` where id_cliente=".$_SESSION['id'];
        $execondetpdf=mysqli_query($con,$consulta2);
        if($datosdetpdf=$execondetpdf->fetch_object()){
          
            echo "<p class='name_pdf'>Nombre Completo: <b>".$datosdetpdf->Nombre." ".$datosdetpdf->Apellido."</b></p><br>";
            echo "<p class='email_pdf'>Email: <b>".$datosdetpdf->email."</b></p><br>";
            echo "<p class='telefono_pdf'>Telefono: <b>".$datosdetpdf->Telefono."</b></p><br>";
            echo "<p class='fecha_compra'>Fecha de creacion del comprobante: <b>".$date."</b></p><br>";
        }
      }catch(Exception $expdf){
        error_log($expdf);
      }
        ?>
    </div>
<div class="prod_table_left">
  <span class="table_title"><h3><b><u>Lista de Productos Comprados:</u></b></h3></span>
<table class="tab-payprod" id='tab-payprod'>
      <thead class="thead-payprod" >

      </thead>
      <tbody class="t-pay_prod" id="t-pay_prod">
      <?php
      $productospdf=unserialize($_COOKIE['products']??'');
           $totalpdf=0;
            foreach($productospdf as $rodrigo){
              $totalpdf+=$rodrigo['prod_cant']*$rodrigo['prod_precio'];
              ?>
                <tr>
                <td>Nombre producto: <b><?php echo $rodrigo['prod_nombre']?></b></td>
                <td>Cantidad: <b><?php echo $rodrigo['prod_cant']?></b></td>
                <td>Precio: <b>$<?php echo number_format($rodrigo['prod_precio'],2,',','.');?></b></td>
      
                </tr>

              <?php    }
            ?>
            <td></td>
            <td></td>
            <td >Total:<b>$<?php echo number_format($totalpdf,2,',','.');?></b></td>
      </tbody>
</table>
</div>
<h1 class="agradecimiento" style='text-align: center'><u>¡Gracias por comprar en Hecho a Mano!</u></h1><br>
</div>

</body>
</html>