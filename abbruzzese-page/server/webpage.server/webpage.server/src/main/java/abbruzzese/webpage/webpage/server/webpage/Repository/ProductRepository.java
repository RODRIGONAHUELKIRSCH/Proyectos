package abbruzzese.webpage.webpage.server.webpage.Repository;

import org.springframework.data.repository.CrudRepository;

import abbruzzese.webpage.webpage.server.webpage.entities.Product;

public interface ProductRepository extends CrudRepository<Product,String> {

}
