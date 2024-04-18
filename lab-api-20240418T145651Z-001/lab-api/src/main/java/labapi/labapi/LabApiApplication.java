package labapi.labapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(scanBasePackages="labapi.labapi")
@EntityScan("labapi.labapi.Entities")
@EnableJpaRepositories("labapi.labapi.Repository")
public class LabApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(LabApiApplication.class, args);
	}

}
/*
 *To Do List /review meeting records to acquire a more accurate perspective on tasks
 *1 AddPlayer to Team must set a column for it 
 *2 team must have 11 players at least should pass an array of players check above requirement works(in process should test the endpoint)
 *3rework points or add match entity so either you have an group table and a match one or u have it all in one entity
 *4add endpoint to simulate match groups or groups points
 *5check above requirements works
 **/
 