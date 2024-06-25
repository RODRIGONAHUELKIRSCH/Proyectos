<!-- Verificar cliente logueado -->
<?php
session_start();
if (empty($_SESSION["id"])) {
 header("location: index.php");
}
?>


<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecho a Mano</title>
    <link rel="icon" href="public/hechoamano.ico">
    <link rel="stylesheet" href="estilo-catalogo.css">
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
  <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Source Sans Pro:wght@400;700&display=swap"
    />
  <!-- Script Obsoleto <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script> -->
  <script src="https://kit.fontawesome.com/d9528a9526.js" crossorigin="anonymous"></script>
<!--
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
-->

<script
  src="https://code.jquery.com/jquery-3.7.1.js"
  integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"></script>

  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script> -->
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script> -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" /> -->

<!-- Traer productos dinamicamente -->
  <script  type="text/javascript">
// 	$(document).ready(function(){

// 		$('#select-categoria').val(1);
// 		recargarCAT();

// 		$('#select-categoria').change(function(){
// 			recargarCAT();
     
// 		});

//     /* 
//     Prueba modal jquery
//     */
//     $(document).on('click','#cart-shop',function (e) {  

//       $('#cart-modal').modal();
//     });


//     $.ajax({
// 			type:"POST",
// 			url:"llenaCarrito.php",
// 			dataType:"json",
// 			success:function(r){
// 				leerCarrito(r);
// 			}
// 		});
// //     $(function(){
// //     $(document).on('click', '.cart-shop', function(event){
// //       event.preventDefault();
      
// //       $('.cart-modal').css("display","flex");
// //     });
// // });


// //     $(document).on('click', '.cart-close', function(event){
// //       event.preventDefault();
      
// //       $('.cart-modal').css("display","none");
// //     });



  
//     $(document).on('click', '.btn-item', function(event){
//       event.preventDefault();

//       addCart(event.target,can);
//     });

// var can=1;
// $(document).on('change','input',function(event){
//   event.preventDefault();
//   if($(event.target).val()<=10){    
//     can=$(event.target).val();
//     $('.spa').html($(this).val());

//   }
  
//   else if($(event.target).val()>10){

//      $('.spa').html($(this).val(1));
//      //alert("La cantidad ingresada supera la disponible.");
//   }

//   });

//     // $('button.btn-item').click(function(e){
//     //   e.preventDefault()
//     //   var id=$(this).data('id');
//     //   var nombre=$(this).data('nombre');
//     //   var precio=$(this).data('precio');
//     //   var cant=$()
//     //   $.ajax({
//     //     type:"Post",
//     //     url:"carrito.php",
//     //     data:{'id':id,'nombre':nombre,'precio':precio},
//     //     dataType:"json",
//     //     success:function(f){
//     //       var cantidad=Object.keys(f).length;
//     //       $('#carrito-span').text(cantidad);
//     //     }
//     //   })
//     // });

// 	});
//   function recargarCAT(){
// 		$.ajax({
// 			type:"POST",
// 			url:"cp2.php",
// 			data:"id_cat=" + $('#select-categoria').val(),
// 			success:function(r){
// 				$('#cat_prod').html(r);
// 			}
// 		});
//   }
//     function addCart(e,can) {
//       var id = $(e).data('id'); /* ID del elemento al que se le ha hecho "click" */
//         var nombre=$(e).data('nombre');
//         var precio=$(e).data('precio');
//         $.ajax({
//           type:"post",
//           url:"carrito.php",
//           data:{"id_prod":id,"prod_nombre":nombre,"prod_precio":precio,"prod_cant":can},
//           dataType:"json",
//           success:function(r){
//             $('#nohay').css('display','none');
//             leerCarrito(r);

//           }
//         });
//       }


//       function leerCarrito(r) {  
//         var cantidad=Object.keys(r).length;

//             $("#carrito-span").text(cantidad);
//             $('#cart-id').text("");
//             r.forEach(element => {
//               if(element['prod_cant']<=10){
//                 $('#cart-id').append(
//                 `<span class="N" id='${element['id_prod']}'>Producto: ${element['prod_nombre']} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cantidad: 
//                 ${element['prod_cant']}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                  Precio:${element['prod_precio']}</span><br>`
//               );
//               }
//             });
//             $('#cart-id').append(
//               `
//               <div class="dropdown-divider"></div>
//               <a class='acart dropdown-item dropdown-footer text-danger' id='dlt-cart'> Borrar carrito<i class='fa fa-trash'></i></a>
//               `
//             );
//       }
//       $(document).on('click','#dlt-cart',function (e) {  
//         e.preventDefault();
//         alert("dlt cart");  
//         $.ajax({
//           type:'post',
//           url:'borrarcarrito.php',
//           dataType:'json',
//           success:function(r){
//             $('#cart-id').text();
//             $('#nohay').css('display','flex');
//           }
//         });
//       });
      
</script>



</head>
<body>
  <header>

      <a class="logo" href="contacto.php"><img src="public/image-2@2x.png" alt=""></a>

      <nav >                    
          <a href="home.php"> Inicio</a>
          <a href="CatalogodeProductos.php">Catalogo de Productos</a>
          <a href="comprar.php">Comprar</a>
          <a href="contacto.php">Contacto</a>
      </nav>

      <a class="login" href="" ><?php echo $_SESSION['Fn'].", ". $_SESSION['Ln']?></a>
      <a  class="logout" href="salir.php" >Cerrar Sesion</a>
      <span  class="carritodecompras" id="cart-shop" >Carrito de compras(<span  id="carrito-span"></span>) <img src="public/vector.svg" alt=""></span>
      <span class="sel-span">Seleccione una categoria:</span>
      <select class="selec-categoria"  name="sel-categoria" id="select-categoria" > 
      <!-- <option value="" selected="true" disabled>Seleccione una Categoria</option>   -->

      <!-- Traer categorias dinamicamente desde bd -->
      <?php include("cp.php"); ?>

      <!-- <option value="1" >Mascotas</option>-->
      <!-- <option value="2" >Chicos</option>-->
      </select>

  </header>



  <div class="catalog" id="cat_prod">

  </div>
  

  <!-- Modal Section -->

    <div class="cart-modal" >
      <div class="cart-container">

        <div class="cart-close">+</div>

        <span class="cart-elem">Productos</span>

        <div class="cart-item" id="cart-id">
                
        <table class="tab-prod table table-striped table-inverse" id='tab-prod'>
          <thead class="thead-prod thead-inverse" >
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody class="t-body_prod" id="t-body_prod">

          </tbody>
        </table>
            
        <span class='acart' id="nohay"> No hay elementos en el carrito.</span>
        <div class="total-amount" id="totamount">

        </div>
        </div>
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

<script src="codigo-catalogo.js"></script>

</body>

</html>