package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOProduct;
import abbruzzese.webpage.webpage.server.webpage.Mappers.ProductMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.ProductRepository;
import abbruzzese.webpage.webpage.server.webpage.Service.ProductService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;


@RestController 
@RequestMapping("/api/product/")
@Tag(name = "Productos", description = "Obtencion y Creacion de Productos")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class ProductController {

    @Autowired
    ProductService pser;

    @Autowired
    ProductRepository prep;

    @Autowired
    ProductMapper pmap;

    @GetMapping
    @Operation(summary = "Obtener todos los Productos", description = "Obtiene todos los productos en el sistema")
    public ResponseEntity<List<DTOProduct>> getAllProducts() {
        List<DTOProduct> products = pser.getProducts();
        return ResponseEntity.ok(products); 
    }

    @PostMapping
    @Hidden
    public ResponseEntity<DTOProduct> createProduct(@RequestBody DTOProduct productDTO) {
        DTOProduct createdProduct = pser.saveProduct(productDTO);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED); 
    }

    @PutMapping("/{id}")
    @Hidden 
    public ResponseEntity<DTOProduct> updateProduct(@PathVariable String id, @RequestBody DTOProduct productDTO) {
        DTOProduct updatedProduct = pser.updateProduct(id, productDTO);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    @DeleteMapping("/{id}")
    @Hidden 
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        pser.DeleteProd(id);
        return ResponseEntity.noContent().build(); 
    }

}