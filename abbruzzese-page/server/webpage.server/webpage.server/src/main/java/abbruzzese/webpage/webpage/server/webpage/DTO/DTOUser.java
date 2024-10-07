package abbruzzese.webpage.webpage.server.webpage.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DTOUser {

    @Schema(description = "Nombre del usuario", example = "Juan Perez")
    private String Nombre;

    @Schema(description = "Teléfono del usuario", example = "1234567890")
    private String Telefono;
    
    @Schema(description = "Correo electrónico del usuario", example = "correo@example.com")
    private String Email;

    @Schema(description = "Contraseña del usuario", example = "mi_contraseña")
    private String Password;


    public  DTOUser(String Nombre,String Telefono,String Email,String Password){


        this.Nombre=Nombre;
        this.Telefono=Telefono;
        this.Email=Email;
        this.Password=Password;
    }

    public DTOUser(){}

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String telefono) {
        Telefono = telefono;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

}