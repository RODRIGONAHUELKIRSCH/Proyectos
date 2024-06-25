package quarkus.obraSocial.Repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import quarkus.obraSocial.Entities.Paciente;

@ApplicationScoped
public class PacienteRepository implements PanacheRepository<Paciente> {
	
}