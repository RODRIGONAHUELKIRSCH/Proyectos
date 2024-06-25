package quarkus.obraSocial.Mappers;

import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Dtos.DisponibilidadDTO;
import quarkus.obraSocial.Dtos.PacienteDTO;
import quarkus.obraSocial.Dtos.TurnoDTO;
import quarkus.obraSocial.Entities.Turno;

@ApplicationScoped
public class TurnoMapper {
	
    public TurnoDTO turnoDTO(Turno turno) {
        TurnoDTO turnodto = new TurnoDTO();
        turnodto.setDispdto(new DisponibilidadDTO(turno.getDisponibilidad().getUbicacion()));
        turnodto.setIdmedico(turno.getDisponibilidad().getMed().id);
        turnodto.setMotivo(turno.getMotivo());
        turnodto.setEstado(turno.getEstado());
        turnodto.setFecha_hora(turno.getFecha_hora());
        turnodto.setPacientedto(new PacienteDTO(turno.getPaciente().getNombre(),turno.getPaciente().getApellido()));
        return turnodto;
    }
	
    public Turno dtoaturno(TurnoDTO turnodto) {
    	Turno turno=new Turno();
    	turno.setEstado(turnodto.getEstado());
    	turno.setMotivo(turnodto.getMotivo());   	
    	turno.setFecha_hora(turnodto.getFecha_hora());
    	turno.setIdmedico(turnodto.getIdmedico());
    	return turno;
    }
    
}