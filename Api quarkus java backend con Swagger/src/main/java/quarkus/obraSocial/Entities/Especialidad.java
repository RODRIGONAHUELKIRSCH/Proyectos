package quarkus.obraSocial.Entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Especialidad")
@ApiModel(value="Especialidad",description="Creacion tabla especialidad")
public class Especialidad extends PanacheEntity{

	@ApiModelProperty(notes="nombre de la especialidad del medico")
	@Column(name="area_especialidad",nullable=false)
	private String area_especialidad;
	
	public String getArea_especialidad() {
		return area_especialidad;
	}

	public void setArea_especialidad(String area_especialidad) {
		this.area_especialidad = area_especialidad;
	}
	
}