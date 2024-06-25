package quarkus.obraSocial.Controllers;

import jakarta.ws.rs.core.MediaType;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import quarkus.obraSocial.Dtos.DisponibilidadDTO;
import quarkus.obraSocial.Services.DisponibilidadService;
import java.util.List;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;

@Path("/disponibilidades")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DisponibilidadResource {

    @Inject
    DisponibilidadService disponibilidadService;

    @POST
	@Operation(summary="Crear una Disponibilidad",description="Logica de creado de una disponibilidad")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Disponibilidad creada"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response agregarDisponibilidad(DisponibilidadDTO disponibilidadDTO) {
        DisponibilidadDTO creada = disponibilidadService.agregarDisponibilidad(disponibilidadDTO);
        return Response.status(Response.Status.CREATED).entity(creada).build();
    }
    
    @GET
	@Operation(summary="Obtener una Disponibilidad",description="Logica de obtencion de una disponibilidad")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Disponibilidad mostrada"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public List<DisponibilidadDTO> listarDisponibilidad(){
    	return disponibilidadService.listarDisponibilidades();
    }
    
    
    @GET
    @Path("/especialistas")
	@Operation(summary="Obtener Especialistas",description="Logica del segundo endpoint obtener Especialistas")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Obtener Especialistas"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public List<DisponibilidadDTO> listarEspecialistas(){
    	return disponibilidadService.listarEspecialista();
    }
}