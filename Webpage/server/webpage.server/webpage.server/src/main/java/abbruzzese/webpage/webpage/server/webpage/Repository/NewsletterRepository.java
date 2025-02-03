package abbruzzese.webpage.webpage.server.webpage.Repository;

import org.springframework.data.repository.CrudRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.Newsletter;

public interface NewsletterRepository extends CrudRepository<Newsletter,String> {

}