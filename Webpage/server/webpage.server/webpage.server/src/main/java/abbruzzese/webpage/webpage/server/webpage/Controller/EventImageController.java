package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.Resource;
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

import abbruzzese.webpage.webpage.server.webpage.CustomProperties.EventImageProperties;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOEventImage;
import abbruzzese.webpage.webpage.server.webpage.Service.EventImageService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Value;

@RestController 
@RequestMapping("/api/eventImage/")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class EventImageController {

    @Autowired
    private EventImageService eventImageService;

        @Autowired
        private EventImageProperties eventImageProperties;



    @Value("${event.image.upload-dir}")
    private String uploadDir;

    @PostMapping("/upload")
    public ResponseEntity<DTOEventImage> uploadEventImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("state") String state        
           ) {

        // Define la ruta donde se almacenará la imagen
        System.out.println(uploadDir);// chequeo carga de ruta almacenamiento de imagen desde el properties segun  el entorno
        //String uploadDir = "C:\\Users\\RINZLER\\GrupoAbbruzzese\\abbruzzese-page\\server\\webpage.server\\webpage.server\\eventimageupload";
        // Crear el directorio si no existe
        File dir = new File(eventImageProperties.getUploadDir());
        if (!dir.exists()) {
            dir.mkdirs(); // Crear el directorio
        }

        // Define el nombre del archivo y la ruta completa
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        String imagePath = eventImageProperties.getUploadDir()+ File.separator + fileName;

        try {
            // Guardar el archivo en el sistema de archivos
            file.transferTo(new File(imagePath));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build(); // Manejo de errores
        }

        // Crear el DTO y asignar los datos
        DTOEventImage dto = new DTOEventImage();
        dto.setState(state);
        dto.setEventImage(fileName); // Guarda la ruta de la imagen

        DTOEventImage savedEventImage = eventImageService.saveEventImage(dto);
        return ResponseEntity.ok(savedEventImage);
    }

@GetMapping("/images/{filename:.+}")
public ResponseEntity<Resource> serveImage(@PathVariable String filename) {
    try {
        Path imagePath = Paths.get(eventImageProperties.getUploadDir())
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



    @GetMapping("/state/{state}")
    public ResponseEntity<List<DTOEventImage>> getEventImagesByState(@PathVariable String state) {
        List<DTOEventImage> images = eventImageService.getEventImagesByState(state);
        return ResponseEntity.ok(images);
    }


    @GetMapping
    public ResponseEntity<List<DTOEventImage>> getAllEventImages() {
        List<DTOEventImage> images = eventImageService.getAllEventImages();
        return ResponseEntity.ok(images);
    }

    @GetMapping("/active")
    public ResponseEntity<List<DTOEventImage>> getActiveImages() {
        List<DTOEventImage> activeImages = eventImageService.getEventImagesByState("Activo");
        return ResponseEntity.ok(activeImages);
    }

    @GetMapping("/inactive")
    public ResponseEntity<List<DTOEventImage>> getInactiveImages() {
        List<DTOEventImage> activeImages = eventImageService.getEventImagesByState("Inactivo");
        return ResponseEntity.ok(activeImages);
    }

    @PutMapping("/state")
    public ResponseEntity<DTOEventImage> updateImageStateByFileName(
            @RequestParam String fileName,
            @RequestParam String newState) {
            
        DTOEventImage updatedImage = eventImageService.updateEventImageStateByFileName(fileName, newState);
        return ResponseEntity.ok(updatedImage);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEventImage(@PathVariable String id) {
        eventImageService.deleteEventImage(id);
        return ResponseEntity.noContent().build(); // Imagen no encontrada
    }

    @PutMapping("/{id}")
    public ResponseEntity<DTOEventImage> updateEventImage(@PathVariable String id, @RequestBody DTOEventImage dto) {
        DTOEventImage updatedDtoEventImage=eventImageService.updateEventImage(id, dto);
        if(updatedDtoEventImage!=null){
            return ResponseEntity.ok(updatedDtoEventImage);
        }
        else{
            return ResponseEntity.noContent().build();
        }
    }
}