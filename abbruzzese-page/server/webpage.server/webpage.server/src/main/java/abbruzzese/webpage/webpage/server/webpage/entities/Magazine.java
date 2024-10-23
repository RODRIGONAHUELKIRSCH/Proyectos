package abbruzzese.webpage.webpage.server.webpage.entities;

import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;

@Entity
@AllArgsConstructor
public class Magazine {

    public Magazine(){}


    @Id
    private String id=UUID.randomUUID().toString();

    @Column(name="nombre",nullable=false)
    private String Nombre;

    @Column(name="Descripcion",nullable = false)
    private String Descripcion;

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

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }



}
