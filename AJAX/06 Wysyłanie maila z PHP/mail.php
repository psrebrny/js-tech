<?php

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest'){

    header("Content-Type: text/html; charset=utf-8");
    die("Dostęp zabroniony");


}


if(isset($_POST["your-name"]) && isset($_POST["your-email"]) && isset($_POST["your-message"])){

    $errors = array();

    if(empty($_POST["your-name"])){
        array_push($errors, 'podaj swoje imię');
    }

    if(empty($_POST["your-email"])){
        array_push($errors, 'podaj poprawny adres email');
    }

    if(empty($_POST["your-message"])){
        array_push($errors, 'wpisz wiadomość');
    }


    if(count($errors) > 0){
        echo json_encode($errors);
    }else{

        //TODO change for xxx
        $to = "xxx@gmail.com";
        $subject = "Wiadomość z formularza";
        $message = $_POST["your-message"];
        $headers = "From: " . $_POST["your-email"] . "\r\n" .
            "Replay-To: " . $_POST["your-email"] . "\r\n" .
            "Content- Type: text/plain;charset=utf8\r\n" .
            "X-Mailer: PHP/" .phpversion();


        $mail_sent = mail($to, $subject, $message, $headers);

        if($mail_sent){
            echo json_encode(array(
                "success" => "Wiadomość została wysłana"
            ));
        }else{
            echo json_encode(array(
                "error" => "Wiadomość nie została wysłana"
            ));
        }


    }



}else{

    echo json_encode(array(
        "error" => "Przesłano nieprawidłowe pola formularza"
    ));

}