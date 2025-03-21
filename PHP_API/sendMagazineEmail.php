<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function enviarCorreoRevistaPorLotes($emails, $magazine)
{
    $loteSize = 50; // Tamaño del lote
    $totalEmails = count($emails);
    $enviados = 0;

    if ($totalEmails === 0) {
        return false; // No hay emails para enviar
    }

    // Dividir en lotes
    $lotes = array_chunk($emails, $loteSize);

    foreach ($lotes as $lote) {
        $exito = false;
        $intentos = 0;

        while (!$exito && $intentos < 3) { // Reintentar hasta 3 veces si falla
            $mail = new PHPMailer(true);

            try {
                // Configuración SMTP
                $mail->isSMTP();
                $mail->Host       = 'yourhostgoeshere';
                $mail->SMTPAuth   = true;
                $mail->Username   = 'noreply@gmail.com.ar';
                $mail->Password   = 'ultrasecretpasswordhere';
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                $mail->Port       = 465;
                $mail->CharSet = 'UTF-8';

                // Remitente
                $mail->setFrom('noreply@gmail.com.ar', 'example: JANE DOE');
                //$mail->addAddress('info@tusitio.com'); // Dirección principal

                // Adjuntar los correos del lote en BCC
                foreach ($lote as $correo) {
                    $mail->addBCC($correo);
                }

                // Configuración del mensaje
                $mail->isHTML(true);
                $mail->Subject = "Nueva revista disponible: " .$magazine->getNombre();
                $mail->Body    = "<h2>¡Hola!. Se ha publicado una nueva revista: " .$magazine->getNombre() ."</h2>
                          <p>Descripción: " .$magazine->getDescripcion() ."</p>
                          <p>Año: " .$magazine->getAño() ."</p>
                          <a href=" .$magazine->getEnlace().">Puedes verla aquí </a>
                          <p>Atentamente: <strong> Sign the email here</strong></p>";

                // Enviar el correo
                if ($mail->send()) {
                    $enviados += count($lote);
                    $exito = true; // Marcar el lote como enviado
                    sleep(2); // Pausa solo si fue exitoso
                } else {
                    throw new Exception("Error en el envío: " . $mail->ErrorInfo);
                }

            } catch (Exception $e) {
                $intentos++;
                echo "Intento {$intentos} fallido: {$e->getMessage()}\n";

                if ($intentos >= 3) {
                    echo "Lote falló después de 3 intentos. Abortando...\n";
                    return false; // Detiene todo si un lote falla
                }
            }
        }
    }

    return $enviados === $totalEmails;
}

?>