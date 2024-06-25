package quarkus.obraSocial.Controllers;

import jakarta.inject.Inject;
import java.util.List;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;

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
import quarkus.obraSocial.Dtos.MedicoDTO;
import quarkus.obraSocial.Services.MedicoService;

//ESTA SERIA LA CAPA QUE DIRECCIONA LAS PETICIONES A EL SERVICIO

@Path("/medicos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MedicoResource {

    @Inject
    MedicoService medicoService;

    @POST
	@Operation(summary="Crear un Medico",description="Logica de creado de un medico")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Medico creado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public Response crearMedico(MedicoDTO medicoDTO) {
    	
        MedicoDTO creado = medicoService.crearMedico(medicoDTO);
        return Response.ok(creado).build();
    }
    
    @GET
	@Operation(summary="Obtener un Medico",description="Logica de obtencion de un medico")
	@APIResponses(value={
		@APIResponse(responseCode="200",description="Medico mostrado"),
		@APIResponse(responseCode="404",description="Not Found")
})
    public List<MedicoDTO> listarMedicos(){
    	return medicoService.listarMedicos();
    }
    @PUT
    @Path("/{id}")
    public Response actualizarMedico(@PathParam("id") Long id, MedicoDTO medicoDTO) {
        MedicoDTO actualizado = medicoService.actualizarMedico(id, medicoDTO);
        if (actualizado == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(actualizado).build();
    }

    @DELETE
    @Path("/{id}")
    public Response eliminarMedico(@PathParam("id") Long id) {
        if (medicoService.eliminarMedico(id)) {
            return Response.noContent().build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}