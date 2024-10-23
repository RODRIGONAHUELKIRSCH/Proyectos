package abbruzzese.webpage.webpage.server.webpage.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DTOProduct {

    @Schema(description = "Nombre del producto", example = "Protesis osea")
    private String Nombre;

    @Schema(description = "Nombre de la marca", example = "Osteofix")
    private String Marca;

    @Schema(description = "Descripcion del producto", example = "Recubrimiento osea sintetico para facilitar la movilidad articular")
    private String Descripcion;

    @Schema(description = "Categoria del producto", example = "Artroplastia")
    private String Categoria;

    public DTOProduct( String Nombre,String Marca,String Descripcion,String Categoria){

        this.Nombre=Nombre;
        this.Marca=Marca;
        this.Descripcion=Descripcion;
        this.Categoria=Categoria;
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