package quarkus.obraSocial.Mappers;

import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Dtos.RecetaDTO;
import quarkus.obraSocial.Dtos.TurnoDTO;
import quarkus.obraSocial.Entities.Receta;

@ApplicationScoped
public class RecetaMapper {

    public RecetaDTO recetaDTO(Receta receta) {
        RecetaDTO recetadto = new RecetaDTO();
        recetadto.setFecha_hora(receta.getFecha_hora());
        recetadto.setTurnodto(new TurnoDTO(receta.getTurno().getEstado(),receta.getTurno().getMotivo(),receta.getTurno().getFecha_hora()));
        
        return recetadto;
    }
	
    public Receta dtoareceta(RecetaDTO recetadto) {
    	
    	Receta receta=new Receta();
    	receta.setFecha_hora(recetadto.getFecha_hora());
    	return receta;
    	
    }
	
}