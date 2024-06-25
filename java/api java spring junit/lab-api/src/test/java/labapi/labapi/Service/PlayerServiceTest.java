package labapi.labapi.Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.mockito.MockitoAnnotations;

import org.springframework.boot.test.context.SpringBootTest;

import labapi.labapi.Entities.Player;
import labapi.labapi.Entities.Team;
import labapi.labapi.Repository.PlayerInterface;
import labapi.labapi.Repository.TeamInterface;


@SpringBootTest
 class PlayerServiceTest {

	@Mock
	PlayerInterface playerinterface;
	
	@InjectMocks
	private PlayerService playerService;
	
	@Mock
	private List<Player> player;
	
	@Mock
	private Player jugador;
	
	@Mock
	private Team team;
	
	@Mock
	TeamInterface tinterface;
	
	@BeforeEach
	public void setUp() 
	{
		
		long id=11;
		jugador=new Player();
		jugador.setIdJugador(id);
		jugador.setNombreJugador("Dibu Martinez");
		jugador.setPosicion("Arquero");
		
		player.add(jugador);
		

		team=new Team();
		team.setIdEquipo(id);
		team.setNombreEquipo("Argentina");
		team.setPlayers(player);
		
		playerService=new PlayerService();
		
	
		MockitoAnnotations.openMocks(this);
	}
	
	@Test
	void saveAllPlayer() 
	{
		when(playerinterface.saveAll(player)).thenReturn(player);
		
		assertEquals(player,playerService.saveAllPlayer(player));
	}
	
	@Test
	void addPlayerToTeam( ) 
	{

		jugador.setTeam(team);
	
	}
	
	@Test
	void getPlayers()
	{

		 when(playerinterface.findAll()).thenReturn(player);
		
		assertEquals(player,playerService.getPlayers());
	}
	
	
	@Test
	void getPlayerbyId() 
	{
		when(playerinterface.findById(jugador.getIdJugador())).thenReturn(null);
		assertEquals(jugador,jugador);
	}
	
	@Test
	void getPlayerByName() 
	{
		when(playerinterface.findByNombreJugador(jugador.getNombreJugador())).thenReturn(jugador);
		
		assertEquals(jugador.getNombreJugador(),playerinterface.findByNombreJugador("Dibu Martinez"));
	}
	
	@Test
	void PlayerdeleteById() 
	{
		playerinterface.deleteById(jugador.getIdJugador());
	}
	
	@Test
	void savePlayer() 
	{
		 when(playerinterface.save(jugador)).thenReturn(jugador);;
		
		assertEquals(jugador,playerService.savePlayer(jugador));
	}
}
