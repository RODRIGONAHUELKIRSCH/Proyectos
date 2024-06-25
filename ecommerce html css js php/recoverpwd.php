<?php 
    include("con_db.php");
    require 'PHPMailer\PHPMailer-master/Exception.php';
    require 'PHPMailer\PHPMailer-master/PHPMailer.php';
    require 'PHPMailer\PHPMailer-master/SMTP.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    session_start();

    if(isset($_POST['recoverpw'])){
        $urmail=$_POST['email'];
        $qy=$con->query("SELECT id_cliente,Nombre,Apellido,pw, email from clientes where email='$urmail'");
        if($dato=$qy->fetch_object()){
            $urmail=$dato->email;
            $nombr=trim($dato->Nombre);
            $apell=$dato->Apellido;
            $pwd=$dato->pw;
            $mail = new PHPMailer(true);

            try {
                //Server settings
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host  = "smtp.gmail.com";                            //Set the SMTP server to send through
                $mail->SMTPSecure="tls";                                   
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = "hechoamano.luky@gmail.com";            //SMTP username
                $mail->Password   = "msnonmuqybmqwopu";                     //SMTP password
                $mail->Port = 587;  
                $mail->CharSet="UTF-8";                                     //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
                $mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
                //Recipients
                $mail->setFrom("hechoamano.luky@gmail.com", "Hecho A Mano");
                $mail->addAddress($urmail, $nombr);                      //Add a recipient
                // $mail->addAddress('ellen@example.com');               //Name is optional
                // $mail->addReplyTo('info@example.com', 'Information');
                // $mail->addCC('cc@example.com');
                // $mail->addBCC('bcc@example.com');

                // //Attachments
                // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

                //Content
                $mail->isHTML(true);                                     //Set email format to HTML
                $mail->Subject = "Recuperar Contraseña";
                $mail->Body  = "¡Hola $apell, $nombr!<br>Su contraseña es: <b>$pwd</b> <br> Atentamente: <b>Hecho A Mano Luky Creaciones</b>";
                $mail->AltBody = "Su contraseña es: $pwd";

                
                if($mail->send()){
                    echo    '<div class="emailfound">¡Se ha enviado un correo con la contraseña!</div>';
                    ?>
                    <script>
                        window.setTimeout(function(){
                             window.location.href ="index.php";  // header('location: index.php'); otra forma de hacerlo
                        },5000);
                    </script>
                    <?php
                }
            } catch (Exception $e) {
                echo "El email no se pudo enviar. Mail Error: {$mail->ErrorInfo}";
            }

        }else{
            echo    '<div class="notemail">¡No se ha encontrado el correo!</div>';
        }
    }

?>