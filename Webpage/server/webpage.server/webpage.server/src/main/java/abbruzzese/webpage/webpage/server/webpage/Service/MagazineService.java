package abbruzzese.webpage.webpage.server.webpage.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abbruzzese.webpage.webpage.server.webpage.DTO.DTOMagazine;
import abbruzzese.webpage.webpage.server.webpage.Mappers.MagazineMapper;
import abbruzzese.webpage.webpage.server.webpage.Repository.MagazineRepository;
import abbruzzese.webpage.webpage.server.webpage.entities.Magazine;
import jakarta.transaction.Transactional;

@Service
public class MagazineService {

	@Autowired
	private MagazineMapper MagazineMapper;

    @Autowired
    private MagazineRepository magazineRepository;

    @Transactional
    public List<DTOMagazine> getMagazinesByYearRange(String startYear, String endYear) {
        List<Magazine> magazines = magazineRepository.findRevistasByAnioRange(startYear, endYear);
        
        return magazines.stream()
                        .map(MagazineMapper::MagazinetoDTO)
                        .collect(Collectors.toList());
    }

	@Transactional
    public DTOMagazine saveMagazine(DTOMagazine dto) {
        Magazine magazine = MagazineMapper.DTOtoMagazine(dto);
        magazine = magazineRepository.save(magazine);
        return MagazineMapper.MagazinetoDTO(magazine);
    }

	@Transactional
    public List<DTOMagazine> getAllMagazines() {
        return ((List<Magazine>) magazineRepository.findAll())
				.stream()
                .map(MagazineMapper::MagazinetoDTO)
                .collect(Collectors.toList());
    }

	@Transactional
    public Optional<DTOMagazine> getMagazineByName(String nombre) {
        return magazineRepository.findByNombre(nombre)
                .map(MagazineMapper::MagazinetoDTO);
    }

	@Transactional
	public DTOMagazine updateMagazine(String id, DTOMagazine dto) {
        Optional<Magazine> existingMagazineOpt = magazineRepository.findById(id);
        if (existingMagazineOpt.isPresent()) {
            Magazine existingMagazine = existingMagazineOpt.get();
            existingMagazine.setNombre(dto.getNombre());
            existingMagazine.setDescripcion(dto.getDescripcion());
            existingMagazine.setAño(dto.getAño());
            existingMagazine.setImageString(dto.getImageString());
            magazineRepository.save(existingMagazine); // Guarda los cambios
            return MagazineMapper.MagazinetoDTO(existingMagazine);
        }
        return null;
    }

    public void deleteMagazine(String id) {
		magazineRepository.deleteById(id);
    }

    // Método para obtener el enlace de la última revista
    @Transactional
    public String obtenerUltimoEnlace() {
        Optional<Magazine> ultimaRevistaOpt = magazineRepository.findLastMagazine();
        return ultimaRevistaOpt.map(Magazine::getEnlace).orElse(null); // Retorna el enlace o null si no se encuentra
    }

    @Transactional
    public Map<String, Object> obtenerUltimoLink() {
    Optional<Magazine> ultimaRevistaOpt = magazineRepository.findLastMagazine();
    Map<String, Object> response = new HashMap<>();

    if (ultimaRevistaOpt.isPresent()) {
        Magazine ultimaRevista = ultimaRevistaOpt.get();
        response.put("enlace", ultimaRevista.getEnlace());
        response.put("Nombre", ultimaRevista.getNombre());
        response.put("ImageString", ultimaRevista.getImageString());
    }

    return response; // Retorna el Map con los 3 atributos
    }

}