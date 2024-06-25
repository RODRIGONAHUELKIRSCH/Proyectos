package quarkus.obraSocial.Controllers;

import java.util.List;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import quarkus.obraSocial.Dtos.TurnoDTO;
import quarkus.obraSocial.Services.TurnoService;

@Path("/turnos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TurnoResource {

	@Inject
    TurnoService turnoService;

    @POST
	@Operation(summary="Crear un Turno",description="Logica de creado de un turno")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Turno creada"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response agregarTurno(TurnoDTO turnodto) {
        TurnoDTO creada = turnoService.agregarTurno(turnodto);
        return Response.status(Response.Status.CREATED).entity(creada).build();
    }
    
    @GET
	@Operation(summary="Obtener un Turno",description="Logica de obtencion de un turno")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Turno mostrado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public List<TurnoDTO> listarTurno(){
    	return turnoService.listarTurnos();
    }
    
    @PUT
    @Path("/{id}")
    @Transactional
	@Operation(summary="Modificar un Turno",description="Logica de modificacion de un turno")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Turno modificado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response updateTurno(@PathParam("id") Long id, TurnoDTO turnoDTO) {
        TurnoDTO updated = turnoService.updateturno(id, turnoDTO);
        return Response.ok(updated).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
	@Operation(summary="Eliminar un Turno",description="Logica de borrado de un turno")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Turno Eliminado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response deleteTurno(@PathParam("id") Long id) {
        turnoService.deleteturno(id);
        return Response.noContent().build();
    }
}