package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOUser;
import abbruzzese.webpage.webpage.server.webpage.Mappers.UserMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.UserRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.User;
import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    UserRepository urep;

    @Autowired
    UserMapper umap;

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
    public DTOUser saveUser(DTOUser dtoUser){
        User user=umap.DTOtoUser(dtoUser);
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

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public DTOUser findUserByEmail(String Email) {
        User user = userRepository.findByEmail(Email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con el correo: " + Email));
        return umap.UsertoDTO(user);  
    }
}