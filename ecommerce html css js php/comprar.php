<?php
require __DIR__.'/vendor/autoload.php';
use MercadoPago\Client\Common\RequestOptions;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Payment;
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\Resources\Preference;
use MercadoPago\SearchResultsArray;
include ("con_db.php");

session_start();
if (empty($_SESSION["id"])) {
 header("location: index.php");
}
// $productomp=unserialize($_COOKIE['products']??'');
// $items=[];
// $compra=0;

// try{
//   $compra=rand(1,10000);

// $accestoken="TEST-3530645084395086-032116-98fcc81c2833bbf12700d403f69a8da0-299333505";
// MercadoPagoConfig::setAccessToken($accestoken);

// MercadoPagoConfig::setRuntimeEnviroment(MercadoPagoConfig::LOCAL);
// $client=new PreferenceClient();

// //Trackeo de pago ver payment id en api controlar eso 
// //se necesita controlar para saber si el pago se efectuo

// // $paymentclient=new PaymentClient();
// // $request_options=new RequestOptions();
// // $request_options->setCustomHeaders(["X-Idempotency-Key: 123456"]);
// // $paymentclient->capture($preference->id,(float)$request_options);



// if(is_array($productomp)==false){
//   $productomp=array();
// }
// foreach($productomp as $k=>$v){
//   $productos[]=[
//     "title"=>$productomp[$k]['prod_nombre'],
//     "quantity"=>$productomp[$k]['prod_cant'],
//     "unit_price"=>$productomp[$k]['prod_precio'],
//   ];
//   array_push($items,$productos);
// }

// $preference=$client->create([
//   "items"=>$items,
//   "external_reference"=>$compra
// ]);

// date_default_timezone_set("America/Argentina/Buenos_Aires");

// $date=date("d/m/Y H:i:s");

// //queryformat
// //INSERT INTO `realiza`(`id_cliente`, `id_pago`, `id_producto`, `cantidad`, `fecha_pago`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')

// foreach($productomp as $k=>$v){
// $execonmp=$con->query("Insert into `realiza`(".$_SESSION['id'].",".$compra.",".$productomp[$k]['id_prod'].",".$productomp[$k]['prod_cant'].",".$date.")");
// }

// }catch(MPApiException $MPApiException){

//     $MPApiException->getMessage();
//     $MPApiException->getStatusCode();
// }


//Vieja integracion
$accestoken="TEST-3530645084395086-032116-98fcc81c2833bbf12700d403f69a8da0-299333505";
MercadoPago\SDK::setAccessToken($accestoken);
$preference=new MercadoPago\Preference();
$compra=0;


$productos=array();
$productosmp=unserialize($_COOKIE['products']??'');
try {
  $compra=rand(1,100000);
  if(is_array($productosmp)==false){
    $productosmp=array();
   }

  foreach ($productosmp as $producto){
    $item=new MercadoPago\Item();
     $item->title=$producto['prod_nombre'];
     $item->quantity=$producto['prod_cant'];
     $item->currency_id="ARS";
     $item->unit_price=$producto['prod_precio'];
     $item->id=$producto["id_prod"];
     array_push($productos,$item);
  }

  
   $preference->binary_mode=true;
   $preference->back_urls=array(
    "success"=>"http://localhost/pps1pruebanode/pagosuccess.php",
    "failure"=>"http://localhost/pps1pruebanode/pagofail.php"
   );
   $preference->auto_return="approved"; // Necesita de back_urls
   $preference->external_reference=$compra;
   $preference->items=$productos;
   $preference->save();

   $detail=$preference->getAttributes();
   $objMercadoPago = new  MercadoPago\Payment();

   $paymp=$objMercadoPago->get("https://api.mercadopago.com/v1/payments/{$compra}");
   $pay2mp=$preference->get("https://api.mercadopago.com/v1/payments/{299333505-6d9b844b-cea7-4a47-b7c5-ca8404eef7bd}");

  echo $pay2mp;
    // echo $compra;

    echo $datosjson = $objMercadoPago -> get("https://api.mercadopago.com/v1/payments/search?external_reference={1318028380}");
    echo $datos2json = $objMercadoPago -> get("/v1/payments/search?external_reference={$compra}");
   //si no funciona lo de arriba asi /v1/payments/search?external_reference={$preference->id}
   echo $datosjson;
   echo $datos2json;

   $payment =new MercadoPago\Payment();
  //  echo $payment::find_by_id($preference->id);
   echo $payment::find_by_id($compra);
  }catch(Exception $E){
    $E->getTrace();
    $E->getMessage();

   }

   ?>

<!DOCTYPE html>
<html lang="en">
<head>    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
    <link rel="stylesheet" href="estilo-comprar.css"> 
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

  <!-- <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script> -->
  <script src="https://kit.fontawesome.com/d9528a9526.js" crossorigin="anonymous"></script>

  <script
  src="https://code.jquery.com/jquery-3.7.1.js"
  integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"></script>
  
  <!-- <script src="https://js.stripe.com/v3/"></script> -->
  <script src="https://sdk.mercadopago.com/js/v2"></script>
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
        <a  class="logout" href="salir.php" >Cerrar Sesion</a>

    </header>

    <div class="body">

    <div class="prod_table_left">

      <span class="table_title">Lista de Productos a comprar:</span>
    <table class="tab-payprod" id='tab-payprod'>
          <thead class="thead-payprod" >
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody class="t-pay_prod" id="t-pay_prod">

          </tbody>
    </table>

      <span class="nopayprod">No hay productos añadidos al carrito.</span>
      <div class="checkout-btn" id="checkout-btn"></div>

    </div>
    
    </div>
    <script>
        const mp = new MercadoPago('TEST-143b3f41-5a23-4966-9003-a776ad2d0db7',{
          locale:'es-AR'
        });
    //     const bricksBuilder=mp.bricks();
    //     mp.bricks().create("wallet",".checkout-btn",{
    //       initialization: {
    //        preferenceId:  echo $preference->id;?>,
    //     }
    // });
      const checkout=mp.checkout({
        preference:{
        id: '<?php echo $preference->id?>'
      },
      render:{
        container:'.checkout-btn',
        label: 'Pagar',
      },
    //   callbacks:{
    //     onSubmit: ({ selectedPaymentMethod, formData }) => {
    //   return new Promise((resolve, reject) => {
    //     fetch("/process_payment", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     })
    //       .then((response) => response.json())
    //       .then((response) => resolve(response))
    //       .catch((error) => reject());
    //   });
    // },
    //     onError: (error)=>{
    //       console.error(error);
    //     }
    //   }
      });
    
      </script>

  <!-- <div class="payr">
     <form method="post" id="payment-form">

        <label class="lab-credeb" for="id_creditdebit">Tarjeta de Credito o Debito</label><br><br>
        <input id="id_creditdebit" type="text" name="creditdebit" required><br><br>

        <label class="lab-cvc" for="id_cvc">CVC</label><br><br>
        <input id="id_cvc" type="text" name="cvc" required><br><br>

        <label class="lab-fven" for="fecha_ven">Fecha de vencimiento de la Tarjeta</label><br><br>
        <input id="fecha_ven" type="text" name="f_ven" required><br><br>

 
        <input class="btnsub" type="submit" value="Comprar">
    </form>
  </div> -->

   

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

    <script src="codigo-comprar.js"></script>

    <script></script>

</body>
</html>