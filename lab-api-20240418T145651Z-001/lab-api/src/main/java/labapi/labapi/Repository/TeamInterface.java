package labapi.labapi.Repository;
import org.springframework.data.repository.CrudRepository;

import labapi.labapi.Entities.*;


public interface TeamInterface extends CrudRepository<Team,Long>{

	Team findByNombreEquipo(String name);
}