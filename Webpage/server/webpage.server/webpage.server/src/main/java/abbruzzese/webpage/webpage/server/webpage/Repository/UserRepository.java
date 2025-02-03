package abbruzzese.webpage.webpage.server.webpage.Repository;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.User;

public interface UserRepository extends CrudRepository<User,String>{


    Optional<User> findByEmail(String email);
} 