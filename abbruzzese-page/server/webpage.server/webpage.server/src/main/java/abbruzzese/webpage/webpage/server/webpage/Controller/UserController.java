package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOUser;
import abbruzzese.webpage.webpage.server.webpage.EmailSenderConfig.MailManager;
import abbruzzese.webpage.webpage.server.webpage.Mappers.UserMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.PasswordResetTokenRepository;
import abbruzzese.webpage.webpage.server.webpage.Repository.UserRepository;
import abbruzzese.webpage.webpage.server.webpage.Service.UserService;
import abbruzzese.webpage.webpage.server.webpage.entities.PasswordResetToken;
import abbruzzese.webpage.webpage.server.webpage.entities.User;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/api/user/")
@Tag(name = "Usuarios", description = "Obtencion y Creacion de Usuarios")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class UserController {

    @Autowired
    UserRepository urep;

    @Autowired
    UserService uservice;

    @Autowired
    UserMapper umap;

    @Autowired
    private MailManager emailService;

    @Autowired
    private PasswordResetTokenRepository tokenRepository;



    @GetMapping
    @Operation(summary = "Obtener todos los usuarios", description = "Obtiene todos los usuario en el sistema")
    public ResponseEntity<List<DTOUser>> getAllUsers() {
        List<DTOUser> users = uservice.getUserNameEmail();
        return ResponseEntity.ok(users); 
    }

    @PostMapping
    @Hidden 
    public ResponseEntity<DTOUser> createUser(@RequestBody DTOUser userDTO) {
        DTOUser createdUser = uservice.saveUser(userDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED); 
     }



    @PutMapping("/{id}")
    @Hidden 
    public ResponseEntity<DTOUser> updateUser(@PathVariable String id, @RequestBody DTOUser userDTO) {
        DTOUser updatedUser = uservice.updateUser(id, userDTO);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    @PatchMapping("/{id}/telefono")
    @Hidden 
    public ResponseEntity<DTOUser> updateTelefono(@PathVariable String id, @RequestBody String telefono) {
        DTOUser updatedUser = uservice.updateTelefono(id, telefono);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    @DeleteMapping("/{id}")
    @Hidden 
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        uservice.DeleteUser(id);
        return ResponseEntity.noContent().build(); 
    }

    @GetMapping("/findByEmail")
    @Hidden
    public ResponseEntity<Map<String, String>> findByEmail(@RequestParam("Email") String email) {
        try {
            // Buscar al usuario por email

    
            // Obtener el objeto User correspondiente desde la base de datos
            User user = urep.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado en la base de datos"));
    
            // Eliminar cualquier token anterior asociado con el usuario antes de generar uno nuevo
            tokenRepository.deleteByUser(user);
            // Crear un token de restablecimiento de contraseña usando el usuario
            PasswordResetToken resetToken = new PasswordResetToken(user);
            tokenRepository.save(resetToken); // Guardar el token en la base de datos
    
            // Obtener el token generado
            String token = resetToken.getToken();
    
            // Construir el enlace para restablecer la contraseña
            String resetLink = "http://localhost:5173/passwordreset?token=" + token;
    
            // Enviar el correo electrónico con el enlace de restablecimiento
            emailService.sendPasswordResetEmail(user.getEmail(), user.getNombre(), resetLink);
    

    
            Map<String, String> response = new HashMap<>();
            response.put("nombre", user.getNombre());
            return ResponseEntity.ok(response);
        } catch (RuntimeException | MessagingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Collections.singletonMap("message", "Error en el servidor: " + e.getMessage()));
        }
    }
    
}