package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOUser;
import abbruzzese.webpage.webpage.server.webpage.EmailSenderConfig.MailManager;
import abbruzzese.webpage.webpage.server.webpage.Repository.PasswordResetTokenRepository;
import abbruzzese.webpage.webpage.server.webpage.Repository.UserRepository;
import abbruzzese.webpage.webpage.server.webpage.Security.JwtUtil;
import abbruzzese.webpage.webpage.server.webpage.entities.AuthResponse;
import abbruzzese.webpage.webpage.server.webpage.entities.PasswordResetToken;
import abbruzzese.webpage.webpage.server.webpage.entities.User;
import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/api/user/auth")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder ;
    
    @Autowired
    private UserRepository urep;

    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    @Autowired
    private MailManager emailService;

    @PostMapping("/login")

    public ResponseEntity<?> login(@RequestBody DTOUser loginUser) throws MessagingException {

        String email = loginUser.getEmail();

        // Buscar el usuario en la base de datos
        User user = urep.findByEmail(loginUser.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con el correo: " + email));
       
        if (!passwordEncoder.matches(loginUser.getPassword().trim(), user.getPassword())) {

                // Contraseña incorrecta
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas ");
            }
            
            // Enviar email con nombre del usuario que inicio sesion
            emailService.sendLoginEmail(user.getNombre());
        // Crear un objeto Authentication con las credenciales correctas
    Authentication authentication = new UsernamePasswordAuthenticationToken(email,loginUser.getPassword().trim());
           
        // Generar el token JWT para este usuario
        String token = jwtUtil.generateToken(authentication);


            System.out.println("Contexto de seguridad antes de limpiar: " + SecurityContextHolder.getContext().getAuthentication());
        // Retornar la respuesta con el token
        return ResponseEntity.ok(new AuthResponse(token)); // Asegúrate de crear una clase AuthResponse para devolver el token
    }
    

@PostMapping("/reset-password")

    public ResponseEntity<?> resetPassword(@RequestParam("token") String token, @RequestBody String newPassword) {
        PasswordResetToken resetToken = tokenRepository.findByToken(token)
            .orElseThrow(() -> new RuntimeException("Token inválido o expirado"));
    
        // Verifica si el token ha expirado
        if (resetToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Token expirado");
        }
    
        User user = resetToken.getUser();
    
        // Actualizar la contraseña del usuario
        String encodedNewPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedNewPassword);
        
        urep.save(user);
        
        // Eliminar el token de restablecimiento
        tokenRepository.delete(resetToken);
    
        return ResponseEntity.ok("Contraseña actualizada correctamente");
    }
}