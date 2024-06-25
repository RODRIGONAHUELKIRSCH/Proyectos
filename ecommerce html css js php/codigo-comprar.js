

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

  $.ajax({
    type:"POST",
    url:"llenaCarrito.php",
    dataType:"json",
    success:function(r){
      leerCarrito(r);
    }
  });



});

function leerCarrito(r) {  
  var cantidad=Object.keys(r).length;
  var total=0; 
       $('#t-pay_prod').text("");
       $('#totamount').text("");
      const formato = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 });
      if(cantidad>=1){
        r.forEach(element => {
          $('.nopayprod').css('display','none');
          $('.checkout-btn').css('display','flex');
          if(element['prod_cant']<=10){
            var totalprod=element['prod_cant']*element['prod_precio'];

            total=total+totalprod;
            $('#t-pay_prod').append(
            ` 
            <tr class="N" id='${element['id_prod']}'>
            <td> ${element['prod_nombre']}</td>
            <td>${element['prod_cant']}</td>
            <td>$ ${formato.format(element['prod_precio'])}</td>
            </tr>                    
             `
             //&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          );
          }
        });
        $('#t-pay_prod').append(
          `
          <tr>
              <td></td>
              <td></td>
              <td colspan='8'  class="texttotal" id="total-id"><strong>Total: $ ${formato.format(total)}</strong></td>        
          </tr>
          `
        );
        

      }
      else if(Object.keys(r).length<1){
        $('.nopayprod').css('display','flex');
        $('.checkout-btn').css('display','none');
      }

}

