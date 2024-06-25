package quarkus.obraSocial.Dtos;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class TurnoDTO {
    
    private Long id;
    
    private Long disponibilidadId;
    
    private String estado;
    
    private String motivo;
    
    private PacienteDTO pacientedto;
    
    private DisponibilidadDTO dispdto;
    
    private Long pacienteid;
    
    private String fecha_hora;
    
    private Long idmedico;
    public TurnoDTO() {}
    
    public TurnoDTO(String estado,String motivo,String fecha_hora) {
    	
    	this.estado=estado;
    	this.motivo=motivo;
    	this.fecha_hora=fecha_hora;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDisponibilidadId() {
		return disponibilidadId;
	}

	public void setDisponibilidadId(Long disponibilidadId) {
		this.disponibilidadId = disponibilidadId;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public PacienteDTO getPacientedto() {
		return pacientedto;
	}

	public void setPacientedto(PacienteDTO pacientedto) {
		this.pacientedto = pacientedto;
	}

	public DisponibilidadDTO getDispdto() {
		return dispdto;
	}

	public void setDispdto(DisponibilidadDTO dispdto) {
		this.dispdto = dispdto;
	}

	public Long getPacienteid() {
		return pacienteid;
	}

	public void setPacienteid(Long pacienteid) {
		this.pacienteid = pacienteid;
	}

	public String getFecha_hora() {
		return fecha_hora;
	}

	public void setFecha_hora(String fecha_hora) {
		this.fecha_hora = fecha_hora;
	}

	public Long getIdmedico() {
		return idmedico;
	}

	public void setIdmedico(Long idmedico) {
		this.idmedico = idmedico;
	}
		
}