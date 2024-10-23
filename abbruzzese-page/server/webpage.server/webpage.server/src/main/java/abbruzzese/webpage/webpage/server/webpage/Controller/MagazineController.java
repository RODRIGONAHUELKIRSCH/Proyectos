package abbruzzese.webpage.webpage.server.webpage.Controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import abbruzzese.webpage.webpage.server.webpage.Repository.MagazineRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.Magazine;

@RestController 
@RequestMapping("/api/magazine/")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class MagazineController {

    @Autowired
    MagazineRepository mrep;


    @GetMapping("/magazines")
	public List<Magazine> findAllMagazines()
	{

		return (List<Magazine>) mrep.findAll();
	}
    
}