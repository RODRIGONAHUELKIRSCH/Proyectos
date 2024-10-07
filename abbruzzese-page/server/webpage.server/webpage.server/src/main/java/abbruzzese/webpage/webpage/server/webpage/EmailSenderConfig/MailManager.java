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

        public void sendPasswordRecoveryEmail(String toEmail, String name, String password) throws MessagingException {
        MimeMessage mimeMessage = mailsender.createMimeMessage();
        
        String subject = "Grupo Abbruzzese - Recuperar Contraseña";

        String htmlBody = "<h2>¡Hola, " + name + "!</h2>" +
                          "<p>Su contraseña es: <strong>" + password + "</strong></p>" +
                          "<p>Atentamente: <strong>Grupo Abbruzzese - Tecnología Médica</strong></p>";
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        helper.setTo(toEmail);
        helper.setSubject(subject);
        helper.setText(htmlBody, true); 
        helper.setFrom(sender);
        mailsender.send(mimeMessage);
    }
}
