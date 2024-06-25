package quarkus.obraSocial.Entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Turno")
@ApiModel(value="Turno",description="creacion tabla turno")
public class Turno extends PanacheEntity {
	
	@ApiModelProperty(notes="disponibilidad del turno")
    @ManyToOne(targetEntity=Disponibilidad.class,fetch=FetchType.LAZY)
    private Disponibilidad disponibilidad;
    
	@ApiModelProperty(notes="estado del turno")
    @Column(name="estado_turno")
    private String estado;

	@ApiModelProperty(notes="motivo del turno")
    @Column(name = "motivo")
    private String motivo;

	@ApiModelProperty(notes="paciente que reserva turnos")
    @OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id_paciente",referencedColumnName="id")
    private Paciente paciente;

	@ApiModelProperty(notes="fecha y hora del turno")
    @Column(name="fecha_hora")
    private String fecha_hora;
    
	@ApiModelProperty(notes="id del medico")
    @Column(name="idmedico")
    private Long idmedico;

    public Disponibilidad getDisponibilidad() {
		return disponibilidad;
	}

	public void setDisponibilidad(Disponibilidad disponibilidad) {
		this.disponibilidad = disponibilidad;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
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