package abbruzzese.webpage.webpage.server.webpage.Mappers;

import org.springframework.stereotype.Component;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOEventImage;
import abbruzzese.webpage.webpage.server.webpage.entities.EventImage;

@Component(value="EventImageMapper")
public class EventImageMapper {

public EventImage DTOtoEventImage(DTOEventImage dto){
    EventImage eImage=new EventImage();
    eImage.setState(dto.getState());
    eImage.setEventImage(dto.getEventImage());
    return eImage;
}

public DTOEventImage EventImagetoDTO(EventImage eImage){
    DTOEventImage dto=new DTOEventImage();
    dto.setState(eImage.getState());
    dto.setEventImage(eImage.getEventImage());
    return dto;
}

}