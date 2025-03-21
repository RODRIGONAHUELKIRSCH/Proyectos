<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use React\EventLoop\Loop;
use React\EventLoop\StreamSelectLoop;
require 'vendor/autoload.php';

function sendLoginEmail( $userName)
{
      // Crear el loop de eventos
$loop = Loop::get();

// O también puedes usar StreamSelectLoop si lo necesitas explícitamente:
$loop = new StreamSelectLoop();

    $mail = new PHPMailer(true);
    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host       = 'inserthosthere';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noreply@gmail.com.ar'; // Cambiar a tu correo
        $mail->Password   = 'ultrasecretpassordhere';     // Cambiar a tu contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->CharSet = 'UTF-8';

        // Configuración del correo
        $mail->setFrom('noreply@gmail.com.ar', ' Jane Doe');
        $mail->addAddress('example@gmail.com ', $userName);

        $mail->isHTML(true);
        $mail->Subject = 'Nuevo Inicio de Sesion';
        $mail->Body    = "<h2>¡Nuevo Inicio de Sesion!</h2>
                          <p>El usuario: <strong>$userName </strong>ha iniciado sesion</p>
                          <p>Atentamente: <strong>Tecnología Médica</strong></p>";

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