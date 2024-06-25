package quarkus.obraSocial.Dtos;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class MedicoDTO {
	
	private Long idMedico;
	
	private Long idEspecialidad;

	private String nombre;
	
	private String apellido;
	
	private String foto;
	
	private String email;
	
	private String password;
	
	private EspecialidadDTO especialidadDto;
	


	
	public MedicoDTO() {}
	public MedicoDTO(String nombre,String apellido,String foto){
		this.nombre=nombre;
		this.apellido=apellido;
		this.foto=foto;
	}	
	//GETTERS Y SETTTERS
	

	public String getNombre() {
        return nombre;
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

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
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
	public Long getIdEspecialidad() {
		return idEspecialidad;
	}

	public void setIdEspecialidad(Long idEspecialidad) {
		this.idEspecialidad = idEspecialidad;
	}
    public EspecialidadDTO getEspecialidadDto() {
        return especialidadDto;
    }

    public void setEspecialidadDto(EspecialidadDTO especialidadDto) {
        this.especialidadDto = especialidadDto;
    }

	public Long getIdMedico() {
		return idMedico;
	}

	public void setIdMedico(Long idMedico) {
		this.idMedico = idMedico;
	}
	
}