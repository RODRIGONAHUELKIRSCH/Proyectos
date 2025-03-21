<?php

namespace App\Service;

use App\Entity\Magazine;
use App\Entity\Newsletter;
use App\Repository\MagazineRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Mapper\MagazineMapper;
require_once __DIR__ . '/../sendMagazineEmail.php';

class MagazineService{

    private $magazineRepository;
    private EntityManagerInterface $entityManager;


    public function __construct(MagazineRepository $magazineRepository, EntityManagerInterface $entityManager)
    {
        $this->magazineRepository = $magazineRepository;
        $this->entityManager = $entityManager;
    }

    public function getMagazineByNombre($nombre)
    {

        $magazine = $this->magazineRepository->findByNombre($nombre);

        if ($magazine) {
            return  MagazineMapper::MagazineToDTO($magazine);
        }
    }

    public function getAllMagazine()
    {
        $magazine = $this->magazineRepository->findAll();  // Método findAll() de Doctrine
        return array_map([MagazineMapper::class, 'MagazinetoDTO'], $magazine);  // Convertimos todos los usuarios en DTOs
    }

    public function deleteMagazine($nombre)
    {
        $magazine = $this->magazineRepository->findByNombre($nombre);  // Buscamos al usuario por email
        if ($magazine) {
            $imagestring=$magazine->getimagestring();
            $uploadDir = __DIR__ . '/magazineupload/';  
            $imagePath = $uploadDir . $imagestring;  
    
            // Verifica si la imagen existe y elimínala
            if ($imagestring && file_exists($imagePath)) {
                unlink($imagePath); // Elimina el archivo físico
            }
            try {
                // Verifica si la imagen existe y elimínala
                if ($imagestring && file_exists($imagestring)) {
                    unlink($imagestring); // Elimina el archivo físico
                }
            } catch (\Throwable $e) {
                return [            
                    'message' => 'No se pudo eliminar la imagen: ' . $e->getMessage(),
                ];
            }
       
            $this->entityManager->remove($magazine);  // Usamos remove() de Doctrine
            $this->entityManager->flush();  // Confirmamos los cambios
            return true;
        }
        return false;
    }

        public function handleMagazineUpload($nombre, $descripcion, $año, $imagestring, $enlace)
        {
            // Definir directorio de almacenamiento
            $uploadDir = __DIR__ . '/magazineupload';
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }
    
            // Generar un nombre único para la imagen
            $fileName = uniqid() . '_' . basename($imagestring['name']);
            $filePath = $uploadDir . DIRECTORY_SEPARATOR . $fileName;
    
            // Mover el archivo al directorio de destino
            if (!move_uploaded_file($imagestring['tmp_name'], $filePath)) {
                return ['error' => 'Error al subir la imagen.'];
            }
    
            // Guardar en la base de datos
            $magazine = new Magazine($nombre,$descripcion,$año,$fileName,$enlace);
    
            $this->entityManager->persist($magazine);
            $this->entityManager->flush();

              // Obtener todos los emails de los suscriptores
              $newsletterRepository = $this->entityManager->getRepository(Newsletter::class);
              $newsletterService = new NewsletterService($newsletterRepository, $this->entityManager);
              $newsletterDTOs = $newsletterService->getAllNewsletter();
              $emails = array_map(fn($dto) => $dto->getEmail(), $newsletterDTOs);

              // Enviar email masivo con Batch Sending
              enviarCorreoRevistaPorLotes($emails, $magazine);
          
            return [
                'success' => true,
                'message' => 'Revista subida correctamente.',
                'magazine' => MagazineMapper::MagazineToDTO($magazine)
            ];
        }
        
    public function getMagazineByEmail($email){

        $magazine = $this->magazineRepository->findByEmail($email);

        if ($magazine) {

            return MagazineMapper::MagazineToDTO($magazine);
            
        }
    }

    public function getUltimoEnlaceMagazine(){

        $ultimoenlacemagazine= $this->magazineRepository->findLastMagazine();

        if ($ultimoenlacemagazine) {
        return $ultimoenlacemagazine ? $ultimoenlacemagazine->getEnlace(): null;
        }

    }

    // Método para obtener los datos de la última revista
    public function obtenerUltimoLink() {
    // Llamar al repositorio para obtener la última revista
    $ultimaRevista = $this->magazineRepository->findLastMagazine();

    // Crear un array asociativo para almacenar los datos
    $response = [];

    // Si se encuentra la revista, agregar los valores al array
    if ($ultimaRevista) {
        $response['enlace'] = $ultimaRevista->getEnlace();
        $response['Nombre'] = $ultimaRevista->getNombre();
        $response['ImageString'] = $ultimaRevista->getImageString();
    }

    // Retornar el array con los 3 atributos
    return $response;
    }

    public function getMagazinesByYearRange(string $startYear, string $endYear): array
{
    $magazines = $this->magazineRepository->findRevistasByAnioRange($startYear, $endYear);
    
    return array_map(fn($magazine) => MagazineMapper::MagazineToDTO($magazine), $magazines);
}

}

?>