<?php 

// sendResetEmail.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use React\EventLoop\Loop;
use React\EventLoop\StreamSelectLoop;

function sendResetEmail($toEmail, $userName, $resetLink)
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
        $mail->Username   = 'youremailaddres@gmail.com'; // Cambiar a tu correo
        $mail->Password   = 'supersecretpassword';     // Cambiar a tu contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->CharSet = 'UTF-8';

        // Configuración del correo
        $mail->setFrom('recovery@gmail.com.ar', 'your message');
        $mail->addAddress($toEmail, $userName);

        $mail->isHTML(true);
        $mail->Subject = 'your company - Restablecer Contraseña';
        $mail->Body    = "<h2>¡Hola, $userName!</h2>
                          <p>Para restablecer su contraseña, haga clic en el siguiente enlace:</p>
                          <a href=\"$resetLink\">Restablecer Contraseña</a>
                          <p>Este enlace caducará en 1 hora.</p>
                          <p>Atentamente: <strong> Your site </strong></p>";

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