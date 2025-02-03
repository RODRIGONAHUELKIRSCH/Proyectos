package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOEventImage;
import abbruzzese.webpage.webpage.server.webpage.Mappers.EventImageMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.EventImageRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.EventImage;
import jakarta.persistence.EntityNotFoundException;

@Service
public class EventImageService {

    @Autowired
    EventImageRepository eirep;

    @Autowired
    EventImageMapper eimap;


    public DTOEventImage saveEventImage(DTOEventImage dto) {
        EventImage eImage = eimap.DTOtoEventImage(dto);
        eImage = eirep.save(eImage);
        return eimap.EventImagetoDTO(eImage);
    }

    public List<DTOEventImage> getAllEventImages() {
        return ((List<EventImage>) eirep.findAll()).stream()
                .map(eimap::EventImagetoDTO)
                .collect(Collectors.toList());
    }

    public List<DTOEventImage> getEventImagesByState(String state) {
        return eirep.findByState(state).stream()
                .map(eimap::EventImagetoDTO)
                .collect(Collectors.toList());
    }

    public DTOEventImage updateEventImage(String id, DTOEventImage dto) {
        Optional<EventImage> existingImageOpt = eirep.findById(id);
        if (existingImageOpt.isPresent()) {
            EventImage existingImage = existingImageOpt.get();
            existingImage.setState(dto.getState());
            existingImage.setEventImage(dto.getEventImage());
            eirep.save(existingImage);
            return eimap.EventImagetoDTO(existingImage);
        }
        return null;
    }

    public void deleteEventImage(String id) {

        eirep.deleteById(id);
    }

    public DTOEventImage updateEventImageStateByFileName(String fileName, String newState) {
        EventImage eventImage = eirep.findByEventImage(fileName)
                .orElseThrow(() -> new EntityNotFoundException("Imagen no encontrada"));

        // Actualiza el estado
        eventImage.setState(newState);
        
        // Guarda la entidad
        EventImage updatedImage = eirep.save(eventImage);

        // Usa el mapper para convertir a DTO
        return eimap.EventImagetoDTO(updatedImage);
    }

}