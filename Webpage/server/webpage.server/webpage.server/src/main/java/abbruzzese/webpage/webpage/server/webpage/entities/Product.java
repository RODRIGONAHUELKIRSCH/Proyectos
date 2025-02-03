package abbruzzese.webpage.webpage.server.webpage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Product {

    public Product (String Nombre, String Marca, String categoria,LocalDate fecha, String imageproduct,String enlace){
   
        this.nombre=Nombre;
        this.Marca=Marca;
        this.Categoria=categoria;
        this.fecha=fecha;
        this.imageproduct=imageproduct;

    }

    public Product(){}

    @Id
    private String id=UUID.randomUUID().toString();;

    @Column(name="Nombre",unique = true,nullable=false)
    private String nombre;

    @Column (name="Marca",nullable=false)
    private String Marca;

    @Column(name="Categoria",nullable=false)
    private String Categoria;

    @Column(name="Fecha",nullable=false)
    private LocalDate fecha;

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDate.now(); // Asignar la fecha actual al campo createdAt
    }

    @Column(name = "ImageProduct",nullable = false)
    private String imageproduct;

    public String getIduser() {
        return id;
    }

    public void setIduser(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String Nombre) {
        nombre = Nombre;
    }

    public String getMarca() {
        return Marca;
    }

    public void setMarca(String marca) {
        Marca = marca;
    }

    public String getCategoria() {
        return Categoria;
    }

    public void setCategoria(String categoria) {
        Categoria = categoria;
    }
       
    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getImageproduct() {
        return imageproduct;
    }

    public void setImageproduct(String imageproduct) {
        this.imageproduct = imageproduct;
    }

}