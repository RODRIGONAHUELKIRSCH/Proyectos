package labapi.labapi.Service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import labapi.labapi.Entities.Match;
import labapi.labapi.Repository.MatchInterface;
import labapi.labapi.Repository.TeamInterface;

@Service
public class MatchService {

	@Autowired
	MatchInterface minterface;
	
	@Autowired
	TeamInterface tinterface;
	
	public List<Match> GetMatches() 
	{
		return  (List<Match>) minterface.findAll();
	}
	
	public Match saveMatch(Match match) 
	{
		try {
			minterface.save(match);
		}
		catch(Exception e) {
			e.getMessage();
		}
		return match;
	}
	
	public Match getMatch(Long id) 
	{
		return minterface.findById(id).orElse(null);
	}
	
	public String DeleteMatch(Long id) 
	{
		try {
		minterface.deleteById(id);
		}
		catch(Exception e) 
		{
			e.getMessage();
		}
		return "Match deleted. Match id: "+id; 
	}
	
	public Match SimulateMatchString(String s1,String s2) 
	{
		Match match=new Match();
		Random rnd=new Random();		
		try {
			match.setSeleccionLocal(tinterface.findByNombreEquipo(s1).getNombreEquipo());
			match.setSeleccionVisitante(tinterface.findByNombreEquipo(s2).getNombreEquipo());
			if(tinterface.findByNombreEquipo(match.getSeleccionLocal())!=null && tinterface.findByNombreEquipo(match.getSeleccionVisitante())!=null) 
			{

				Integer goalhome=rnd.nextInt(9);
				Integer goalaway=rnd.nextInt(9);		
				match.setHomegoals(goalhome);
				match.setAwaygoals(goalaway);
				if(match.getHomegoals()>match.getAwaygoals()) 
				{
					match.setResult(match.getSeleccionLocal());
				}
				else if(match.getAwaygoals()>match.getHomegoals()) 
				{
					match.setResult(match.getSeleccionVisitante());
				}
				else if(match.getHomegoals().equals(match.getAwaygoals()))
				{
					match.setResult("Empate");
				}
				
			}
		}
		catch(Exception e){
			
			e.getMessage();
		}
		 return this.saveMatch(match);
	}
	
	public Match SimulateMatch(Match match) 
	{
		Random rnd=new Random();
		try {
			if(tinterface.findByNombreEquipo(match.getSeleccionLocal())!=null && tinterface.findByNombreEquipo(match.getSeleccionVisitante())!=null) 
			{
				Integer goalhome=rnd.nextInt(9);
				Integer goalaway=rnd.nextInt(9);		
				match.setHomegoals(goalhome);
				match.setAwaygoals(goalaway);
				if(match.getHomegoals()>match.getAwaygoals()) 
				{
					match.setResult(match.getSeleccionLocal());
				}
				else if(match.getAwaygoals()>match.getHomegoals()) 
				{
					match.setResult(match.getSeleccionVisitante());
				}
				else if(match.getHomegoals().equals(match.getAwaygoals()))
				{
					match.setResult("Empate");
				}
				
			}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		 return this.saveMatch(match);
	}
	
}


//package labapi.labapi.Service;
//
//import java.util.Random;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import labapi.labapi.Entities.Points;
//import labapi.labapi.Entities.Team;
//import labapi.labapi.Repository.PointsInterface;
//
//@Service
//public class PointsService {
//
//	@Autowired
//	PointsInterface pointsinterface;
//	
//	
//	
//	public Points savePoints(Points point) 
//	{
//		return pointsinterface.save(point);
//		
//	}
//	
//	public Points getPoints(Long id) 
//	{
//		return pointsinterface.findById(id).orElse(null);
//	}
//	
//	public String PointsdeleteById(long id) 
//	{
//		pointsinterface.deleteById(id);
//		
//		return	"Puntaje eliminado, id puntaje eliminado: "+ id;
//	}
//	
//	public String countPoints(Points point) 
//	{
//		
//		long t1=point.getHomegoals();
//		long t2=point.getAwaygoals();
//		Points p=new Points();
//		Points po=new Points();
//		if(t1>t2) 
//		{
//			
//			p.setPoints(p.getPoints()+3);
//			return "Match Result: Winner Team is HomeTeam: "+point.getHomeTeam();
//		}
//		else if(t2>t1) 
//		{
//			po.setPoints(po.getPoints()+3);
//			return "Match Result: Winner Team is AwayTeam: "+point.getAwayTeam();
//		}
//		
//		p.setPoints(p.getPoints()+1);
//		po.setPoints(p.getPoints()+1);
//		return "Match Result: Draw, no visible differences between "+point.getHomeTeam()+" and "+point.getAwayTeam();
//
//	}
//	
//	public String matchsimulation(Points point) 
//	{
//		
//		int cont=0;
//		Random rnd=new Random();
//		int goalhome=rnd.nextInt(9);
//		int goalaway=rnd.nextInt(9);
//		
//		while(cont<3) 
//		{
//			cont ++;
//			if(goalhome>goalaway) 
//			{
//				point.setPoints(point.getPoints()+3);
//				point.setResult("winner");
//				return "The Team "+point.getHomeTeam()+" is the "+point.getResult() +" of the match.";
//				
//			}
//			else if(goalaway>goalhome) 
//			{
//				point.setPoints(point.getPoints()+3);
//				point.setResult("winner");
//				return "The Team "+point.getAwayTeam()+" is the "+point.getResult() +" of the match.";
//			}
//			else if(goalhome==goalaway)
//			{
//				point.setPoints(point.getPoints()+1);
//				point.setResult("draw");
//				return "Match Result: "+point.getResult()+" between team "+point.getHomeTeam()+" and "+point.getAwayTeam();
//			}
//		}
//		
//		return "";
//
//	}
//	
//
//}