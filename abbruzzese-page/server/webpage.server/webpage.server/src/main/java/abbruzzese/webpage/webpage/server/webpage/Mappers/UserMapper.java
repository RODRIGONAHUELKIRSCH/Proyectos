package abbruzzese.webpage.webpage.server.webpage.Mappers;

import org.springframework.stereotype.Component;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOUser;
import abbruzzese.webpage.webpage.server.webpage.entities.User;

@Component(value="UserMapper")
public class UserMapper {

    public User DTOtoUser(DTOUser dtouser){
        
        User user=new User();
        user.setNombre(dtouser.getNombre());
        user.setTelefono(dtouser.getTelefono());
        user.setEmail(dtouser.getEmail());
        user.setPassword(dtouser.getPassword());
        user.setMatricula(dtouser.getMatricula());
        return user;
    }

    public DTOUser UsertoDTO(User user){
        
        DTOUser dtouser=new DTOUser();
        dtouser.setNombre(user.getNombre());
        dtouser.setTelefono(user.getTelefono());
        dtouser.setEmail(user.getEmail());
        dtouser.setPassword(user.getPassword());
        dtouser.setMatricula(user.getMatricula());
        return dtouser;
    }

    public static DTOUser toDTONameEmail(User user) {
        return new DTOUser(user.getNombre(), user.getEmail());
    }
}