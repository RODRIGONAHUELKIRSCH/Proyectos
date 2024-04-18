package labapi.labapi.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity(name="Group_game")
public class Group {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="groupid",unique=true,nullable=false)
	private Long groupid;
	
	@NotNull(message="Group cannot be null")
	@Column(name="Grupo",unique=false)
	private String grupo;

	@NotNull(message="Team cannot be null.")
	@Column(name="team1",unique=false,nullable=false)
	private String team1;
	
	@Column(name="points1",unique=false)
	private Integer points1;
	
	@NotNull(message="Team cannot be null.")
	@Column(name="team2",unique=false,nullable=false)
	private String team2;
	
	@Column(name="points2",unique=false)
	private Integer points2;
	
	@NotNull(message="Team cannot be null.")
	@Column(name="team3",unique=false,nullable=false)
	private String team3;
	
	@Column(name="points3",unique=false)
	private Integer points3;
	
	@NotNull(message="Team cannot be null.")
	@Column(name="team4",unique=false,nullable=false)
	private String team4;
		
	@Column(name="points4",unique=false)
	private Integer points4;
	
	@Column(name="Group_First",unique=false)
	private Integer primero;
	
	
	@Column(name="Group_Second",unique=false)
	private Integer segundo;


	@Column(name="Goal_Average1",unique=false)
	private Integer ga1;
	
	@Column(name="Goal_Average2",unique=false)
	private Integer ga2;
	
	@Column(name="Goal_Average3",unique=false)
	private Integer ga3;
	
	@Column(name="Goal_Average4",unique=false)
	private Integer ga4;


	public Long getGroupid() {
		return groupid;
	}

	public void setGroupid(Long groupid) {
		this.groupid = groupid;
	}

	public String getTeam1() {
		return team1;
	}

	public void setTeam1(String team1) {
		this.team1 = team1;
	}

	public Integer getPoints1() {
		return points1;
	}

	public void setPoints1(Integer points1) {
		this.points1 = points1;
	}

	public String getTeam2() {
		return team2;
	}

	public void setTeam2(String team2) {
		this.team2 = team2;
	}

	public Integer getPoints2() {
		return points2;
	}

	public void setPoints2(Integer points2) {
		this.points2 = points2;
	}

	public String getTeam3() {
		return team3;
	}

	public void setTeam3(String team3) {
		this.team3 = team3;
	}

	public Integer getPoints3() {
		return points3;
	}

	public void setPoints3(Integer points3) {
		this.points3 = points3;
	}

	public String getTeam4() {
		return team4;
	}

	public void setTeam4(String team4) {
		this.team4 = team4;
	}

	public Integer getPoints4() {
		return points4;
	}

	public void setPoints4(Integer points4) {
		this.points4 = points4;
	}

	public Integer getPrimero() {
		return primero;
	}

	public void setPrimero(Integer primero) {
		this.primero = primero;
	}

	public Integer getSegundo() {
		return segundo;
	}

	public void setSegundo(Integer segundo) {
		this.segundo = segundo;
	}
	
	public String getGrupo() {
		return grupo;
	}

	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}
	
	public Integer getGa1() {
		return ga1;
	}

	public void setGa1(Integer ga1) {
		this.ga1 = ga1;
	}
	public Integer getGa2() {
		return ga2;
	}

	public void setGa2(Integer ga2) {
		this.ga2 = ga2;
	}

	public Integer getGa3() {
		return ga3;
	}

	public void setGa3(Integer ga3) {
		this.ga3 = ga3;
	}

	public Integer getGa4() {
		return ga4;
	}

	public void setGa4(Integer ga4) {
		this.ga4 = ga4;
	}
	
}