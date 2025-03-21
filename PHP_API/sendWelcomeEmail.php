<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use React\EventLoop\Loop;
use React\EventLoop\StreamSelectLoop;

function sendWelcomeEmail( $email ) 
{

// Crear el loop de eventos
$loop = Loop::get();

// O también puedes usar StreamSelectLoop si lo necesitas explícitamente:
$loop = new StreamSelectLoop();

    $mail = new PHPMailer(true);
    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host       = 'yourhosthere';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noreply@gmail.com.ar'; // Cambiar a tu correo
        $mail->Password   = 'supersecretpassword';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->CharSet = 'UTF-8';
      
        // Configuración del correo
        $mail->setFrom('noreply@gmail.com.ar', 'Grupo Abbruzzese');
        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = 'insert a title here';
        $mail->Body    = "<h2>¡Gracias por suscribirte a nuestro Newsletter!</h2>
                          <p>Cuando publiquemos una nueva revista se te enviara la misma a este email.</p>
                          <p>Atentamente: <strong>firma el email example: Best regards Jane Doe</strong></p>";

             // Usar el loop de ReactPHP para no bloquear el hilo principal
             $loop->futureTick(function () use ($mail) {
                // Enviar el correo y manejar errores
                    $mail->send();       
            });
    
            // Iniciar el loop de eventos
            $loop->run();
            return "Correo enviado correctamente";
    } catch (Exception $e) {
        return "Error al enviar el correo: {$mail->ErrorInfo}, se produjeron los erorres: {$e->errorMessage()}";
    }
    
}

?>