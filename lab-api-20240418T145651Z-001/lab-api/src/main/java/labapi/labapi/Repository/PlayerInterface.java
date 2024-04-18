package labapi.labapi.Repository;
import org.springframework.data.repository.CrudRepository;

import labapi.labapi.Entities.*;

public interface PlayerInterface extends CrudRepository<Player,Long> {

	Player	findByNombreJugador(String NombreJugador);

}