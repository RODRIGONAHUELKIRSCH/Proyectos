package labapi.labapi.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.boot.actuate.trace.http.HttpTrace.Response;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import io.micrometer.core.ipc.http.HttpSender.Response;
import labapi.labapi.Entities.Player;
import labapi.labapi.Entities.Team;
import labapi.labapi.Repository.*;
import labapi.labapi.Service.*;

@RestController
//@RequestMapping("/player")
public class PlayerController {

	@Autowired
	PlayerInterface pinterface;
	
	@Autowired
	PlayerService pservice;

	@Autowired
	TeamInterface tinterface;

	@PostMapping("/player")
	public Player addPlayer(@RequestBody Player player)
	{
	return pinterface.save(player);
	}
	
	@PostMapping("/players")
	public List<Player> addTeams(@RequestBody List<Player> players)
	{

	return (List<Player>) pinterface.saveAll(players);
	}
	
	@GetMapping("/players")
	public List<Player> findAllPlayers()
	{

		return (List<Player>) pinterface.findAll();
	}
	
	@GetMapping("/player/{id}")
	public Player findPlayerById(@PathVariable long id)
	{
		return pservice.getPlayerbyId(id);
	}
	
	@GetMapping("/player/buscar/{name}")
	public Player findTeamByName(@PathVariable String name)
	{
		return pinterface.findByNombreJugador(name);

	}

//	Deprecated
	@PutMapping("/player/{id}/{nombreJugador}/{posicion}")
	public Player updateByPlayer(Player player) {

		Player existingPlayer = pinterface.findById(player.getIdJugador()).orElse(null);
		 existingPlayer.setIdJugador(player.getIdJugador());
		 existingPlayer.setNombreJugador(player.getNombreJugador());
		 existingPlayer.setPosicion(player.getPosicion());
		 return pinterface.save(existingPlayer);
	}
		
	@DeleteMapping("/player/delete/{id}")
	public String deletePlayer(@PathVariable long id)
	{
		 pinterface.deleteById(id);
		 
		 return "Player eliminated, id of player: "+ id;
	}
	
//	@PutMapping("/{id}/team/{id}")
//	public Player assignTeamToPlayer(@PathVariable long idJugador , @PathVariable long idEquipo) 
//	{
//		Player player=pinterface.findById(idJugador);
//		Team team=tinterface.findById(idEquipo);
//		player.setTeam(team);
//		return pservice.savePlayer(player);
//	}
	
//	@PutMapping("/addplayers/team/{id}/{nombreEquipo}/{<Players>}")
//	public String AddPlayersToTeam(@RequestBody List<Player> players ,@PathVariable long id,@PathVariable String nombreEquipo) 
//	{
//		if(players.size()>=11 && players.size()<27)
//		{
//			Team team=new Team();
//			team.setIdEquipo()
//		}
//		
//		
//		return null;
//		
//	}
		
//	public Player updatePlayer(@RequestBody Player player)
//	{
//	return pservice.updateByPlayer(player);
//	}		
	
//	@PostMapping("/player/{id}")
//	public Player AddTeam(@RequestBody Player player)
//	{
//		
//	}
//	
	@PutMapping("player/{idJugador}/team/{idEquipo}")
	public String  addTeamToPlayer(@PathVariable("idJugador") long idJugador, @PathVariable("idEquipo") long idEquipo)
	{
		Team team=tinterface.findById(idEquipo).get();
		Player play=pinterface.findById(idJugador).get();
		play.setTeam(team);
		tinterface.save(team);
		return "Jugador "+play.getNombreJugador()+" añadido a equipo "+team.getNombreEquipo()+ " exitosamente."; 
	}
	
}