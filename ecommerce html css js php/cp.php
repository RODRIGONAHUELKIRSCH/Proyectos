<?php 
include("con_db.php");

$execon=$con->query("SELECT * from categoria");

while($row=mysqli_fetch_array($execon)){
    echo"<option value='".$row['id_Categoria']."'>".$row['Nombre']."</option>";
}

?>