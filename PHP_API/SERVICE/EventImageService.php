<?php 

namespace App\Service;

use App\Entity\EventImage;
use App\Repository\EventImageRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Mapper\EventImageMapper;

class EventImageService{

    private $eventimageRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(EventImageRepository $eventimageRepository, EntityManagerInterface $entityManager)
    {
        $this->eventimageRepository = $eventimageRepository;
        $this->entityManager = $entityManager;
    }

    public function getEventImageByEventImage($eventimage)
    {

        $eventimage = $this->eventimageRepository->findByEventImage($eventimage);

        if ($eventimage) {
            return  EventImageMapper::EventImageToDTO($eventimage);
        }
    }

    public function getAllEventImage()
    {
        $eventimage = $this->eventimageRepository->findAll();  // Método findAll() de Doctrine
        return array_map([EventImageMapper::class, 'EventImagetoDTO'], $eventimage);  // Convertimos todos los usuarios en DTOs
    }

    public function deleteEventImage($eventimage)
    {
       
        $eventimage = $this->eventimageRepository->findByEventImage($eventimage); // Buscamos al usuario por email
 
        if ($eventimage) {
            $imagePath = $eventimage->getEventImage(); // Asegúrate de que existe un método getImagePath()
            $uploadDir = __DIR__ . '/eventimageupload/';  
            $imagePath = $uploadDir . $imagePath;  
            try {
                // Verifica si la imagen existe y elimínala
                if ($imagePath && file_exists($imagePath)) {
                    unlink($imagePath); // Elimina el archivo físico
                }
            } catch (\Throwable $e) {
                return [            
                    'message' => 'No se pudo eliminar la imagen: ' . $e->getMessage(),
                ];
            }

            $this->entityManager->remove($eventimage);  // Usamos remove() de Doctrine
            $this->entityManager->flush();  // Confirmamos los cambios
            return true;
        }
        return false;
    }

    public function handleEventImageUpload($file,$estado){

        $uploadDir = __DIR__ . '/eventimageupload';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Generar un nombre único para la imagen
        $fileName = uniqid() . '_' . basename($file['name']);
        $filePath = $uploadDir . DIRECTORY_SEPARATOR . $fileName;

        // Mover el archivo al directorio de destino
        if (!move_uploaded_file($file['tmp_name'], $filePath)) {
            return ['error' => 'Error al subir la imagen.'];
        }
        $event = new EventImage($estado,$fileName);
    
        $this->entityManager->persist($event);
        $this->entityManager->flush();

        return [
            'success' => true,
            'message' => 'Revista subida correctamente.',
            'eventimage' => EventImageMapper::EventImageToDTO($event)
        ];
    }
    public function getEventImagesByState(string $state): array
    {
    return array_map(fn($eventImage) => EventImageMapper::EventImagetoDTO($eventImage), 
                     $this->eventimageRepository->findByState($state));
    }

}

?>