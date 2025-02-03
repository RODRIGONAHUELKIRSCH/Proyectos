package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
//import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import abbruzzese.webpage.webpage.server.webpage.CustomProperties.ProductProperties;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOProduct;
import abbruzzese.webpage.webpage.server.webpage.Mappers.ProductMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.ProductRepository;
import abbruzzese.webpage.webpage.server.webpage.Service.ProductService;

@RestController 
@RequestMapping("/api/product/")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class ProductController {

    @Autowired
    ProductService pser;

    @Autowired
    ProductRepository prep;

    @Autowired
    ProductMapper pmap;

    @Autowired
    private ProductProperties productProperties;

    @Value("${product.upload-dir}")
    private String uploadDir;

    @GetMapping
    public ResponseEntity<List<DTOProduct>> getAllProducts() {
        List<DTOProduct> products = pser.getProducts();
        return ResponseEntity.ok(products); 
    }

    @PutMapping("/{id}") 
    public ResponseEntity<DTOProduct> updateProduct(@PathVariable String id, @RequestBody DTOProduct productDTO) {
        DTOProduct updatedProduct = pser.updateProduct(id, productDTO);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        pser.DeleteProd(id);
        return ResponseEntity.noContent().build(); 
    }

    @GetMapping("/productimages/{filename:.+}")
public ResponseEntity<Resource> serveImage(@PathVariable String filename) {
    try {
        //Path imagePath = Paths.get("C:\\Users\\RINZLER\\GrupoAbbruzzese\\abbruzzese-page\\server\\webpage.server\\webpage.server\\productimageupload")
        Path imagePath = Paths.get(productProperties.getUploadDir())
                              .resolve(filename)
                              .normalize();
        Resource resource = new UrlResource(imagePath.toUri());

        if (resource.exists()) {
            // Detecta el tipo de contenido del archivo
            String contentType = Files.probeContentType(imagePath);
            if (contentType == null) {
                contentType = "application/octet-stream"; // Valor predeterminado si el tipo no es detectable
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.internalServerError().build();
    }

}

    @PostMapping("/upload")
    public ResponseEntity<DTOProduct> uploadEventImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("nombre") String nombre,
            @RequestParam("marca") String marca,
            @RequestParam("categoria") String categoria
            
           ) {

        // Define la ruta donde se almacenará la imagen
        //String uploadDir = "C:\\Users\\RINZLER\\GrupoAbbruzzese\\abbruzzese-page\\server\\webpage.server\\webpage.server\\productimageupload";
        // Crear el directorio si no existe
        File dir = new File(productProperties.getUploadDir());
        if (!dir.exists()) {
            dir.mkdirs(); // Crear el directorio
        }

        // Define el nombre del archivo y la ruta completa
        //String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        String fileName = file.getOriginalFilename();
        String imagePath = productProperties.getUploadDir() + File.separator + fileName;

        try {
            // Guardar el archivo en el sistema de archivos
            file.transferTo(new File(imagePath));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build(); // Manejo de errores
        }

        // Crear el DTO y asignar los datos
        DTOProduct dto = new DTOProduct();
        dto.setNombre(nombre);
        dto.setMarca(marca);
        dto.setCategoria(categoria);
        dto.setImageproduct(fileName);

        DTOProduct savedEventImage = pser.saveProduct(dto);
        return ResponseEntity.ok(savedEventImage);
    }

    @GetMapping("/search/name/{nombre}")
    public ResponseEntity<DTOProduct> getProductByName(@PathVariable String nombre) {
        return pser.getProductByName(nombre)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    

    @GetMapping("/search/categoria")
    public List<String> getMethodName(@RequestParam String categoria) {  
        // Decodifica el parámetro recibido
    String decodedCategoria = URLDecoder.decode(categoria, StandardCharsets.UTF_8);
        return pser.getProductsByCategoria(decodedCategoria);
    }
    
    
}