package labapi.labapi.Controller;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//import labapi.labapi.Entities.Player;
import labapi.labapi.Entities.Team;
import labapi.labapi.Repository.PlayerInterface;
import labapi.labapi.Repository.TeamInterface;
//import labapi.labapi.Service.PlayerService;
import labapi.labapi.Service.TeamService;

@RestController
//@RequestMapping("/team")
public class TeamController {

	@Autowired
	private TeamService service;
	
	@Autowired
	PlayerInterface pinterface;
	
	@Autowired
	private TeamInterface tinterface;
	
	
	@PostMapping("/team")
	public String addTeam(@RequestBody Team team)
	{	
		return this.service.addTeam(team);
	}
	
	@PostMapping("/teams")
	public List<Team> addTeams(@RequestBody List<Team> teams)
	{		
	return (List<Team>) tinterface.saveAll(teams);
	}
	
	@GetMapping("/teams")
	public List<Team> findAllTeams()
	{

		return (List<Team>) tinterface.findAll();
	}
	
	@GetMapping("/team/{id}")
	public Team findTeamById(@PathVariable long id)
	{
		return  service.getTeambyId(id);
	}
	
	@GetMapping("/team/buscar/{name}")
	public Team findTeamByName(@PathVariable String name)
	{
		return tinterface.findByNombreEquipo(name);

	}

	@PutMapping("/team")
	public Team updateTeam(@RequestBody Team team)
	{
	return service.updateTeam(team);
	}
	
	@DeleteMapping("/team/delete/{id}")
	public String deleteTeam(@PathVariable long id)
	{
		 tinterface.deleteById(id);
		 
		 return "Team eliminated, id of team: "+id;
	}
	

}