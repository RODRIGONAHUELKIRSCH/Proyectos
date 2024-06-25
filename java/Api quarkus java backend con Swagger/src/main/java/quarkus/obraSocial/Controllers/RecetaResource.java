package quarkus.obraSocial.Controllers;

import java.util.List;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import quarkus.obraSocial.Dtos.RecetaDTO;
import quarkus.obraSocial.Services.RecetaService;

@Path("/recetas")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class RecetaResource {

	@Inject
    RecetaService recetaService;

    @POST
	@Operation(summary="Crear una Receta",description="Logica de creado de una receta")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Receta creado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response agregarReceta(RecetaDTO recetadto) {
        RecetaDTO creada = recetaService.agregarReceta(recetadto);
        return Response.status(Response.Status.CREATED).entity(creada).build();
    }
    
    @GET
	@Operation(summary="Obtener una Receta",description="Logica de obtencion de un receta")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Receta mostrado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public List<RecetaDTO> listarReceta(){
    	return recetaService.listarRecetas();
    }
    
    @GET
    @Path("/{id}")
    @Transactional
	@Operation(summary="Obtener la receta por id",description="Logica de obtencion por id de una receta")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Receta mostrada"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response obtenerrecetas(@PathParam("id") Long id) {
         
         return Response.ok(recetaService.obtenerreceta(id)).build();
    }
    
}