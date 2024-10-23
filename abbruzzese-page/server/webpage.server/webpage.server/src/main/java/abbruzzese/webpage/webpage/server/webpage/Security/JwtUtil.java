package abbruzzese.webpage.webpage.server.webpage.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    public String generateToken(Authentication authentication) {
        return Jwts.builder()
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 horas
                .signWith(SECRET_KEY) // Utiliza la clave generada
                .compact();
    }

    public String extractUsername(String token) {

        Claims claims = Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)  // Usar el nuevo método setSigningKey
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }


    public String extractToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization"); // Obtener el encabezado Authorization

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7); // Retorna el token sin "Bearer "
        }

        return null; // Retorna null si no hay token
    }
    
        // Verifica si el token ha expirado
        private boolean isTokenExpired(String token) {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
    
            return claims.getExpiration().before(new Date()); // Compara la fecha de expiración
        }
    
        // Valida el token, verificando que el usuario del token coincide con el UserDetails y que no esté expirado
        public boolean validateToken(String token, UserDetails userDetails) {
            String username = extractUsername(token); // Extrae el usuario del token
            return (username.equals(userDetails.getUsername()) && !isTokenExpired(token)); // Valida usuario y expiración
        }
}
