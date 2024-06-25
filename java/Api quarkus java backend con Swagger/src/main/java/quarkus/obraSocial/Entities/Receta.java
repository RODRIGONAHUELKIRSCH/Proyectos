package quarkus.obraSocial.Entities;

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
@Table(name="Receta")
@ApiModel(value="Receta",description="creacion de la tabla receta")
public class Receta extends PanacheEntity{

	@ApiModelProperty(notes="Turno para el cual se emite la receta")
    @OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id_turno",referencedColumnName="id")
	private Turno turno;
    
	@ApiModelProperty(notes="fecha hora de emision receta")
    @Column(name="fecha_hora")
    private String fecha_hora;

	public Turno getTurno() {
		return turno;
	}

	public void setTurno(Turno turno) {
		this.turno = turno;
	}

	public String getFecha_hora() {
		return fecha_hora;
	}

	public void setFecha_hora(String fecha_hora) {
		this.fecha_hora = fecha_hora;
	}
    
}