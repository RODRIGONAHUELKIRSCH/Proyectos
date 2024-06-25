package quarkus.obraSocial.Dtos;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DisponibilidadDTO {

	private Long id;

	private Long idMedico;
	

	private String ubicacion;
	
	
	private List<String> horariosConsulta=new ArrayList<String>();
	
	private MedicoDTO medicodto;
	
	private String espdto;
	
	private String areaEspecialidad;

	public DisponibilidadDTO() {
	}
	
	public DisponibilidadDTO( String ubicacion) {
		//this.id= id;
		this.ubicacion=ubicacion;

	}

//	public DisponibilidadDTO( String ubicacion,List<String> horarios) {
//		//this.id= id;
//		this.horariosConsulta=horarios;
//		this.ubicacion=ubicacion;
//
//	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}
	
	public List<String> getHorariosConsulta() {
		return horariosConsulta;
	}

	public void setHorariosConsulta(List<String> horariosConsulta) {
		this.horariosConsulta = horariosConsulta;
	}

	public MedicoDTO getMedicodto() {
		return medicodto;
	}

	public void setMedicodto(MedicoDTO medicodto) {
		this.medicodto = medicodto;
	}

	public Long getIdMedico() {
		return idMedico;
	}

	public void setIdMedico(Long idMedico) {
		this.idMedico = idMedico;
	}

	public String getEspdto() {
		return espdto;
	}

	public void setEspdto(String espdto) {
		this.espdto = espdto;
	}

	public String getAreaEspecialidad() {
		return areaEspecialidad;
	}

	public void setAreaEspecialidad(String areaEspecialidad) {
		this.areaEspecialidad = areaEspecialidad;
	}
	
}