<?php 
include("con_db.php");


$prod=unserialize($_COOKIE['products']??'');

if(is_array($prod)==false){
    $prod=array();
}
$yaesta=false;

foreach($prod as $k=>$v){
    if( $v['id_prod']==$_REQUEST['id_prod']){
        if(($prod[$k]['prod_cant']+$_REQUEST['prod_cant'])>10){
            $prod[$k]['prod_cant']=$_REQUEST['prod_cant'];
            $yaesta=true;
        }else{
            $prod[$k]['prod_cant']=$prod[$k]['prod_cant']+$_REQUEST['prod_cant'];
            $yaesta=true;
        }

    }

}   
if($yaesta==false){
    $nuevoprod=array(
        "id_prod"=>$_REQUEST['id_prod'],
        "prod_nombre"=>$_REQUEST['prod_nombre'],
        "prod_precio"=>$_REQUEST['prod_precio'],
        "prod_cant"=>$_REQUEST['prod_cant']
    );
    array_push($prod,$nuevoprod);
    
}

setcookie("products",serialize($prod));
echo json_encode($prod);


?>