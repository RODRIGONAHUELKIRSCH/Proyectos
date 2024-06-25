package quarkus.obraSocial.Repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Entities.Turno;

@ApplicationScoped
public class TurnoRepository implements PanacheRepository<Turno> {
}
