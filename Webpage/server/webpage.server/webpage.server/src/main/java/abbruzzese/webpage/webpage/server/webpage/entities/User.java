package abbruzzese.webpage.webpage.server.webpage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.UUID;

@Entity
public class User {

    public User( String Nombre, String Telefono,String Email,String pwd, String matricula){

        this.Nombre=Nombre;
        this.Telefono=Telefono;
        this.email=Email;
        this.Password=pwd;
        this.matricula=matricula;
    }

    public User(){}

    @Id
    private String id=UUID.randomUUID().toString();

    @Column(name="Nombre",nullable=false)
    private String Nombre;

    @Column(name="Telefono",unique = true,nullable=false)
    private String Telefono;

    @Column(name="Email",unique = true,nullable=false)
    private String email;

    @Column(name="Password",nullable=false)
    private String Password;

    @Column(name = "Matricula",unique = true,nullable = false)
    private String matricula;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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
        return email;
    }

    public void setEmail(String Email) {
        email = Email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

}