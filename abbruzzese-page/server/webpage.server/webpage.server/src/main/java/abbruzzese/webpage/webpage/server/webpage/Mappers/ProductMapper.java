package abbruzzese.webpage.webpage.server.webpage.Mappers;

import org.springframework.stereotype.Component;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOProduct;
import abbruzzese.webpage.webpage.server.webpage.entities.Product;

@Component(value="ProductMapper")
public class ProductMapper {

    public Product DTOtoProduct(DTOProduct dtoprod){
    Product prod=new Product();
    prod.setNombre(dtoprod.getNombre());
    prod.setMarca(dtoprod.getMarca());
    prod.setDescripcion(dtoprod.getDescripcion());
    prod.setCategoria(dtoprod.getCategoria());
    return prod;

    } 

    public DTOProduct ProducttoDTO(Product prod){

        DTOProduct dtoprod=new DTOProduct();
        dtoprod.setNombre(prod.getNombre());
        dtoprod.setMarca(prod.getMarca());
        dtoprod.setDescripcion(prod.getDescripcion());
        dtoprod.setCategoria(prod.getCategoria());
        return dtoprod;
        
    }
}