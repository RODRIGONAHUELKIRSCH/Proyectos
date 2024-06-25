package labapi.labapi.Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Random;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import labapi.labapi.Entities.Match;
import labapi.labapi.Repository.MatchInterface;
import labapi.labapi.Repository.TeamInterface;

@SpringBootTest
 class MatchServiceTest {

	
	@Mock
	MatchInterface minterface;
	
	@Mock
	TeamInterface tinterface;
	
	@InjectMocks
	private MatchService matchservice;
	
	@Mock
	Match match;
	
	@Mock
	List<Match> matches;
	
	@BeforeEach
	public void setUp() 
	{
		match=new Match();
	}
	
	@Test
	void SaveMatch() {
		 when(minterface.save(match)).thenReturn(match);;
			
			assertEquals(match,matchservice.saveMatch(match));
	} 
	
	@Test
	void getPlayers()
	{

		 when(minterface.findAll()).thenReturn(matches);
		
		assertEquals(matches,matchservice.GetMatches());
	}
	
	@Test
	void SimulateMatch() 
	{
		Random rnd=new Random();
		match.setSeleccionLocal("Argentina");
		match.setSeleccionVisitante("Polonia");
		Integer goalhome=rnd.nextInt(9);
		Integer goalaway=rnd.nextInt(1);	
		match.setHomegoals(goalhome);
		match.setAwaygoals(goalaway);
		match.setResult(match.getSeleccionLocal());
		
		when(minterface.save(match)).thenReturn(match);
		
		assertEquals(match,minterface.save(match));
	}
	
	@Test
	void SimulateMatch2() 
	{
		Random rnd=new Random();
		match.setSeleccionLocal("Argentina");
		match.setSeleccionVisitante("Polonia");
		Integer goalhome=rnd.nextInt(1);
		Integer goalaway=rnd.nextInt(9);	
		match.setHomegoals(goalhome);
		match.setAwaygoals(goalaway);
		match.setResult(match.getSeleccionVisitante());
		
		when(minterface.save(match)).thenReturn(match);
		
		assertEquals(match,minterface.save(match));
	}
	
	@Test
	void SimulateMatch3() 
	{
		Random rnd=new Random();
		match.setSeleccionLocal("Argentina");
		match.setSeleccionVisitante("Polonia");
		Integer goalhome=rnd.nextInt(1);
		Integer goalaway=rnd.nextInt(1);	
		match.setHomegoals(goalhome);
		match.setAwaygoals(goalaway);
		match.setResult("Empate");
		
		when(minterface.save(match)).thenReturn(match);
		
		assertEquals(match,minterface.save(match));
	}
	
	@Test
	void SimulateMatchString() 
	{
		Random rnd=new Random();
		String s1="Argentina";
		String s2="Polonia";
		match.setSeleccionLocal(s1);
		match.setSeleccionVisitante(s2);
		Integer goalhome=rnd.nextInt(9);
		Integer goalaway=rnd.nextInt(1);	
		match.setHomegoals(goalhome);
		match.setAwaygoals(goalaway);
		match.setResult(match.getSeleccionLocal());
		
		when(minterface.save(match)).thenReturn(match);
		
		assertEquals(match,minterface.save(match));
	}
	
	@Test
	void SimulateMatchString2() 
	{
		Random rnd=new Random();
		String s1="Argentina";
		String s2="Polonia";
		match.setSeleccionLocal(s1);
		match.setSeleccionVisitante(s2);
		Integer goalhome=rnd.nextInt(1);
		Integer goalaway=rnd.nextInt(9);	
		match.setHomegoals(goalhome);
		match.setAwaygoals(goalaway);
		match.setResult(match.getSeleccionVisitante());
		
		when(minterface.save(match)).thenReturn(match);
		
		assertEquals(match,minterface.save(match));
	}
	
	@Test
	void SimulateMatchString3() 
	{
		Random rnd=new Random();
		String s1="Argentina";
		String s2="Polonia";
		match.setSeleccionLocal(s1);
		match.setSeleccionVisitante(s2);
		Integer goalhome=rnd.nextInt(1);
		Integer goalaway=rnd.nextInt(1);	
		match.setHomegoals(goalhome);
		match.setAwaygoals(goalaway);
		match.setResult("Empate");
		
		when(minterface.save(match)).thenReturn(match);
		
		assertEquals(match,minterface.save(match));
	}
	
	@Test
	void TeamdeleteById() 
	{
		minterface.deleteById(match.getMatchid());
	}
	
}