package abbruzzese.webpage.webpage.server.webpage.Mappers;

import org.springframework.stereotype.Component;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOMagazine;
import abbruzzese.webpage.webpage.server.webpage.entities.Magazine;

@Component(value = "MagazineMapper")
public class MagazineMapper {

        // Convierte una entidad Magazine a un DTO
    public DTOMagazine MagazinetoDTO(Magazine magazine) {
        DTOMagazine dto = new DTOMagazine();
        dto.setNombre(magazine.getNombre());
        dto.setDescripcion(magazine.getDescripcion());
        dto.setAño(magazine.getAño());
        dto.setImageString(magazine.getImageString());
        dto.setEnlace(magazine.getEnlace());
        dto.setFecha(magazine.getFecha());
        return dto;
    }

    // Convierte un DTO a una entidad Magazine
    public Magazine DTOtoMagazine(DTOMagazine dto) {
        Magazine magazine = new Magazine();
        magazine.setNombre(dto.getNombre());
        magazine.setDescripcion(dto.getDescripcion());
        magazine.setAño(dto.getAño());
        magazine.setImageString(dto.getImageString());
        magazine.setEnlace(dto.getEnlace());
        magazine.setFecha(dto.getFecha());
        return magazine;
    }


}