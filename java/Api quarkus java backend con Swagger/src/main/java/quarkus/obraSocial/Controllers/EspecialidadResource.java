package quarkus.obraSocial.Controllers;

import java.util.List;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import quarkus.obraSocial.Dtos.EspecialidadDTO;
import quarkus.obraSocial.Services.EspecialidadService;

@Path("/especialidades")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class EspecialidadResource {

    @Inject
    EspecialidadService especialidadService;

    
    @GET
	@Operation(summary="Obtener una especialidad",description="Logica de obtencion de una especialidad")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Especialidad mostrada"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public List<EspecialidadDTO> listarEspecialidades() {
        return especialidadService.listarTodas();
    }

    @POST
	@Operation(summary="Crear una especialidad",description="Logica de creado de una especialidad")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Especialidad creada"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response crearEspecialidad(EspecialidadDTO especialidadDTO) {
        EspecialidadDTO creada = especialidadService.crearEspecialidad(especialidadDTO);
        return Response.status(Response.Status.CREATED).entity(creada).build();
    }

    @DELETE
    @Path("/{id}")
    public Response eliminarEspecialidad(@PathParam("id") Long id) {
        if (especialidadService.eliminarEspecialidad(id)) {
            return Response.noContent().build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
    
}