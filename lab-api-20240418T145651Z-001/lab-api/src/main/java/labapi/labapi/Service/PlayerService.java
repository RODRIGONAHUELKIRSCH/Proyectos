package labapi.labapi.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import labapi.labapi.Entities.Player;
import labapi.labapi.Entities.Team;
import labapi.labapi.Repository.PlayerInterface;
import labapi.labapi.Repository.TeamInterface;

@Service
public class PlayerService {

	
	@Autowired
	PlayerInterface playerinterface;
	
	@Autowired
	TeamInterface tinterface;
	
	public Player savePlayer(Player player)
	{
		try {
			playerinterface.save(player);
		}
		catch(Exception e) 
		{
			e.getMessage();
		}
		
		return player;

	}
	public List<Player> saveAllPlayer(List<Player> players)
	{
		
		return (List<Player>) playerinterface.saveAll(players);
	}

	public List<Player> getPlayers()
	{	
		return (List<Player>) playerinterface.findAll();
	}

	public Player getPlayerbyId(long id)
	{

		return playerinterface.findById(id).orElse(null);
	}

	public Player getPlayerByName(String name)
	{

		return  playerinterface.findByNombreJugador(name);

	}

	public String PlayerdeleteById(long id)
	{
		try 
		{
			playerinterface.deleteById(id);
		}
		catch(Exception e) 
		{
			e.getMessage();
		}
		return "Jugador Eliminado" +id;
	}


	public void addPlayerToTeam(Player player,Team team ) 
	{
		try {
			player.setTeam(team);
		}
		catch(Exception e){
			e.getMessage();
		}
	}

//	public String addTeam(Team team) 
//	{
//		List<Player> players=team.getPlayers();
//		if(players.size()>=11 && players.size()<=26) 
//		{
//			Team SavedTeam=tinterface.save(team);
//			for(Player player: players) 
//			{
//				
//				playerservice.savePlayer(player);
//				playerservice.addPlayerToTeam(player, SavedTeam);
//				
//			}
//			return "New team created, team: "+team.getNombreEquipo();
//		}
//		return "A team must have at least 11 players and 26 players as top.";
//		
//	}
	

//	public void assignTeam(Player player) 
//	{
//		 player.getTeam();
//	} 
}
