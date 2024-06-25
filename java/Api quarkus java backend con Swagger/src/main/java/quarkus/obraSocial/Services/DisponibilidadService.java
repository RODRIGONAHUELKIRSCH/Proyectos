package quarkus.obraSocial.Services;


import java.util.List;
import java.util.stream.Collectors;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import quarkus.obraSocial.Dtos.DisponibilidadDTO;
import quarkus.obraSocial.Entities.Disponibilidad;
import quarkus.obraSocial.Entities.Medico;
import quarkus.obraSocial.Mappers.DisponibilidadMapper;
import quarkus.obraSocial.Repositories.DisponibilidadRepository;
import quarkus.obraSocial.Repositories.MedicoRepository;

@ApplicationScoped
public class DisponibilidadService {

    @Inject
    DisponibilidadRepository disponibilidadRepository;

    @Inject
    MedicoRepository medicoRepository;

    @Inject
    DisponibilidadMapper disponibilidadMapper;

    @Transactional
    public DisponibilidadDTO agregarDisponibilidad(DisponibilidadDTO disponibilidadDTO) {
        Disponibilidad disponibilidad = disponibilidadMapper.dtoADisponibilidad(disponibilidadDTO);
  	   Medico medico = medicoRepository.findById(disponibilidadDTO.getIdMedico());
       if (medico == null) {
           throw new IllegalArgumentException("Especialidad no encontrada con el id: " + disponibilidadDTO.getMedicodto().getIdMedico());
       }
       disponibilidad.setMed(medico);
        disponibilidadRepository.persist(disponibilidad);
        return disponibilidadMapper.disponibilidadADto(disponibilidad);
    }
    @Transactional
    public List<DisponibilidadDTO> listarDisponibilidades() {
        List<Disponibilidad> disp = disponibilidadRepository.listAll();
        return disp.stream().map(disponibilidadMapper::disponibilidadADto).collect(Collectors.toList());
    }
    
    @Transactional
    public List<DisponibilidadDTO> listarEspecialista() {
        List<Disponibilidad> disp = disponibilidadRepository.listAll();
        return disp.stream().map(disponibilidadMapper::listardispEspecialista).collect(Collectors.toList());
    }
    
//    public List<MedicoDTO> listarMedicos() {
//        List<Medico> medicos = medicoRepository.listAll();
//        return medicos.stream().map(medicoMapper::convertirDto).collect(Collectors.toList());
//    }
}
