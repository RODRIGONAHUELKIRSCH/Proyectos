package labapi.labapi.Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import labapi.labapi.Entities.Player;
import labapi.labapi.Entities.Team;
import labapi.labapi.Repository.PlayerInterface;
import labapi.labapi.Repository.TeamInterface;

@SpringBootTest
 class TeamServiceTest {

	@Mock
	TeamInterface teaminterface;

	@Mock
	PlayerInterface playerinterface;
	
	@Mock
	PlayerService pservice;
	
	@Mock
	private List<Team> teams;
	
	@InjectMocks
	private TeamService tservice;
	
	@Mock
	private Player jugador;
	
	@Mock
	private Team team;
	
	@BeforeEach
	public void setUp() 
	{
		long id=11;
		team=new Team();
		team.setIdEquipo(id);
		team.setNombreEquipo("Argentina");
		
		jugador=new Player();
		
		jugador=new Player();
		jugador.setIdJugador(id);
		jugador.setNombreJugador("Dibu Martinez");
		jugador.setPosicion("Arquero");
		
		teams.add(team);
		
		tservice=new TeamService();
		
		MockitoAnnotations.openMocks(this);
	}
	
	
	@Test
	void saveTeam() 
	{
		when(teaminterface.save(team)).thenReturn(team);;
		
		assertEquals(team,tservice.saveTeam(team));
	}
	
	@Test
	void saveAllTeam() 
	{
		when(teaminterface.saveAll(teams)).thenReturn(teams);
		
		assertEquals(teams,tservice.saveAllTeam(teams));
	}
	
	@Test
	void getTeams()
	{

		 when(teaminterface.findAll()).thenReturn(teams);
		
		assertEquals(teams,tservice.getTeams());
	}
	
	@Test
	void getTeambyId() 
	{
		when(teaminterface.findById(team.getIdEquipo())).thenReturn(null);
		assertEquals(team,team);
	}
	
	@Test
	void getTeamByName() 
	{
		when(teaminterface.findByNombreEquipo(team.getNombreEquipo())).thenReturn(team);
		
		assertEquals(team.getNombreEquipo(),teaminterface.findByNombreEquipo("Argentina"));
	}
	
	@Test
	void TeamdeleteById() 
	{
		teaminterface.deleteById(team.getIdEquipo());
	}
	
	@Test
	void addTeam() 
	{
		 
		Team team1=new Team();
		team1.setNombreEquipo("Argentina");
		Player player1=new Player();
		Player player2=new Player();
		Player player3=new Player();
		Player player4=new Player();
		Player player5=new Player();
		Player player6=new Player();
		Player player7=new Player();
		Player player8=new Player();
		Player player9=new Player();
		Player player10=new Player();	
		Player player11=new Player();
		Player player12=new Player();
		Player player13=new Player();
		
		List<Player> players=new ArrayList<>();
		
		players.add(player1);
		players.add(player2);
		players.add(player3);
		players.add(player4);
		players.add(player5);
		players.add(player6);
		players.add(player7);
		players.add(player8);
		players.add(player9);
		players.add(player10);
		players.add(player11);
		players.add(player12);
		players.add(player13);
		
		team1.setPlayers(players);
		when(teaminterface.save(team1)).thenReturn(team1);
		
		String result=tservice.addTeam(team1);
		
		assertEquals(result,"New team created, team: "+team1.getNombreEquipo());
		verify(pservice,times(13)).savePlayer(Mockito.any());
		verify(pservice,times(13)).addPlayerToTeam(Mockito.any(), Mockito.any());
	}
	
}