package quarkus.obraSocial.Config;


import jakarta.ws.rs.core.Application;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Contact;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import jakarta.ws.rs.ApplicationPath;

@OpenAPIDefinition(
		info=@Info(
			title="Api Obra Social",
			version="1.0.0",
			contact=@Contact(
					name="Rodrigo Kirsch",
					email="mrnaaaa@gmail.com"					
					)

			)
	
		)

public class SwaggerConfig extends Application {

}
