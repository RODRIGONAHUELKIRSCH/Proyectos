package abbruzzese.webpage.webpage.server.webpage.entities;

import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EventImage {

    @Id
    private String id=UUID.randomUUID().toString();

    @Column(name="Estado",nullable = false)
    private String state;

    @Column(name="EventImage",nullable = false)
    private String eventImage;

    public EventImage(){}

    public EventImage(String State,String eventImage){

            this.state=State;
            this.eventImage=eventImage;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getEventImage() {
        return eventImage;
    }

    public void setEventImage(String eventImage) {
        this.eventImage = eventImage;
    }

}