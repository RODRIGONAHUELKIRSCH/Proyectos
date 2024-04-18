package labapi.labapi.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import labapi.labapi.Entities.Match;
import labapi.labapi.Repository.MatchInterface;
import labapi.labapi.Service.MatchService;
import labapi.labapi.Service.TeamService;

@RestController
public class MatchController {

	
	@Autowired
	MatchInterface minterface;
	
	@Autowired
	MatchService mservice;
	
	@Autowired
	TeamService tservice;
	
	
	@PostMapping("/GenerateMatch")
	public Match GenerateMatch(@RequestBody @Valid Match match) 
	{

		return this.mservice.SimulateMatch(match);
	}
	
	@PostMapping("/GenerateMatchString")
	public Match GenerateMatchString(@RequestBody @Valid Match match) 
	{

		return this.mservice.SimulateMatchString(match.getSeleccionLocal(),match.getSeleccionVisitante());
	}
	
	@GetMapping("/partidos")
	public List<Match> findAllMatch()
	{

		return (List<Match>) minterface.findAll();
	}
}