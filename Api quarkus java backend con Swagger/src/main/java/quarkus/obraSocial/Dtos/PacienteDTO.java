package quarkus.obraSocial.Dtos;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PacienteDTO {


	String Nombre;
	
	String Apellido;
	
	String Email;
	
	String Password;
	
	public PacienteDTO() {}
	
	public PacienteDTO(String nombre, String apellido) {
		this.Nombre=nombre;
		this.Apellido=apellido;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getApellido() {
		return Apellido;
	}

	public void setApellido(String apellido) {
		Apellido = apellido;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}
	
}