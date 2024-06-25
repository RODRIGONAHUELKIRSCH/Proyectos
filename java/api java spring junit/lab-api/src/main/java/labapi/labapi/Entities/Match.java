package labapi.labapi.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity(name="Football_Game")
public class Match {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="matchid",unique=true,nullable=false)
	private Long matchid;


	@NotNull(message="HomeTeam cannot be null.")
	@Column(name="hometeam",unique=false,nullable=false)
	private String SeleccionLocal;
	


	@Column(name="homegoals",unique=false,nullable=true)
	private Integer homegoals;

	@NotNull(message="AwayTeam cannot be null.")
	@Column(name="awayteam",unique=false,nullable=false)
	private String SeleccionVisitante;
	
	@Column(name="awaygoals",unique=false,nullable=true)
	private Integer awaygoals;
	
	@Column(name="result",unique=false,nullable=true)
	private String result;
	
	public Long getMatchid() {
		return matchid;
	}

	public void setMatchid(Long matchid) {
		this.matchid = matchid;
	}

	public Integer getHomegoals() {
		return homegoals;
	}

	public void setHomegoals(Integer homegoals) {
		this.homegoals = homegoals;
	}

	public Integer getAwaygoals() {
		return awaygoals;
	}

	public void setAwaygoals(Integer awaygoals) {
		this.awaygoals = awaygoals;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String string) {
		this.result = string;
	}
	public String getSeleccionLocal() {
		return SeleccionLocal;
	}

	public void setSeleccionLocal(String seleccionLocal) {
		SeleccionLocal = seleccionLocal;
	}

	public String getSeleccionVisitante() {
		return SeleccionVisitante;
	}

	public void setSeleccionVisitante(String seleccionVisitante) {
		SeleccionVisitante = seleccionVisitante;
	}
}