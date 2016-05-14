<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){

    header('Content-Type: application/json');

    if(isset($_POST)){
        echo json_encode($_POST);
    }
    if(isset($_GET)){
        echo json_encode($_GET);
    }

}else{

    header('Content-Type: text/html; charset=utf-8');
    die('Dostęp zabroniony');

}

//print_r($_GET);
//print_r($__POST);
?>