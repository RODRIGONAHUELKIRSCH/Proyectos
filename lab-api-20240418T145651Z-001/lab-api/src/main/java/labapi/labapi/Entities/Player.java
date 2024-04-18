package labapi.labapi.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Player {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="idJugador",unique=true,nullable=false)
	private Long idJugador;
	
	@NotNull(message="Player name cannot be null")
	@Column(name="NombreJugador",unique=false, nullable=false)
	private String nombreJugador;
	
	
	@NotNull(message="Position name cannot be null")
	@Column(name="Posicion",unique=false, nullable=false)
	private String posicion;
	

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "Jugadores")	
	@JsonIgnore
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Team team;
	
	public Team getTeam() {
		return team;
	}
	public void setTeam(Team team) {
		this.team = team;
	}
	public Long getIdJugador() {
		return idJugador;
	}
	public void setIdJugador(Long idJugador) {
		this.idJugador = idJugador;
	}
	public String getNombreJugador() {
		return nombreJugador;
	}
	public void setNombreJugador(String nombreJugador) {
		this.nombreJugador = nombreJugador;
	}
	public String getPosicion() {
		return posicion;
	}
	public void setPosicion(String posicion) {
		this.posicion = posicion;
	}	
}