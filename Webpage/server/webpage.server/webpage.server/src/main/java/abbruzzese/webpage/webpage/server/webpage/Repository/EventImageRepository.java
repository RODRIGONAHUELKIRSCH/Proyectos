package abbruzzese.webpage.webpage.server.webpage.Repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.EventImage;

public interface EventImageRepository extends CrudRepository<EventImage,String> {

    List<EventImage> findByState(String state);

    Optional<EventImage> findByEventImage(String eventImage);

}