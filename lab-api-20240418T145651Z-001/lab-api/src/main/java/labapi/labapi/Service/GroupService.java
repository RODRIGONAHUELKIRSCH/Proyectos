package labapi.labapi.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import labapi.labapi.Entities.Group;
import labapi.labapi.Entities.Match;
import labapi.labapi.Repository.GroupInterface;
import labapi.labapi.Repository.TeamInterface;

@Service
public class GroupService {

	@Autowired
	GroupInterface ginterface;
	
	@Autowired
	TeamInterface tinterface;
	
	@Autowired
	MatchService mservice;
	

	ArrayList<Integer> goalaverage=new ArrayList<>();
	ArrayList<Integer> puntos=new ArrayList<>();
	ArrayList<Integer> Fs=new ArrayList<>();
	ArrayList<String> octavos=new ArrayList<>();
	ArrayList<String> cuartos=new ArrayList<>();
	ArrayList<String> semis=new ArrayList<>();
	ArrayList<String> thefinal=new ArrayList<>();
	ArrayList<String> thirdplace=new ArrayList<>();
	
	public Group SaveGroup(Group group) 
	{
		try {
			
			ginterface.save(group);
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		return group;
	}
	
	public Group getGroupId(Long id) 
	{
		return ginterface.findById(id).orElse(null);				
	}
	
	public Group getGroup(String string) 
	{
		return ginterface.findBygrupo(string);
	}
	
	public String DeleteGroup(Long id) 
	{
		try {
			
			ginterface.deleteById(id);
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Group deleted. Group id:"+id;
	}
	
	public String CreateAGroup(Group group) 
	{

		String s1="Qatar";
		String s2="Ecuador";
		String s3="Paises Bajos";
		String s4="Senegal";

		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("A")==null) 
					{
						puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("A");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group A created Succesfully.";
					} 
		}
			catch(Exception e) {
				
				e.getMessage();
			}
		
		return "Group A couldnt be created or already exists.";
	}

	 ArrayList<Integer> calculatefs(ArrayList<Integer> puntos) {

		int i=0,j=0,k=0,primero=0,segundo=0,tercero=0,pos1=0,pos2=0,pos3=0;

			Fs.clear();

		while(i<puntos.size()) 
		{
			if(primero<=puntos.get(i)) 
			{
				primero=puntos.get(i);
				pos1=i;
				i++;
			
			}else 
			{
				i++;
			}
		}
		
		while(j<puntos.size()) 
		{
			if(segundo<=puntos.get(j)&& j!=pos1) 
			{
				segundo=puntos.get(j);
				pos2=j;
				j++;
				
			}
			else 
			{
				j++;
			}
		}
		
		
		while(k<puntos.size()) 
		{
			if(tercero<=puntos.get(k)&& k!=pos1&&k!=pos2) 
			{
				tercero=puntos.get(k);
				pos3=k;
				k++;
				
			}
			else 
			{
				k++;
			}
		}
		
		if(primero!=segundo&&segundo==tercero) 
		{
			if(goalaverage.get(pos2)>goalaverage.get(pos3)) 
			{
				Fs.add(pos1);
				Fs.add(pos2);
				
				

			}else if(goalaverage.get(pos3)>goalaverage.get(pos2)) 
			{
				
				Fs.add(pos1);
				Fs.add(pos3);

			}
			else 
			
			{
				
				Fs.add(pos1);
				Fs.add(pos2);
								
			}
		}
		
		if(primero==segundo) 
		{
			if(goalaverage.get(pos1)>goalaverage.get(pos2)) 
			{
				Fs.add(pos1);
				Fs.add(pos2);
				
				

			}
			else if(goalaverage.get(pos2)>goalaverage.get(pos1)) 
			{
				
				Fs.add(pos2);
				Fs.add(pos1);
	

			}
			else 
			
			{
				Fs.add(pos1);
				Fs.add(pos2);
				
				
			}

			
			
		}
		if(primero!=segundo&&segundo!=tercero) 
		{
			
				Fs.add(pos1);
				Fs.add(pos2);
			
		}

		
		return Fs;
	
	}



