package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOProduct;
import abbruzzese.webpage.webpage.server.webpage.Mappers.ProductMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.ProductRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.Product;
import jakarta.transaction.Transactional;

@Service
public class ProductService {

    @Autowired
    ProductRepository prep;

    @Autowired 
    ProductMapper pmap;

    @Transactional
    public List<DTOProduct> getProducts() {
        return ((List<Product>) prep.findAll())
                .stream()
                .map(pmap::ProducttoDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public Optional<DTOProduct> getProduct(String id){

        return prep.findById(id).map(pmap::ProducttoDTO);
    }

    @Transactional
    public DTOProduct saveProduct(DTOProduct productDTO) {
        Product product = pmap.DTOtoProduct(productDTO);
        Product savedProduct = prep.save(product);
        return pmap.ProducttoDTO(savedProduct);
    }

    @Transactional
    public void DeleteProd(String id){
        prep.deleteById(id);

    }

    @Transactional
    public DTOProduct updateProduct(String id, DTOProduct productDTO) {
        Optional<Product> existingProduct = prep.findById(id);
        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            product.setNombre(productDTO.getNombre());
            product.setMarca(productDTO.getMarca());
            product.setDescripcion(productDTO.getDescripcion());
            product.setCategoria(productDTO.getCategoria());
            Product updatedProduct = prep.save(product);
            return pmap.ProducttoDTO(updatedProduct);
        }
        return null;
    }

}