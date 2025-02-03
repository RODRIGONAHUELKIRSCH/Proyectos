package abbruzzese.webpage.webpage.server.webpage.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DTOEventImage {

private String state;

private String eventImage;

public DTOEventImage(){}

public DTOEventImage(String State,String eventImage){
    this.state=State;
    this.eventImage=eventImage;
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