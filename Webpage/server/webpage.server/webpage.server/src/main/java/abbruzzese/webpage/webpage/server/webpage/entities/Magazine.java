package abbruzzese.webpage.webpage.server.webpage.entities;


import java.time.LocalDate;
import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;

@Entity
public class Magazine {

    public Magazine(){}

    public Magazine(String Nombre,String Descripcion,String Año,String imaString,LocalDate fecha){
        this.nombre=Nombre;
        this.Descripcion=Descripcion;
        this.Año=Año;
        this.imageString=imaString;
        this.fecha=fecha;
    }

    @Id
    private String id=UUID.randomUUID().toString();

    @Column(name="Nombre",nullable=false)
    private String nombre;

    @Column(name="Descripcion",nullable = false)
    private String Descripcion;

    @Column(name="Año",nullable=false)
    private String Año;

    @Column(name="Image",nullable = false)
    private String imageString;

    @Column(name="enlace",nullable=false)
    private String enlace;

    @Column(name="fecha_creacion",nullable=false)
    private LocalDate fecha;

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDate.now(); // Asignar la fecha actual al campo createdAt
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String Nombre) {
        nombre = Nombre;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public String getAño() {
        return Año;
    }

    public void setAño(String año) {
        Año = año;
    }

    public String getImageString() {
        return imageString;
    }

    public void setImageString(String imageString) {
        this.imageString = imageString;
    }

    public String getEnlace() {
        return enlace;
    }

    public void setEnlace(String enlace) {
        this.enlace = enlace;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

}