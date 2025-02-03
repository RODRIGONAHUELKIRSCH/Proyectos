package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTONewsletter;
import abbruzzese.webpage.webpage.server.webpage.EmailSenderConfig.MailManager;
import abbruzzese.webpage.webpage.server.webpage.Mappers.NewsletterMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.NewsletterRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.Newsletter;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;

@Service
public class NewsletterService {

    @Autowired 
    NewsletterMapper nmap;

    @Autowired
    NewsletterRepository nrep;

    @Autowired
    private MailManager mailManager;

@Transactional
    public DTONewsletter saveNewsletter(DTONewsletter dtoNewsletter) throws MessagingException {
        Newsletter news = nmap.DTOtoNewsletter(dtoNewsletter);
        news.setEmail(dtoNewsletter.getEmail()); // Establece la contraseña codificada
        nrep.save(news);
        mailManager.sendWelcomeEmail(dtoNewsletter.getEmail());
        return nmap.NewslettertoDTO(news);
    }

    @Transactional
    public List<DTONewsletter> getNewsletter(){
        return ((List<Newsletter>) nrep.findAll())
                .stream()
                .map(nmap::NewslettertoDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public void DeleteNewsletter(String id){
        nrep.deleteById(id);
    }

}