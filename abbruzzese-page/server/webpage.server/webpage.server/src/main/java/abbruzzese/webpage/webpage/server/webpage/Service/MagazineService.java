package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.Repository.MagazineRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.Magazine;
import jakarta.transaction.Transactional;

@Service
public class MagazineService {

    @Autowired
    MagazineRepository mrep;

    @Transactional
	public List<Magazine> getMagazines()
	{	
		return (List<Magazine>) mrep.findAll();
	}

}