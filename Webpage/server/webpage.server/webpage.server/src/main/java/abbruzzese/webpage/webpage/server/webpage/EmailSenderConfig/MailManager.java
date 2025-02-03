package abbruzzese.webpage.webpage.server.webpage.EmailSenderConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class MailManager {

    @Autowired
    private JavaMailSender mailsender;

    public MailManager(JavaMailSender javamailsender) {
        this.mailsender = javamailsender;
    }

    @Value("${spring.mail.username}")
    private String sender;
    public void sendPasswordResetEmail(String toEmail, String name, String resetLink) throws MessagingException {
        MimeMessage mimeMessage = mailsender.createMimeMessage();
        
        String subject = "Grupo Abbruzzese - Restablecer Contraseña";

        String htmlBody = "<h2>¡Hola, " + name + "!</h2>" +
                          "<p>Para restablecer su contraseña, haga clic en el siguiente enlace:</p>" +
                          "<a href=\"" + resetLink + "\">Restablecer Contraseña</a>" +
                          "<p>Este enlace caducará en 1 hora.</p>" +
                          "<p>Atentamente: <strong>Grupo Abbruzzese - Tecnología Médica</strong></p>";
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        helper.setTo(toEmail);
        helper.setSubject(subject);
        helper.setText(htmlBody, true); 
        helper.setFrom(sender);
        mailsender.send(mimeMessage);
    }


    public void sendLoginEmail(String name) throws MessagingException {
        MimeMessage mimeMessage = mailsender.createMimeMessage();
        String toEmail="abbruzzesetecnologiamedica@gmail.com";
        String subject = "Grupo Abbruzzese - Nuevo Inicio de Sesion: "+name;

        String htmlBody = "<h2>Inicio de sesion del usuario: " + name + "</h2>" +

                          "<p>Atentamente: <strong>Grupo Abbruzzese - Tecnología Médica</strong></p>";
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        helper.setTo(toEmail);
        helper.setSubject(subject);
        helper.setText(htmlBody, true); 
        helper.setFrom(sender);
        mailsender.send(mimeMessage);
    }
    
    public void sendWelcomeEmail(String email) throws MessagingException {
        MimeMessage message = mailsender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(email);
        helper.setSubject("Bienvenido a nuestro Newsletter");
        helper.setText("Gracias por suscribirse a nuestro newsletter. ¡Esperamos que disfrute nuestras revistas!", true);

        mailsender.send(message);
    }
}
