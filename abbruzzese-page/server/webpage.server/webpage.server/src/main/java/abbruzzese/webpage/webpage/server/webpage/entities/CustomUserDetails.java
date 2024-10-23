package abbruzzese.webpage.webpage.server.webpage.entities;

import java.util.Collection;
import java.util.Collections;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CustomUserDetails implements UserDetails {

    private  User user;

    public CustomUserDetails(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Si no manejas roles, puedes devolver una colección vacía.
        return Collections.emptyList();
    }
    

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();  // Usamos el email como nombre de usuario
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;  // Cambia esto si quieres implementar lógica para cuentas expiradas
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;  // Cambia esto si quieres implementar lógica para cuentas bloqueadas
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;  // Cambia esto si quieres implementar lógica para credenciales expiradas
    }


}
