package labapi.labapi.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import labapi.labapi.Entities.Match;

@Repository
public interface MatchInterface extends CrudRepository<Match,Long> {

}
//package labapi.labapi.Repository;
//import labapi.labapi.Entities.*;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface PointsInterface extends CrudRepository<Points,Long> {
//
//}