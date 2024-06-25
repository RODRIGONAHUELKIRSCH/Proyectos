var face = document.getElementById("face");
 if (face) {
   face.addEventListener("click", function () {
    window.open("https://www.facebook.com/profile.php?id=100063680156866");
   });
 }

var ins = document.getElementById("ins");
if (ins) {
  ins.addEventListener("click", function () {
    window.open(
      "https://www.instagram.com/hecho.a.mano_lukycreaciones/"
    );
  });
}


$(document).ready(function(){

  $('#select-categoria').val(1);
  recargarCAT();

  $('#select-categoria').change(function(){
    recargarCAT();
   
  });


  $.ajax({
    type:"POST",
    url:"llenaCarrito.php",
    dataType:"json",
    success:function(r){
      leerCarrito(r);
    }
  });

  $(document).on('click', '.btn-item', function(event){
    event.preventDefault();
    const input = $(event.target).parent().find("input:only-child").val();
    $(event.target).parent().find()
    can=input;
    addCart(event.target,can);
  });

var can=1;
$(document).on('change','input',function(event){
event.preventDefault();
if($(event.target).val()<=10){    
  can=$(event.target).val();
  $('.spa').html($(this).val());

}

else if($(event.target).val()>10){

   $('.spa').html($(this).val(1));
   //alert("La cantidad ingresada supera la disponible.");
}

});

});
function recargarCAT(){
  $.ajax({
    type:"POST",
    url:"cp2.php",
    data:"id_cat=" + $('#select-categoria').val(),
    success:function(r){
      $('#cat_prod').html(r);
    }
  });
}
  function addCart(e,can) {
    var id = $(e).data('id'); /* ID del elemento al que se le ha hecho "click" */
      var nombre=$(e).data('nombre');
      var precio=$(e).data('precio');
      $.ajax({
        type:"post",
        url:"carrito.php",
        data:{"id_prod":id,"prod_nombre":nombre,"prod_precio":precio,"prod_cant":can},
        dataType:"json",
        success:function(r){
          leerCarrito(r);

        }
      });
    }
    
    function leerCarrito(r) {  
      var cantidad=Object.keys(r).length;
      var total=0; 
          $("#carrito-span").text(cantidad);
           $('#t-body_prod').text("");
           $('#totamount').text("");
          const formato = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 });
          if(cantidad>=1){
            r.forEach(element => {
              $('.acart').css('display','none');
              if(element['prod_cant']<=10){
                var totalprod=element['prod_cant']*element['prod_precio'];

                total=total+totalprod;
                $('#t-body_prod').append(
                ` 
                <tr class="N" id='${element['id_prod']}'>
                <td> ${element['prod_nombre']}</td>
                <td>${element['prod_cant']}</td>
                <td>$ ${formato.format(element['prod_precio'])}</td>
                <td><i class='fa fa-trash borrar_prod' data-id='${element['id_prod']}'></i></td>
                </tr>                    
                 `
                 //&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              );
              }
            });
            $('#t-body_prod').append(
              `
              <tr>
                  <td colspan='8'  class="texttotal " id="total-id"><strong>Total: $ ${formato.format(total)}</strong></td>
              </tr>

              `
            );
            $('#totamount').append(
              `
              <a class="input-sub" href="comprar.php">
              <input type="submit" class="input-sub" value="Finalizar Compra">
              </a>
              `
            );
          }
          else if(Object.keys(r).length<1){
            $('.acart').css('display','flex');
    
          }

    }
    
    //unused 
    //$(document).on('click','#dlt-cart',function (e) {  
    //   e.preventDefault();
    //   alert("dlt cart");  
    //   $.ajax({
    //     type:'post',
    //     url:'borrarcarrito.php',
    //     dataType:'json',
    //     success:function(r){
    //       // $('#cart-id').text("");
    //       $('#nohay').css('display','flex');
    //     }
    //   });
    // });

    $(document).on("click",".borrar_prod",function(e){
      e.preventDefault();
      var id=$(this).data('id');
      $.ajax({
          type: "post",
          url: "borrarprodcart.php",
          data: {"id_prod":id},
          dataType: "json",
          success: function (response) {

              leerCarrito(response);
          }
      });
  });


  $('#cart-shop').click(function (e) { 
    e.preventDefault();
    $('.cart-modal').css('display','flex');
  });

  $('.cart-close').click(function (e) { 
    e.preventDefault();
    $('.cart-modal').css('display','none');
  });


//Lo mismo sin jquerys 
//document.getElementById('cart-shop').addEventListener('click',function(){
//   document.querySelector('.cart-modal').style.display='flex';
//   });
  
//   document.querySelector('.cart-close').addEventListener('click',function(){
//     document.querySelector('.cart-modal').style.display='none';
  
//   });