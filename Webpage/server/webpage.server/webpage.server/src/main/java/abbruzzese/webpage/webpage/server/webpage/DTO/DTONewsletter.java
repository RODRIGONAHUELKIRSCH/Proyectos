package abbruzzese.webpage.webpage.server.webpage.DTO;

public class DTONewsletter {
    
    private String email;

    public DTONewsletter(){}

    DTONewsletter(String Email){
        this.email=Email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
  
}