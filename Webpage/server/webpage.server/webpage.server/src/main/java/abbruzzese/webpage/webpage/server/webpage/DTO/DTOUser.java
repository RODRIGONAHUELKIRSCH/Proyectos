package abbruzzese.webpage.webpage.server.webpage.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DTOUser {

    private String Nombre;

    private String Telefono;
    
    private String Email;

    private String Password;

    private String Matricula;

    public  DTOUser(String Nombre,String Telefono,String Email,String Password, String Matricula){


        this.Nombre=Nombre;
        this.Telefono=Telefono;
        this.Email=Email;
        this.Password=Password;
        this.Matricula=Matricula;
    }

    public  DTOUser(String Nombre,String Email){

        this.Nombre=Nombre;
        this.Email=Email;

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

    public String getMatricula() {
        return Matricula;
    }

    public void setMatricula(String matricula) {
        Matricula = matricula;
    }

}