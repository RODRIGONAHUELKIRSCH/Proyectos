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
    prod.setCategoria(dtoprod.getCategoria());
    prod.setFecha(dtoprod.getFecha());
    prod.setImageproduct(dtoprod.getImageproduct());
    return prod;

    } 

    public DTOProduct ProducttoDTO(Product prod){

        DTOProduct dtoprod=new DTOProduct();
        dtoprod.setNombre(prod.getNombre());
        dtoprod.setMarca(prod.getMarca());
        dtoprod.setCategoria(prod.getCategoria());
        dtoprod.setFecha(prod.getFecha());
        dtoprod.setImageproduct(prod.getImageproduct());
        return dtoprod;
        
    }
}