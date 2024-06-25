package quarkus.obraSocial.Repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Entities.Receta;

@ApplicationScoped
public class RecetaRepository implements PanacheRepository<Receta> {

}