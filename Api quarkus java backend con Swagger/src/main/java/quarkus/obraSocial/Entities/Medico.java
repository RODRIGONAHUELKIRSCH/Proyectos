package quarkus.obraSocial.Entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Medico")
@ApiModel(value="Medico",description="Creacion tabla medico")
public class Medico extends PanacheEntity {

	@ApiModelProperty(notes="especialidad del medico")
    @ManyToOne(targetEntity=Especialidad.class,fetch=FetchType.LAZY)
    private Especialidad especialidad;
    
	@ApiModelProperty(notes="nombre del medico")
	@Column(name="nombre",nullable=false)
	private String nombre;

	@ApiModelProperty(notes="apellido del medico")
	@Column(name="apellido",unique=true,nullable=false)
	private String apellido;
	
	@ApiModelProperty(notes="email del medico")
	@Column(name="email",unique=true,nullable=false)
	private String email;
	
	@ApiModelProperty
	@Column(name="password",nullable=false)
	private String password;
	
	@ApiModelProperty
	@Column(name="foto",unique=true,nullable=false)
	private String foto;
	

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setFoto(String foto) {
		this.foto = foto;
	}
	
    public String getFoto() {
        return foto;
    }
    
	
	public Especialidad getEspecialidad() {
		return especialidad;
	}

	public void setEspecialidad(Especialidad especialidad) {
		this.especialidad = especialidad;
	}


}