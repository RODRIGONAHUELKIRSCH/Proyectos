package abbruzzese.webpage.webpage.server.webpage.Mappers;

import org.springframework.stereotype.Component;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTONewsletter;
import abbruzzese.webpage.webpage.server.webpage.entities.Newsletter;

@Component(value = "NewsletterMapper")
public class NewsletterMapper {

    public DTONewsletter NewslettertoDTO(Newsletter newsletter){
        DTONewsletter dto=new DTONewsletter();
        dto.setEmail(newsletter.getEmail());
        return dto;
    }

    public Newsletter DTOtoNewsletter(DTONewsletter dto){
        Newsletter newsletter= new Newsletter();
        newsletter.setEmail(dto.getEmail());
        return newsletter;
    }

}