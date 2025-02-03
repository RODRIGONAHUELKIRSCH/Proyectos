package abbruzzese.webpage.webpage.server.webpage.Controller;

//Por si en algun momento la informacion llegara a ser mas sensible y se requiera guardarla en el
//Backend de la aplicacion por el momento se encrypta con crypto-js en el frontend

import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/cookies")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class CookieController {


    private static final SecretKey secretKey=Keys.secretKeyFor(SignatureAlgorithm.HS512);

    private static final long EXPIRATION_TIME = 60 * 60 * 1000; 

 
    @PostMapping("/set")
    public ResponseEntity<String> setCookies(@RequestParam boolean acceptCookies, HttpServletResponse response) {
 
        String token = Jwts.builder()
                .setSubject("cookies-decision")
                .claim("cookiesAccepted", acceptCookies)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith( secretKey,SignatureAlgorithm.HS512)
                .compact();

        Cookie cookie = new Cookie("cookiesToken", token);
        cookie.setHttpOnly(true);  
        cookie.setSecure(true);  
        cookie.setPath("/");      
        cookie.setMaxAge(60 * 60 * 24);  
        response.addCookie(cookie);

        return ResponseEntity.ok("Cookies preference saved.");
    }

    @GetMapping("/check")
    public ResponseEntity<?> checkCookies(@CookieValue(value = "cookiesToken", required = false) String cookiesToken) {
        if (cookiesToken == null) {
            return ResponseEntity.status(401).body("No cookies token found.");
        }

        try {

            String cookiesAccepted = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(cookiesToken)
                    .getBody()
                    .get("cookiesAccepted", String.class);

            boolean accepted = Boolean.parseBoolean(cookiesAccepted);
            return ResponseEntity.ok(accepted);
        } catch (Exception e) {
            return ResponseEntity.status(403).body("Invalid token.");
        }
    }
}

