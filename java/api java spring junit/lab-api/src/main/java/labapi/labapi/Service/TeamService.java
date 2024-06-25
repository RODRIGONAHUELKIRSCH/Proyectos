package labapi.labapi.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import labapi.labapi.Entities.Player;
import labapi.labapi.Entities.Team;
import labapi.labapi.Repository.PlayerInterface;
import labapi.labapi.Repository.TeamInterface;

@Service
public class TeamService {

	@Autowired
	TeamInterface teaminterface;

	@Autowired
	PlayerInterface playerinterface;
	
	@Autowired 
	PlayerService pservice;
	//public ArrayList<Team> obtainTeams()
	//{
	//
//		return (ArrayList<Team>) teaminterface.findAll();
	//}
	//
//	public Team saveTeam(Team team)
//	{
//		return teaminterface.save(team);
//	
//	}

	public Team saveTeam(Team team)
	{
		try {
			teaminterface.save(team);
		}
		catch(Exception e) {
			e.getMessage();
			}
		return team;
	
	}
	public List<Team> saveAllTeam(List<Team> teams)
	{
		return (List<Team>) teaminterface.saveAll(teams);
	
	}
	
	public List<Team> getTeams()
	{
	
		return (List<Team>) teaminterface.findAll();
	}
	
	public Team getTeambyId(long id)
	{
	
		return teaminterface.findById(id).orElse(null);
	}
	
	public Team getTeamByName(String name)
	{
	
		return  teaminterface.findByNombreEquipo(name);
	
	}
	
	public String TeamdeleteById(long id)
	{
		 try {
			 teaminterface.deleteById(id);
		 }
		 catch(Exception e){
			 e.getMessage();
		 }
		return "Equipo Eliminado" +id;
	
	}
	
//	Deprecated
	public Team updateTeam(Team team)
	{
	
		 Team existingTeam = teaminterface.findById(team.getIdEquipo()).orElse(null);
		 existingTeam.setIdEquipo(team.getIdEquipo());
		 existingTeam.setIdEquipo(team.getIdEquipo());
//		 existingTeam.setIdJug(team.getIdJug());
	
		 return teaminterface.save(existingTeam);
	}
	
	public String addTeam(Team team) 
	{
		try {
			team.getPlayers();
		}
		catch(Exception e) 
		{
			e.getMessage();
		}
		List<Player> players=team.getPlayers();
		if(players.size()>=11 && players.size()<=26) 
		{
			Team SavedTeam=teaminterface.save(team);
			
				for(Player player:players) 
				{
					pservice.addPlayerToTeam(player, SavedTeam);
					pservice.savePlayer(player);
				
				}

			return "New team created, team: "+team.getNombreEquipo();
		}
		else 
		{
			return "A team must have at least 11 players and 26 players as top.";
		}	
	}
		
}