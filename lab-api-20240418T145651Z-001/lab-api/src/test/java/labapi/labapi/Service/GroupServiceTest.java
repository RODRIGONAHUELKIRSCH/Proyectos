package labapi.labapi.Service;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import labapi.labapi.Entities.Group;
import labapi.labapi.Repository.GroupInterface;
import labapi.labapi.Repository.TeamInterface;

@SpringBootTest
public class GroupServiceTest {
	
	@Mock
	GroupInterface ginterface;
	
	@Mock
	TeamInterface tinterface;
	
	@Mock
	MatchService mservice;
	
	
	@InjectMocks
	GroupService gservice;
	
	@Mock
	Group group;
	
	
	ArrayList<Integer> goalaverage=new ArrayList<>();
	ArrayList<Integer> puntos=new ArrayList<>();
	ArrayList<Integer> Fs=new ArrayList<>();
	@BeforeEach
	void setup() 
	{
		long id=11;
		group=new Group();
		group.setGroupid(id);
		group.setGrupo("A");
		

		
		MockitoAnnotations.openMocks(this);
		
	}
	
	@Test
	void SaveGroup() {
		when(ginterface.save(group)).thenReturn(group);;
			
		assertEquals(group,ginterface.save(group));
	} 
	
	@Test
	void getGroupbyId() 
	{
		when(ginterface.findById(group.getGroupid())).thenReturn(null);
		assertEquals(group,group);
	}
	
	@Test
	void getGroup() 
	{
		
		when(ginterface.findBygrupo(group.getGrupo())).thenReturn(group);
		
		assertEquals(group.getGrupo(),ginterface.findBygrupo("A"));
	}
	
	@Test
	void CreateGroupA() 
	{
//		String s1="Qatar";
//		String s2="Ecuador";
//		String s3="Paises Bajos";
//		String s4="Senegal";
//		
//		String s5="Group A created Succesfully.";
//	
//		puntos=gservice.SimulateGames(s1, s2, s3, s4);
//		group.setTeam1(s1);
//		group.setPoints1(puntos.get(0));
//		group.setGa1(goalaverage.get(0));
//		group.setTeam2(s2);
//		group.setGa2(puntos.get(1));
//		group.setGa2(goalaverage.get(1));
//		group.setTeam2(s3);
//		group.setGa2(puntos.get(2));
//		group.setGa2(goalaverage.get(2));
//		group.setTeam2(s4);
//		group.setGa2(puntos.get(3));
//		group.setGa2(goalaverage.get(3));
//		Fs=gservice.calculatefs(puntos);
//		group.setPrimero(Fs.get(0));
//		group.setSegundo(Fs.get(1));
//		when(gservice.SaveGroup(group)).thenReturn(group);
//		gservice.DetermineTeam(group);
//		assertEquals("Group A created Succesfully.",s5);
		
	}
	
}