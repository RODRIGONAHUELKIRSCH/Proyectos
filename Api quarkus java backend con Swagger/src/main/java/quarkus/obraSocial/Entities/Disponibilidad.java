package quarkus.obraSocial.Entities;

import java.util.ArrayList;
import java.util.List;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Disponibilidad")
@ApiModel(value="Disponibilidad",description="Creacion tabla disponibilidad")
public class Disponibilidad extends PanacheEntity  {

	@ApiModelProperty(notes="disponibilidad del medico")
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id_medico",referencedColumnName="id")
	private Medico med;
	
	@ApiModelProperty(notes="horarios de consulta")
	@Column(name="Horarios",nullable=false)
	private List<String> horarios_consulta=new ArrayList<String>();

	@ApiModelProperty(notes="ubicacion de la consulta")
	@Column(name = "ubicacion", nullable = false)
	private String ubicacion;

	// Getters y setters

	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}
	
	public List<String> getHorarios_consulta() {
		return horarios_consulta;
	}

	public void setHorarios_consulta(List<String> horarios_consulta) {
		this.horarios_consulta = horarios_consulta;
	}
	
	public Medico getMed() {
		return med;
	}

	public void setMed(Medico med) {
		this.med = med;
	}

}