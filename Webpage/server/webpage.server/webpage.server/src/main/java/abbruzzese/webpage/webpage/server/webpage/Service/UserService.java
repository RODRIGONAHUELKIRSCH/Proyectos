package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOUser;
import abbruzzese.webpage.webpage.server.webpage.EmailSenderConfig.MailManager;
import abbruzzese.webpage.webpage.server.webpage.Mappers.UserMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.PasswordResetTokenRepository;
import abbruzzese.webpage.webpage.server.webpage.Repository.UserRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.CustomUserDetails;
import abbruzzese.webpage.webpage.server.webpage.entities.PasswordResetToken;
import abbruzzese.webpage.webpage.server.webpage.entities.User;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    UserRepository urep;

    @Autowired
    UserMapper umap;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    @Autowired
    private MailManager mailManager;

    @Transactional
    public List<DTOUser> getUsers() {
        return ((List<User>) urep.findAll())
                .stream()
                .map(umap::UsertoDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public Optional<DTOUser> getUser(String Id){
        
        return urep.findById(Id).map(umap::UsertoDTO);
    }

    @Transactional
    public DTOUser saveUser(DTOUser dtoUser) {
        User user = umap.DTOtoUser(dtoUser);
        String encodedPassword = passwordEncoder.encode(user.getPassword()); // Codifica la contraseña
        user.setPassword(encodedPassword); // Establece la contraseña codificada
        urep.save(user);
        return umap.UsertoDTO(user);
    }
    
    @Transactional
    public void DeleteUser(String id){

        urep.deleteById(id);
    }

    @Transactional
    public DTOUser updateUser(String id, DTOUser userDTO) {
        Optional<User> existingUser = urep.findById(id);
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setNombre(userDTO.getNombre());
            user.setEmail(userDTO.getEmail());
            user.setPassword(userDTO.getPassword());
            user.setTelefono(userDTO.getTelefono());
            user.setMatricula(user.getMatricula());
            User updatedUser = urep.save(user);
            return umap.UsertoDTO(updatedUser);
        }
        return null;
    }

    @Transactional
    public DTOUser updateTelefono(String id, String telefono) {
        Optional<User> existingUser = urep.findById(id);
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setTelefono(telefono);
            User updatedUser = urep.save(user);
            return umap.UsertoDTO(updatedUser);
        }
        return null;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = urep.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con el email: " + email));

        return new CustomUserDetails(user);
    }

    public List<DTOUser> getUserNameEmail() {
       
        return((List<User>) urep.findAll())
                    .stream()
                    .map(user -> new DTOUser(user.getNombre(), user.getEmail()))
                    .collect(Collectors.toList());
    }

    @Transactional
    public void generatePasswordResetToken(String email) throws MessagingException {
        User user = urep.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado con el correo: " + email));

        // Generar token de restablecimiento
        String token = UUID.randomUUID().toString();

        // Guardar el token y asociarlo al usuario
        PasswordResetToken resetToken = new PasswordResetToken(token, user);
        tokenRepository.save(resetToken);

        // Enviar el correo con el enlace de restablecimiento de contraseña
        //String resetLink = "http://localhost:8080/api/user/reset-password?token=" + token;
        String resetLink = "grupoabbruzzese.com.ar/c0640198/api/user/reset-password?token=" + token;
        mailManager.sendPasswordResetEmail(user.getEmail(), user.getNombre(), resetLink);
    }

}