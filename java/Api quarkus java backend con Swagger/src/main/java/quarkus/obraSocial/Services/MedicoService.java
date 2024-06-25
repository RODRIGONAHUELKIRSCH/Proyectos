package quarkus.obraSocial.Services;

import java.util.List;
import java.util.stream.Collectors;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import quarkus.obraSocial.Dtos.MedicoDTO;
import quarkus.obraSocial.Entities.Especialidad;
import quarkus.obraSocial.Entities.Medico;
import quarkus.obraSocial.Mappers.MedicoMapper;
import quarkus.obraSocial.Repositories.EspecialidadRepository;
import quarkus.obraSocial.Repositories.MedicoRepository;

@ApplicationScoped
public class MedicoService {

    @Inject
    MedicoRepository medicoRepository;
    
    @Inject
    MedicoMapper medicoMapper;
    
    @Inject
    EspecialidadRepository especialidadRepository;

    @Transactional 
    public MedicoDTO crearMedico(MedicoDTO medicoDTO) {
    	  if (medicoDTO.getApellido() == null || medicoDTO.getApellido().isEmpty()) {
    	        throw new IllegalArgumentException("El apellido del médico es obligatorio.");
    	    }

        // Convertir MedicoDTO a Medico
    	Medico medico = medicoMapper.medicoConverter(medicoDTO);
    	
        // Buscar la especialidad por su id
    	
    	   Especialidad especialidad = especialidadRepository.findById(medicoDTO.getIdEspecialidad());
           if (especialidad == null) {
               throw new IllegalArgumentException("Especialidad no encontrada con el id: " + medicoDTO.getIdEspecialidad());
           }
           medico.setEspecialidad(especialidad);

        // Persistir el medico en la bd
        medicoRepository.persist(medico);

        // Convertir medico a MedicoDTO y return
        return medicoMapper.convertirDto(medico);
    }
    
    @Transactional
    public List<MedicoDTO> listarMedicos() {
        List<Medico> medicos = medicoRepository.listAll();
        return medicos.stream().map(medicoMapper::convertirDto).collect(Collectors.toList());
    }
    
    @Transactional
    public MedicoDTO actualizarMedico(Long id, MedicoDTO medicoDTO) {
        Medico medico = medicoRepository.findById(id);
        if (medico == null) {
            return null;
        }
        if (medicoDTO.getNombre() != null) {
            medico.setNombre(medicoDTO.getNombre());
        }
        if (medicoDTO.getApellido() != null) {
            medico.setApellido(medicoDTO.getApellido());
        }
        if (medicoDTO.getEmail() != null) {
            medico.setEmail(medicoDTO.getEmail());
        }
        if (medicoDTO.getPassword() != null) {
            medico.setPassword(medicoDTO.getPassword());
        }
        if (medicoDTO.getFoto() != null) {
            medico.setFoto(medicoDTO.getFoto());
        }
        if (medicoDTO.getIdEspecialidad() != null) {
            Especialidad especialidad = especialidadRepository.findById(medicoDTO.getIdEspecialidad());
            if (especialidad != null) {
                medico.setEspecialidad(especialidad);
            }
        }
        medicoRepository.persist(medico);
        return medicoMapper.convertirDto(medico);
    }
    
    @Transactional
    public boolean eliminarMedico(Long id) {
        Medico medico = medicoRepository.findById(id);
        if (medico != null) {
            medicoRepository.delete(medico);
            return true;
        }
        return false;
    }
    
    @Transactional
    public MedicoDTO obtenerMedicoDTOPorId(Medico medic) {
        Medico medico = medicoRepository.findById(medic.id);
        if (medico != null) {
            return medicoMapper.convertirDto(medico);
        } else {
            return null;
        }
    }

}