package abbruzzese.webpage.webpage.server.webpage.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTONewsletter;
import abbruzzese.webpage.webpage.server.webpage.Mappers.NewsletterMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.NewsletterRepository;
import abbruzzese.webpage.webpage.server.webpage.Service.NewsletterService;
import jakarta.mail.MessagingException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController 
@RequestMapping("/api/newsletter/")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class NewsletterController {

    @Autowired
    NewsletterMapper nmap;

    @Autowired
    NewsletterRepository nrep;

    @Autowired
    NewsletterService nser;

    @PostMapping("/subscribe")
    public ResponseEntity<DTONewsletter> subscribe(@RequestBody DTONewsletter request) throws MessagingException {
        DTONewsletter createdNewsletter=nser.saveNewsletter(request);
        return new ResponseEntity<>(createdNewsletter, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<DTONewsletter>> getAllNewsletter() {
       List<DTONewsletter> newsletters=nser.getNewsletter();
       return ResponseEntity.ok(newsletters);
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNewsletter(@PathVariable String id){
        nser.DeleteNewsletter(id);
        return ResponseEntity.noContent().build();
    }
    
}