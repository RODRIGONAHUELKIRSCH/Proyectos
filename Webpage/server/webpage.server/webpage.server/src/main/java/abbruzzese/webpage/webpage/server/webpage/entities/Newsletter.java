package abbruzzese.webpage.webpage.server.webpage.entities;

import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Newsletter {
    
    @Id
    private String id=UUID.randomUUID().toString();

    @Column(name="Email",nullable=false,unique=true)
    private String email;

    public Newsletter (){}

    Newsletter(String Email){
        this.email=Email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}