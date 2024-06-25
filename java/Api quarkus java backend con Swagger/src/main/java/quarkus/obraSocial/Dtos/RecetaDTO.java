package quarkus.obraSocial.Dtos;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class RecetaDTO {

	private Long id;
	
	private Long idturno;
	
	private TurnoDTO turnodto;
	
	private String fecha_hora;
	
	public RecetaDTO() {}
	
	public RecetaDTO(String fecha_hora) {
		this.fecha_hora=fecha_hora;		
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdturno() {
		return idturno;
	}

	public void setIdturno(Long idturno) {
		this.idturno = idturno;
	}

	public TurnoDTO getTurnodto() {
		return turnodto;
	}

	public void setTurnodto(TurnoDTO turnodto) {
		this.turnodto = turnodto;
	}

	public String getFecha_hora() {
		return fecha_hora;
	}

	public void setFecha_hora(String fecha_hora) {
		this.fecha_hora = fecha_hora;
	}

}