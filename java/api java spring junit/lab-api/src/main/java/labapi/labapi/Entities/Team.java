package labapi.labapi.Entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
//import org.springframework.validation.annotation.Validated;
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
//@JsonIgnoreProperties("hibernateLazyInitializer")
public class Team {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="idEquipo",unique=true, nullable=false)
	private Long idEquipo;

	public Long getIdEquipo() {
		return idEquipo;
	}

	public void setIdEquipo(Long idEquipo) {
		this.idEquipo = idEquipo;
	}

	public String getNombreEquipo() {
		return nombreEquipo;
	}

	public void setNombreEquipo(String nombreEquipo) {
		this.nombreEquipo = nombreEquipo;
	}

	@Column(name="NombreEquipo",unique=false, nullable=false)
	private String nombreEquipo;

	
    @OneToMany(cascade=CascadeType.ALL,mappedBy="team")
    private List<Player> players;
	
//	@JsonIgnore	
//    @OneToMany(mappedBy="teamp")
//    private List<Points> Point;
	
	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

}