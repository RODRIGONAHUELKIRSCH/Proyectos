<?php
$prod=unserialize($_COOKIE['products']??'');
echo json_encode($prod);
?>