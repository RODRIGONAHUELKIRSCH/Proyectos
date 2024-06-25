package quarkus.obraSocial.Entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="Paciente")
@ApiModel(value="Paciente",description="Creacion tabla paciente")
public class Paciente extends PanacheEntity{

	@ApiModelProperty(notes="nombre del cliente")
	@Column(name="Nombre",nullable=false)
	String Nombre;
	
	@ApiModelProperty(notes="apellido del cliente")
	@Column(name="Apellido",nullable=false)
	String Apellido;
	
	@ApiModelProperty(notes="email del paciente")
	@Column(name="Email",unique=true,nullable=false)
	String Email;
	
	@ApiModelProperty
	@Column(name="Password",unique=true,nullable=false)
	String Password;

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