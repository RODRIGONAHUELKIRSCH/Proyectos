package quarkus.obraSocial.Mappers;

import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Dtos.PacienteDTO;
import quarkus.obraSocial.Entities.Paciente;

@ApplicationScoped
public class PacienteMapper {

	public Paciente PacienteConverter(PacienteDTO dtopaciente) {
		
		Paciente paciente= new Paciente();
		paciente.setNombre(dtopaciente.getNombre());
		paciente.setApellido(dtopaciente.getApellido());
		paciente.setEmail(dtopaciente.getEmail());
		paciente.setPassword(dtopaciente.getPassword());
		return paciente;
	}
	
	public PacienteDTO DtoConverter(Paciente paciente) {
		PacienteDTO dtopaciente=new PacienteDTO();
		dtopaciente.setNombre(paciente.getNombre());
		dtopaciente.setApellido(paciente.getApellido());
		return dtopaciente;
	}
	
	
}