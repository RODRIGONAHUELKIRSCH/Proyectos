package abbruzzese.webpage.webpage.server.webpage.DTO;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DTOMagazine {

    private String Nombre;

    private String Descripcion;

    private String Año;

    private String imageString;

    private String enlace;

    private LocalDate fecha;

    public DTOMagazine(){}

    public DTOMagazine(String Nombre,String Descripcion,String Año,String imageString,String link,LocalDate fecha){

        this.Nombre=Nombre;
        this.Descripcion=Descripcion;
        this.Año=Año;
        this.imageString=imageString;
        this.enlace=link;
        this.fecha=fecha;
    }

    public DTOMagazine(String Nombre,String enlace,String imageString){
        this.Nombre=Nombre;
        this.enlace=enlace;
        this.imageString=imageString;
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