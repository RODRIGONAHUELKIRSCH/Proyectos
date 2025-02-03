package abbruzzese.webpage.webpage.server.webpage.DTO;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DTOProduct {

    private String Nombre;

    private String Marca;

    private String Categoria;

    private String imageproduct;

    private LocalDate fecha;

    private String enlace;
    

    public DTOProduct( String Nombre,String Marca,String Descripcion,String Categoria,String imageproduct,LocalDate fecha, String enlace){

        this.Nombre=Nombre;
        this.Marca=Marca;
        this.Categoria=Categoria;
        this.imageproduct=imageproduct;
        this.fecha=fecha;
        this.enlace=enlace;
    }

    public DTOProduct(LocalDate fecha,String imageproduct, String enlace){

        this.fecha=fecha;
        this.imageproduct=imageproduct;
        this.enlace=enlace;
        
    }

    public DTOProduct(){}
    
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

    public String getCategoria() {
        return Categoria;
    }

    public void setCategoria(String categoria) {
        Categoria = categoria;
    }

    public String getImageproduct() {
        return imageproduct;
    }

    public void setImageproduct(String imageproduct) {
        this.imageproduct = imageproduct;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getEnlace() {
        return enlace;
    }

    public void setEnlace(String enlace) {
        this.enlace = enlace;
    }

}