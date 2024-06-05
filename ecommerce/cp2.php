<?php 
include("con_db.php");

$idcat=$_POST['id_cat'];

$execon2=$con->query("SELECT *from productos where id_categoria='$idcat'");

while($row2 = mysqli_fetch_array($execon2)){
    
    if($row2['id_categoria']==$idcat){
        
        echo  "<div class='item' id='item'>";     
        echo  "<img  height=180px width=200px class='image-item' src='".$row2['Image']."'>";    
        echo  "<span class='span-name'>Nombre: ".$row2['Nombre']."</span><br>";
        echo  "<span class='span-price'>Precio: $ ".number_format($row2['Precio'],2,',','.')."</span><br>";
        echo  "<span class='span-cant'>Cantidad: <input class='span-input' type='number' maxlength='2'  data-cont-ipt='".$row2['id_Productos']."' id='".$row2['id_Productos']."' name='cantidad' min='1' max='".$row2['Cantidad']."' value='1' step='1' > </input></span><br>";
        echo  "<br><button type='text' data-id='".$row2['id_Productos']."' data-nombre='".$row2['Nombre']."' data-precio='".$row2['Precio']."' data-cant='".$row2['Cantidad']."'  class='btn-item'>Agregar al Carrito</button>";
        echo "</div>";
        
    }

}

?>