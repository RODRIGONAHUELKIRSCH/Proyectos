package abbruzzese.webpage.webpage.server.webpage.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import abbruzzese.webpage.webpage.server.webpage.entities.Magazine;
import java.util.List;
import java.util.Optional;

public interface MagazineRepository extends CrudRepository<Magazine,String>{

    Optional<Magazine> findByNombre(String nombre);

    @Query("SELECT m FROM Magazine m WHERE m.Año BETWEEN :startYear AND :endYear")
    List<Magazine> findRevistasByAnioRange(@Param("startYear") String startYear, @Param("endYear") String endYear);
    
      // // Método para obtener la última revista según fecha de creación (si la tienes) o alguna otra lógica
      @Query("SELECT m FROM Magazine m ORDER BY m.fecha DESC ")
      Optional<Magazine> findLastMagazine();


}