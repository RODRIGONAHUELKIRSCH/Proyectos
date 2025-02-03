package abbruzzese.webpage.webpage.server.webpage.entities;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class CookieEncryptionUtil {
    private static final String ALGORITHM = "AES";
    private static final String KEY = "ThisIsASecretKey";  // Cambia esto por una clave real

    // Método para cifrar el JWT
    public String encryptJwt(String jwt) throws Exception {
        SecretKey secretKey = new SecretKeySpec(KEY.getBytes(), ALGORITHM);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedJwt = cipher.doFinal(jwt.getBytes());
        return Base64.getEncoder().encodeToString(encryptedJwt);
    }

    // Método para desencriptar el JWT (lo harás en el backend también)
    public String decryptJwt(String encryptedJwt) throws Exception {
        SecretKey secretKey = new SecretKeySpec(KEY.getBytes(), ALGORITHM);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decryptedJwt = cipher.doFinal(Base64.getDecoder().decode(encryptedJwt));
        return new String(decryptedJwt);
    }
}