package quarkus.obraSocial.Mappers;

import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Dtos.DisponibilidadDTO;
import quarkus.obraSocial.Dtos.MedicoDTO;
import quarkus.obraSocial.Entities.Disponibilidad;

@ApplicationScoped
public class DisponibilidadMapper {



	public DisponibilidadDTO disponibilidadADto(Disponibilidad disponibilidad) {
		DisponibilidadDTO dto = new DisponibilidadDTO();
		dto.setMedicodto(new MedicoDTO(disponibilidad.getMed().getNombre(),disponibilidad.getMed().getApellido(),disponibilidad.getMed().getFoto()));;
		//dto.setMeddto(disponibilidad.getMed());
		//dto.setEspdto(disponibilidad.getMed().getEspecialidad().getArea_especialidad());
		dto.setUbicacion(disponibilidad.getUbicacion());
		dto.setHorariosConsulta(disponibilidad.getHorarios_consulta());
		return dto;
	}

	public Disponibilidad dtoADisponibilidad(DisponibilidadDTO dto) {
		Disponibilidad disponibilidad = new Disponibilidad();

		disponibilidad.setUbicacion(dto.getUbicacion());
		disponibilidad.setHorarios_consulta(dto.getHorariosConsulta());
		return disponibilidad;
	}

	public DisponibilidadDTO listardispEspecialista(Disponibilidad disp) {
		DisponibilidadDTO dto = new DisponibilidadDTO();
		dto.setMedicodto(new MedicoDTO(disp.getMed().getNombre(),disp.getMed().getApellido(),disp.getMed().getFoto()));;
		//dto.setMeddto(disponibilidad.getMed());
		dto.setAreaEspecialidad(disp.getMed().getEspecialidad().getArea_especialidad());
		dto.setUbicacion(disp.getUbicacion());
		dto.setHorariosConsulta(disp.getHorarios_consulta());
		return dto;
	}
}
