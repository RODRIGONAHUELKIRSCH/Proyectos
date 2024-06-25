package labapi.labapi.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import labapi.labapi.Entities.Group;


@Repository
public interface GroupInterface extends CrudRepository<Group,Long> {

Group findBygrupo(String grupo);

}