package abbruzzese.webpage.webpage.server.webpage.Repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import abbruzzese.webpage.webpage.server.webpage.entities.Product;

public interface ProductRepository extends CrudRepository<Product,String> {

 Optional<Product> findByNombre(String Nombre);

@Query ("SELECT p FROM Product p WHERE p.Categoria = :categoria")
List<Product> FindByCategoria(@Param("categoria") String categoria);

}