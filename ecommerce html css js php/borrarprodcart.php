<?php
    $prod=unserialize($_COOKIE['products']);
    foreach ($prod as $key => $value) {
        if($_REQUEST['id_prod']==$value['id_prod']){
            unset($prod[$key]);
        }
    }
    $prod=array_values($prod);
    setcookie("products",serialize($prod));
    echo json_encode($prod);
?>