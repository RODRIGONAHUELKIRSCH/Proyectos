package labapi.labapi.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import labapi.labapi.Entities.Group;
import labapi.labapi.Repository.GroupInterface;
import labapi.labapi.Service.GroupService;

@RestController
public class GroupController {

	@Autowired 
	GroupInterface ginterface;
	
	@Autowired 
	GroupService gservice;
	
	@PostMapping("/CreateGroupA")
	public String CreateGroupA(Group group) 
	{
		return this.gservice.CreateAGroup(group);
	
	}
	@PostMapping("/CreateGroupB")
	public String CreateGroupB(Group group) 
	{
		return this.gservice.CreateBGroup(group);
	
	}
	@PostMapping("/CreateGroupC")
	public String CreateGroupC(Group group) 
	{
		return this.gservice.CreateCGroup(group);
	
	}
	@PostMapping("/CreateGroupD")
	public String CreateGroupD(Group group) 
	{
		return this.gservice.CreateDGroup(group);
	
	}
	@PostMapping("/CreateGroupE")
	public String CreateGroupE(Group group) 
	{
		return this.gservice.CreateEGroup(group);
	
	}
	@PostMapping("/CreateGroupF")
	public String CreateGroupF(Group group) 
	{
		return this.gservice.CreateFGroup(group);
	
	}
	@PostMapping("/CreateGroupG")
	public String CreateGroupG(Group group) 
	{
		return this.gservice.CreateGGroup(group);
	
	}
	@PostMapping("/CreateGroupH")
	public String CreateGroupH(Group group) 
	{
		return this.gservice.CreateHGroup(group);
	
	}

	@GetMapping("/grupos")
	public List<Group> findAllPlayers()
	{

		return (List<Group>) ginterface.findAll();
	}
	@GetMapping("/SimulateOctavos")
	public String SimulateOctavos()
	{

		return gservice.SimulateOctavos();
	}
	
	@GetMapping("/SimulateCuartos")
	public String SimulateCuartos()
	{

		return gservice.SimulateCuartos();
	}
	
	@GetMapping("/SimulateSemis")
	public String SimulateSemis()
	{

		return gservice.SimulateSemis();
	}
	
	@GetMapping("/SimulateTheFinal")
	public String SimulateTheFinal()
	{

		return gservice.SimulateTheFinal();
	}
	
	@GetMapping("/SimulateThirdPlace")
	public String SimulateThirdPlace()
	{

		return gservice.SimulateThirdPlace();
	}
}

//TRASH CODE
//package labapi.labapi.Controller;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import labapi.labapi.Entities.Points;
//import labapi.labapi.Entities.Team;
//import labapi.labapi.Repository.PointsInterface;
//import labapi.labapi.Repository.TeamInterface;
//import labapi.labapi.Service.PointsService;
//
//@RestController
////@RequestMapping("/Points")
//public class PointsController {
//
//	@Autowired
//	PointsInterface pointerface;
//	
//	@Autowired
//	TeamInterface tinterface;
//	
//	@Autowired
//	PointsService poservice;
//
//	@GetMapping("/Points/buscar/{id}")
//	public  Optional<Points> findPointsById(@PathVariable long id)
//	{
//		return pointerface.findById(id);
//	}
//	
//	@PostMapping("/Points")
//	public Points addPoints(@RequestBody Points points) 
//	{
//		Team HomeTeam=new Team();
//		Team AwayTeam=new Team();
//		if(tinterface.existsById(HomeTeam.getIdEquipo())&&tinterface.existsById(AwayTeam.getIdEquipo())) 
//		{
//			
//			if(HomeTeam.getIdEquipo()!=AwayTeam.getIdEquipo()) 
//			{
//				points.setHomeTeam(HomeTeam.getNombreEquipo());
//				points.setAwayTeam(AwayTeam.getNombreEquipo());
//				poservice.countPoints(points);
//				return pointerface.save(points);
//			}
//		}
//
//		return null;
//	}
//	
//	@PutMapping("/Points/update/{id}")
//	public Points updateByPoints(@RequestBody Points points) 
//	{
//		Points existingPoints = pointerface.findById(points.getPoints()).orElse(null);
//		 existingPoints.setIdPoints(points.getPoints());
//		 existingPoints.setHomeTeam(points.getHomeTeam());
//		 existingPoints.setAwayTeam(points.getAwayTeam());
//		 return pointerface.save(existingPoints);
//	}
//	
//	
//	@DeleteMapping("Points/delete/{id}")
//	public String deletePoints(@PathVariable long id) 
//	{
//		pointerface.deleteById(id);
//		
//		return "Points eliminated, Points id: "+id;
//	}
//	
//	@PostMapping("/SimulateGroups/")
//	public Points SimulateGroups(@RequestBody Points point,@RequestBody Team TeamHome, @RequestBody Team TeamAway) 
//	{
//		if(tinterface.existsById(TeamHome.getIdEquipo())&& tinterface.existsById(TeamAway.getIdEquipo())) 
//		{
//			if (TeamHome.getIdEquipo()!=TeamAway.getIdEquipo()) 
//			{
//				poservice.matchsimulation(point);
//				return pointerface.save(point);
//			}
//		}
//		
//		
//		
//		return null;
//	}
//	
//	
//}