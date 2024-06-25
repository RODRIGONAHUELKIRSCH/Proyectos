package quarkus.obraSocial.Services;

import java.util.List;
import java.util.stream.Collectors;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.WebApplicationException;
import quarkus.obraSocial.Repositories.RecetaRepository;
import quarkus.obraSocial.Repositories.TurnoRepository;
import quarkus.obraSocial.Dtos.RecetaDTO;
import quarkus.obraSocial.Entities.Receta;
import quarkus.obraSocial.Entities.Turno;
import quarkus.obraSocial.Mappers.RecetaMapper;


@ApplicationScoped
public class RecetaService {

    @Inject
    TurnoRepository TurnoRepository;

    @Inject
   RecetaRepository recetaRepository;

    @Inject
    RecetaMapper RecetaMapper;

    @Transactional
    public RecetaDTO agregarReceta(RecetaDTO recetadto) {
         Receta receta = RecetaMapper.dtoareceta(recetadto);
  	  Turno turno = TurnoRepository.findById(recetadto.getIdturno());
       if (turno == null) {
           throw new IllegalArgumentException("Especialidad no encontrada con el id: " + receta.getTurno().id);
       }
       receta.setTurno(turno);;
        recetaRepository.persist(receta);
        return RecetaMapper.recetaDTO(receta);
    }
    @Transactional
    public List<RecetaDTO> listarRecetas() {
        List<Receta> recetas = recetaRepository.listAll();
        return recetas.stream().map(RecetaMapper::recetaDTO).collect(Collectors.toList());
    }
    
    public RecetaDTO obtenerreceta(Long id) {
        Receta receta = recetaRepository.findById(id);

        return RecetaMapper.recetaDTO(receta);
    }
	
}
