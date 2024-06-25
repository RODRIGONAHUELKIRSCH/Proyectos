<?php
    include("con_db.php");
    require 'PHPMailer\PHPMailer-master/Exception.php';
    require 'PHPMailer\PHPMailer-master/PHPMailer.php';
    require 'PHPMailer\PHPMailer-master/SMTP.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require("pdfgenham.php");    
    
    $idpdf=$_SESSION["id"];

    $compq=$con->query("SELECT id_cliente,Nombre,Apellido,pw, email from clientes where id_cliente='$idpdf'");
    if($dato=$compq->fetch_object()){
        $pdfmail=$dato->email;
        $names=trim($dato->Nombre);
        $surname=$dato->Apellido;
        $pwdpdf=$dato->pw;
        $mail2 = new PHPMailer(true);
            try {
                //Server settings
                $mail2->isSMTP();                                            //Send using SMTP
                $mail2->Host  = "smtp.gmail.com";                            //Set the SMTP server to send through
                $mail2->SMTPSecure="tls";                                   
                $mail2->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail2->Username   = "hechoamano.luky@gmail.com";            //SMTP username
                $mail2->Password   = "msnonmuqybmqwopu";                     //SMTP password
                $mail2->Port = 587;  
                $mail2->CharSet="UTF-8";                                     //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
                $mail2->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
                //Recipients
                $mail2->setFrom("hechoamano.luky@gmail.com", "Hecho A Mano");
                $mail2->addAddress($pdfmail, $names);                      //Add a recipient
                // $mail->addAddress('ellen@example.com');               //Name is optional
                // $mail->addReplyTo('info@example.com', 'Information');
                // $mail->addCC('cc@example.com');
                // $mail->addBCC('bcc@example.com');

                // //Attachments
                 $mail2->addAttachment($rutasave.$nombrearchivo);         //Add attachments
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

                //Content
                $mail2->isHTML(true);                                     //Set email format to HTML
                $mail2->Subject = "Comprobante de pago";
                $mail2->Body  = "¡Hola $surname, $names!<br><b>Adjuntamos su comprobante de pago.<br>¡Gracias por comprar en Hecho a Mano!</b> <br> Atentamente: <b>Hecho A Mano Luky Creaciones</b>";
                $mail2->AltBody = "Su contraseña es: $pwdpdf";

                
                if($mail2->send()){
                    echo    '<div class="emailfound">¡Se ha enviado un correo con la contraseña!</div>';
                }


            }catch (Exception $e) {
                echo "El email no se pudo enviar. Mail Error: {$mail2->ErrorInfo}";
            }
        
    }else{
            echo    '<div class="notemail">¡No se ha encontrado el correo!</div>';
    }
             

?>