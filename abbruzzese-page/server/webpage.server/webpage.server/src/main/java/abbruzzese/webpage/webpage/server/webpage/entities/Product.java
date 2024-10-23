package abbruzzese.webpage.webpage.server.webpage.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.UUID;

@Entity
public class Product {

    public Product (String Nombre, String Marca, String descripcion){
   
        this.Nombre=Nombre;
        this.Marca=Marca;
        this.Descripcion=descripcion;
    }

    public Product(){}

    @Id
    private String id=UUID.randomUUID().toString();;

    
    @Column(name="Nombre",nullable=false)
    private String Nombre;

    @Column (name="Marca",nullable=false)
    private String Marca;

    @Column(name="Descripcion",nullable=false)
    private String Descripcion;

    @Column(name="Categoria",nullable=false)
    private String Categoria;

    public String getIduser() {
        return id;
    }

    public void setIduser(String id) {
        this.id = id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getMarca() {
        return Marca;
    }

    public void setMarca(String marca) {
        Marca = marca;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public String getCategoria() {
        return Categoria;
    }

    public void setCategoria(String categoria) {
        Categoria = categoria;
    }
       
}