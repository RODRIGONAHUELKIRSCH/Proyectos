package abbruzzese.webpage.webpage.server.webpage.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.PasswordResetToken;
import abbruzzese.webpage.webpage.server.webpage.entities.User;
import jakarta.transaction.Transactional;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {

    // Método para buscar un token de restablecimiento de contraseña por su valor
    Optional<PasswordResetToken> findByToken(String token);

    @Transactional
    void deleteByUser(User user);
}