	 ArrayList<Integer> SimulateGames(String s1, String s2, String s3, String s4) {
		

		
		
			Match match1=mservice.SimulateMatchString(s1,s2);
			Match match2=mservice.SimulateMatchString(s3, s4);
			
			Match match3=mservice.SimulateMatchString(s1, s3);
			Match match4=mservice.SimulateMatchString(s2, s4);
			
			Match match5=mservice.SimulateMatchString(s1, s4);
			Match match6=mservice.SimulateMatchString(s2, s3);

			puntos.clear();
		
			int qatar=0;
			int ecuador=0;
			int paisesbajos=0;
			int senegal=0;
			
			
			if(match1.getResult().equals(match1.getSeleccionLocal())) 
			{
				qatar=qatar+3;
				
			}
			else if(match1.getResult().equals(match1.getSeleccionVisitante())) 
			{
				ecuador=ecuador+3;
			}
			else 
			{
				qatar=qatar+1;
				ecuador=ecuador+1;
			}
			if(match2.getResult().equals(match2.getSeleccionLocal())) 
			{
				paisesbajos=paisesbajos+3;
			}
			else if(match2.getResult().equals(match2.getSeleccionVisitante())) 
			{
				senegal=senegal+3;
			}
			else 
			{
				paisesbajos=paisesbajos+1;
				senegal=senegal+1;
			}
			if(match3.getResult().equals(match3.getSeleccionLocal()))
			{
				qatar=qatar+3;
			}
			else if(match3.getResult().equals(match3.getSeleccionVisitante())) 
			{
				paisesbajos=paisesbajos+3;
			}
			else 
			{
				qatar=qatar+1;
				paisesbajos=paisesbajos+1;
			}
			if(match4.getResult().equals(match4.getSeleccionLocal())) 
			{
				ecuador=ecuador+3;
			}
			else if(match4.getResult().equals(match4.getSeleccionVisitante())) 
			{
				senegal=senegal+3;
			}
			else 
			{
				ecuador=ecuador+1;
				senegal=senegal+1;
			}
			if(match5.getResult().equals(match5.getSeleccionLocal())) 
			{
				qatar=qatar+3;
			}
			else if(match5.getResult().equals(match5.getSeleccionVisitante())) 
			{
				senegal=senegal+3;
			}
			else 
			{
				qatar=qatar+1;
				senegal=senegal+1;
			}
			if(match6.getResult().equals(match6.getSeleccionLocal())) 
			{
				ecuador=ecuador+3;
			}
			else if(match6.getResult().equals(match6.getSeleccionVisitante())) 
			{
				paisesbajos=paisesbajos+3;
			}
			else 
			{
				ecuador=ecuador+1;
				paisesbajos=paisesbajos+1;
			}

			puntos.add(qatar);
			puntos.add(ecuador);
			puntos.add(paisesbajos);
			puntos.add(senegal);
			
			
			 goalaverage=CalculateGa(match1,match2,match3,match4,match5,match6);

		 
		return puntos;
	}

	 ArrayList<Integer> CalculateGa(Match match1, Match match2, Match match3, Match match4, Match match5,
			Match match6) {
		
		int gaqatar=0;
		int gaecuador=0;
		int gapaisesbajos=0;
		int gasenegal=0;
		
		goalaverage.clear();
		
		gaqatar=gaqatar+(match1.getHomegoals()-match1.getAwaygoals());
		gaecuador=gaecuador+match1.getAwaygoals()-match1.getHomegoals();
		
		gapaisesbajos=gapaisesbajos+(match2.getHomegoals()-match2.getAwaygoals());
		gasenegal=gasenegal+(match2.getAwaygoals()-match2.getHomegoals());
		
		gaqatar=gaqatar+(match3.getHomegoals()-match3.getAwaygoals());
		gapaisesbajos=gapaisesbajos+(match3.getAwaygoals()-match3.getHomegoals());
		
		gaecuador=gaecuador+(match4.getHomegoals()-match4.getAwaygoals());
		gasenegal=gasenegal+(match4.getAwaygoals()-match4.getHomegoals());
		
		gaqatar=gaqatar+(match5.getHomegoals()-match5.getAwaygoals());
		gasenegal=gasenegal+(match5.getAwaygoals()-match5.getHomegoals());
		
		gaecuador=gaecuador+(match6.getHomegoals()-match6.getAwaygoals());
		gapaisesbajos=gapaisesbajos+(match6.getAwaygoals()-match6.getHomegoals());
		

		goalaverage.add(gaqatar);
		goalaverage.add(gaecuador);
		goalaverage.add(gapaisesbajos);
		goalaverage.add(gasenegal);
		
		
		calculatefs(puntos);
		
				
		
		return goalaverage;
		
	}
	
