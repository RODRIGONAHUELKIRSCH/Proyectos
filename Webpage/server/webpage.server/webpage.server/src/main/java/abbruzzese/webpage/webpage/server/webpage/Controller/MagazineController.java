package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
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
import abbruzzese.webpage.webpage.server.webpage.CustomProperties.MagazineProperties;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOMagazine;
import abbruzzese.webpage.webpage.server.webpage.Repository.MagazineRepository;
import abbruzzese.webpage.webpage.server.webpage.Service.MagazineService;

@RestController 
@RequestMapping("/api/magazine/")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class MagazineController {

    @Autowired
    MagazineRepository mrep;

    @Autowired
    private MagazineService magazineService;

  @Value("${magazine.upload-dir}")
    private String uploadDir;

    @Autowired
    private MagazineProperties magazineProperties;

	@PostMapping("/upload")
    public ResponseEntity<DTOMagazine> uploadMagazine(
            @RequestParam("file") MultipartFile file,
            @RequestParam("nombre") String nombre,
            @RequestParam("descripcion") String descripcion,
            @RequestParam("año") String año,
            @RequestParam("enlace")String enlace) {

        // Define la ruta donde se almacenará la imagen
        //String uploadDir = "C:\\Users\\RINZLER\\GrupoAbbruzzese\\abbruzzese-page\\server\\webpage.server\\webpage.server\\magazineupload";
        // Crear el directorio si no existe
        File dir = new File(magazineProperties.getUploadDir());
        if (!dir.exists()) {
            dir.mkdirs(); // Crear el directorio
        }

        // Define el nombre del archivo y la ruta completa
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        String imagePath = magazineProperties.getUploadDir() + File.separator + fileName;

        try {
            // Guardar el archivo en el sistema de archivos
            file.transferTo(new File(imagePath));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build(); // Manejo de errores
        }

        // Crear el DTO y asignar los datos
        DTOMagazine dto = new DTOMagazine();
        dto.setNombre(nombre);
        dto.setDescripcion(descripcion);
        dto.setAño(año);
        dto.setImageString(fileName); // Guarda la ruta de la imagen
        dto.setEnlace(enlace);

        DTOMagazine savedMagazine = magazineService.saveMagazine(dto);
        return ResponseEntity.ok(savedMagazine);
    }

    @GetMapping
    public ResponseEntity<List<DTOMagazine>> getAllMagazines() {
        List<DTOMagazine> magazines = magazineService.getAllMagazines();
        return ResponseEntity.ok(magazines);
    }

    @GetMapping("/search/name/{nombre}")
    public ResponseEntity<DTOMagazine> getMagazineByName(@PathVariable String nombre) {
        return magazineService.getMagazineByName(nombre)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
	@PutMapping("/update/{id}")
    public ResponseEntity<DTOMagazine> updateMagazine(@PathVariable String id, @RequestBody DTOMagazine dto) {
		DTOMagazine updatedDtoMagazine=magazineService.updateMagazine(id, dto);
		if (updatedDtoMagazine!=null) {
			return ResponseEntity.ok(updatedDtoMagazine);
		}
		else{
			return ResponseEntity.notFound().build();
		}
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMagazine(@PathVariable String id) {
		magazineService.deleteMagazine(id);
        return ResponseEntity.noContent().build(); // Revista no encontrada
    }

@GetMapping("/images/{filename:.+}")
public ResponseEntity<Resource> serveImage(@PathVariable String filename) {
    try {
        //Path imagePath = Paths.get("C:\\Users\\RINZLER\\GrupoAbbruzzese\\abbruzzese-page\\server\\webpage.server\\webpage.server\\magazineupload")
        Path imagePath = Paths.get(uploadDir)
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

@GetMapping("/rango")
public List<DTOMagazine> getMagazinesByYearRange(@RequestParam String startYear, @RequestParam String endYear) {
    return magazineService.getMagazinesByYearRange(startYear, endYear);
}

@GetMapping("/ultima-revista/enlace")
public String obtenerEnlaceUltimaRevista() {
    return magazineService.obtenerUltimoEnlace();
}

@GetMapping("/ultima-revista")
public Map<String, Object> obtenerUltimaRevista() {
    return magazineService.obtenerUltimoLink(); // Retorna el Map con los 3 atributos
}

}