package quarkus.obraSocial.Services;

import java.util.List;
import java.util.stream.Collectors;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import quarkus.obraSocial.Dtos.EspecialidadDTO;
import quarkus.obraSocial.Entities.Especialidad;
import quarkus.obraSocial.Mappers.EspecialidadMapper;
import quarkus.obraSocial.Repositories.EspecialidadRepository;

@ApplicationScoped
public class EspecialidadService {

    @Inject
    EspecialidadRepository especialidadRepository;
    
    @Inject 
    EspecialidadMapper especialidadMapper;

    public List<EspecialidadDTO> listarTodas() {
        return especialidadRepository.listAll().stream()
                .map(especialidadMapper::toDTO)
                .collect(Collectors.toList());
    } 

    @Transactional
    public EspecialidadDTO crearEspecialidad(EspecialidadDTO especialidadDTO) {
        if (especialidadDTO.getAreaEspecialidad() == null || especialidadDTO.getAreaEspecialidad().isEmpty()) {
            throw new IllegalArgumentException("El área de especialidad no puede estar vacía.");
        }
        Especialidad especialidad = especialidadMapper.toEspecialidad(especialidadDTO);
        especialidadRepository.persist(especialidad);
        return especialidadMapper.toDTO(especialidad);
    }

    @Transactional
    public boolean eliminarEspecialidad(Long id) {
        return especialidadRepository.deleteById(id);
    }
}