	public String CreateBGroup(Group group) 
	{

		String s1="Inglaterra";
		String s2="Iran";
		String s3="Usa";
		String s4="Gales";
		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("B")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("B");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group B created Succesfully.";
					}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Group B couldnt be created or already exists.";
	}

	public String CreateCGroup(Group group) 
	{

		String s1="Argentina";
		String s2="Arabia Saudita";
		String s3="Mexico";
		String s4="Polonia";
		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("C")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("C");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group C created Succesfully.";
					}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Group C couldnt be created or already exists.";
	}
	
	public String CreateDGroup(Group group) 
	{

		String s1="Francia";
		String s2="Australia";
		String s3="Dinamarca";
		String s4="Tunez";

		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("D")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));;
						group.setGrupo("D");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group D created Succesfully.";
					}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Group D couldnt be created or already exists.";
	}
	
	public String CreateEGroup(Group group) 
	{

		String s1="Espana";
		String s2="Costa Rica";
		String s3="Alemania";
		String s4="Japon";
		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("E")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("E");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group E created Succesfully.";
					}
		}
		catch(Exception e) 
		{
			e.getMessage();
		}
		
		return "Group E couldnt be created or already exists.";
	}

	public String CreateFGroup(Group group) 
	{

		String s1="Belgica";
		String s2="Canada";
		String s3="Marruecos";
		String s4="Croacia";
		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("F")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("F");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group F created Succesfully.";
					}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Group F couldnt be created or already exists.";
	}


	public String CreateGGroup(Group group) 
	{

		String s1="Brazil";
		String s2="Serbia";
		String s3="Suiza";
		String s4="Camerun";
		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("G")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("G");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group G created Succesfully.";
					}
		}
		catch(Exception e){
			
			e.getMessage();
		}
		
		return "Group G couldnt be created or already exists.";
	}
	
	public String CreateHGroup(Group group) 
	{

		String s1="Portugal";
		String s2="Ghana";
		String s3="Uruguay";
		String s4="Korea Sur";
		try {
			
			if(tinterface.findByNombreEquipo(s1)!=null&&tinterface.findByNombreEquipo(s2)!=null
					&&tinterface.findByNombreEquipo(s3)!=null&&tinterface.findByNombreEquipo(s4)!=null && getGroup("H")==null) 
					{
						 puntos=SimulateGames(s1,s2,s3,s4);
						group.setTeam1(s1);
						group.setPoints1(puntos.get(0));
						group.setGa1(goalaverage.get(0));
						group.setTeam2(s2);
						group.setPoints2(puntos.get(1));
						group.setGa2(goalaverage.get(1));
						group.setTeam3(s3);
						group.setPoints3(puntos.get(2));
						group.setGa3(goalaverage.get(2));
						group.setTeam4(s4);
						group.setPoints4(puntos.get(3));
						group.setGa4(goalaverage.get(3));
						
						System.out.println(Fs.get(0));
						System.out.println(Fs.get(1));
						group.setPrimero(Fs.get(0));
						group.setSegundo(Fs.get(1));
						group.setGrupo("H");
						DetermineTeam(group,Fs);
						this.SaveGroup(group);
						
						return "Group H created Succesfully.";
					}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Group H couldnt be created or already exists.";
	}

	 void DetermineTeam(Group group,ArrayList<Integer> Fs) {


		 
		if(Fs.get(0)==0) 
		{
			octavos.add(group.getTeam1());
		}
		if(Fs.get(0)==1)
		{
			octavos.add(group.getTeam2());
		}
		 if(Fs.get(0)==2)
		{
			octavos.add(group.getTeam3());
		}
		if(Fs.get(0)==3)
		{
			octavos.add(group.getTeam4());
		}
		 if(Fs.get(1)==0)
		{
			octavos.add(group.getTeam1());
		}
		 if(Fs.get(1)==1)
		{
			octavos.add(group.getTeam2());
		}
		 if(Fs.get(1)==2)
		{
			octavos.add(group.getTeam3());
		}
		 if(Fs.get(1)==3)
		{
			octavos.add(group.getTeam4());
		}
		
	}
	
	
	public String SimulateOctavos() 
	{
		
		try {
			
			Match match1=mservice.SimulateMatchString(octavos.get(0), octavos.get(3));		
			Match match2=mservice.SimulateMatchString(octavos.get(1), octavos.get(2));
			
			Match match3=mservice.SimulateMatchString(octavos.get(4), octavos.get(7));		
			Match match4=mservice.SimulateMatchString(octavos.get(5), octavos.get(6));
			
			Match match5=mservice.SimulateMatchString(octavos.get(8), octavos.get(11));		
			Match match6=mservice.SimulateMatchString(octavos.get(9), octavos.get(10));
			
			Match match7=mservice.SimulateMatchString(octavos.get(12), octavos.get(15));		
			Match match8=mservice.SimulateMatchString(octavos.get(13), octavos.get(14));
			
			
			if(match1.getResult().equals(octavos.get(0))) 
			{
				cuartos.add(octavos.get(0));
			}
			else if(match1.getResult().equals(octavos.get(3))) 
			{
				cuartos.add(octavos.get(3));
			}
			else 
			{
				cuartos.add(octavos.get(0));
			}
			if(match2.getResult().equals(octavos.get(1))) 
			{
				cuartos.add(octavos.get(1));
			}
			else if(match2.getResult().equals(octavos.get(2))) 
			{
				cuartos.add(octavos.get(2));
			}
			else 
			{
				cuartos.add(octavos.get(1));
			}
			if(match3.getResult().equals(octavos.get(4))) 
			{
				cuartos.add(octavos.get(4));
			}
			else if(match3.getResult().equals(octavos.get(7))) 
			{
				cuartos.add(octavos.get(7));
			}
			else 
			{
				cuartos.add(octavos.get(4));
			}
			if(match4.getResult().equals(octavos.get(5))) 
			{
				cuartos.add(octavos.get(5));
			}
			else if(match4.getResult().equals(octavos.get(6))) 
			{
				cuartos.add(octavos.get(6));
			}
			else 
			{
				cuartos.add(octavos.get(5));
			}
			if(match5.getResult().equals(octavos.get(8))) 
			{
				cuartos.add(octavos.get(8));
			}
			else if(match5.getResult().equals(octavos.get(11))) 
			{
				cuartos.add(octavos.get(11));
			}
			else 
			{
				cuartos.add(octavos.get(8));
			}
			if(match6.getResult().equals(octavos.get(9))) 
			{
				cuartos.add(octavos.get(9));
			}
			else if(match6.getResult().equals(octavos.get(10))) 
			{
				cuartos.add(octavos.get(10));
			}
			else 
			{
				cuartos.add(octavos.get(9));
			}
			if(match7.getResult().equals(octavos.get(12))) 
			{
				cuartos.add(octavos.get(12));
			}
			else if(match7.getResult().equals(octavos.get(15))) 
			{
				cuartos.add(octavos.get(15));
			}
			else 
			{
				cuartos.add(octavos.get(12));
			}
			if(match8.getResult().equals(octavos.get(13))) 
			{
				cuartos.add(octavos.get(13));
			}
			else if(match8.getResult().equals(octavos.get(14))) 
			{
				cuartos.add(octavos.get(14));
			}
			else 
			{
				cuartos.add(octavos.get(13));
			}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Those who advance in the tournament are: "+cuartos.get(0)+" , "+cuartos.get(1)+" , "
				+cuartos.get(2)+" , "+cuartos.get(3)+" , "+cuartos.get(4)+" , "+cuartos.get(5)+" , "
				+cuartos.get(6)+" , "+cuartos.get(7);

	}
	
	public String SimulateCuartos() 
	{
		
		try {
			
			Match match1=mservice.SimulateMatchString(cuartos.get(0), cuartos.get(1));		
			Match match2=mservice.SimulateMatchString(cuartos.get(2), cuartos.get(3));
			
			Match match3=mservice.SimulateMatchString(cuartos.get(4), cuartos.get(5));		
			Match match4=mservice.SimulateMatchString(cuartos.get(6), cuartos.get(7));
			
			
			if(match1.getResult().equals(cuartos.get(0))) 
			{
				semis.add(cuartos.get(0));
			}
			else if(match1.getResult().equals(cuartos.get(1))) 
			{
				semis.add(cuartos.get(1));
			}
			else 
			{
				semis.add(cuartos.get(0));
			}
			if(match2.getResult().equals(cuartos.get(2))) 
			{
				semis.add(cuartos.get(2));
			}
			else if(match2.getResult().equals(cuartos.get(3))) 
			{
				semis.add(cuartos.get(3));
			}
			else 
			{
				semis.add(cuartos.get(2));
			}
			if(match3.getResult().equals(cuartos.get(4))) 
			{
				semis.add(cuartos.get(4));
				
			}
			else if (match3.getResult().equals(cuartos.get(5))) 
			{
				semis.add(cuartos.get(5));
			}
			else 
			{
				semis.add(cuartos.get(4));
			}
			if(match4.getResult().equals(cuartos.get(6))) 
			{
				semis.add(cuartos.get(6));
			}
			else if (match4.getResult().equals(cuartos.get(7))) 
			{
				semis.add(cuartos.get(7));
			}
			else 
			{
				semis.add(cuartos.get(6));
			}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Those who advance to semis are: "+semis.get(0)+" , "+semis.get(1)+" , "
		+semis.get(2)+" , "+semis.get(3);
		
	}
	
	
	public String SimulateSemis()
	{
		
		try {
			
			Match match1=mservice.SimulateMatchString(semis.get(0), semis.get(1));		
			Match match2=mservice.SimulateMatchString(semis.get(2), semis.get(3));
			
			if(match1.getResult().equals(semis.get(0))) 
			{
				thefinal.add(semis.get(0));
				thirdplace.add(semis.get(1));
			}
			else if(match1.getResult().equals(semis.get(1))) 
			{
				thefinal.add(semis.get(1));
				thirdplace.add(semis.get(0));
			}
			else 
			{
				thefinal.add(semis.get(0));
				thirdplace.add(semis.get(1));
			}
			if(match2.getResult().equals(semis.get(2))) 
			{
				thefinal.add(semis.get(2));
				thirdplace.add(semis.get(3));
			}
			else if (match2.getResult().equals(semis.get(3))) 
			{
				thefinal.add(semis.get(3));
				thirdplace.add(semis.get(2));
			}
			else 
			{
				thefinal.add(semis.get(2));
				thirdplace.add(semis.get(3));
			}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return "Those who advance to The final are: "+thefinal.get(0)+" , "+thefinal.get(1)+
	    " ,the ones who will play for third place are:  "
		+thirdplace.get(0)+" , "+thirdplace.get(1);
		
	}
	
	public String SimulateTheFinal() 
	{
		final String string="The World Cup Winner is: ";
		
		try {
			
			Match match1=mservice.SimulateMatchString(thefinal.get(0), thefinal.get(1));
			if(match1.getResult().equals(thefinal.get(0))) 
			{
				return string+ thefinal.get(0);
			}
			else if(match1.getResult().equals(thefinal.get(1))) 
			{
				return string+thefinal.get(1);
			}
			else 
			{
				return string+ thefinal.get(0);
			}
		}
		catch(Exception e){
			
			e.getMessage();
		}
		
		return null;

		
	}
	
	
	public String SimulateThirdPlace() 
	{
		
		 final String string="The Thirdplace goes to: ";
		 
		try {
			
			Match match1=mservice.SimulateMatchString(thirdplace.get(0), thirdplace.get(1));
			
			if(match1.getResult().equals(thirdplace.get(0))) 
			{
				return string+ thirdplace.get(0);
			}
			else if(match1.getResult().equals(thirdplace.get(1))) 
			{
				return string+thirdplace.get(1);
			}
			else 
			{
				return string+ thirdplace.get(0);
			}
		}
		catch(Exception e) {
			
			e.getMessage();
		}
		
		return null;
	}
	
}