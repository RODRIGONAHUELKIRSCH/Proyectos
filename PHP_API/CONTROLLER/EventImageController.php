<?php 

namespace App\Controller;

use App\Service\EventImageService;
use App\Attribute\Route;

class EventimageController{

    private $eventimageService;

    public function __construct(EventImageService $eventimageService)
    {
        $this->eventimageService = $eventimageService;
    }
    

    #[Route('/eventimage/createEventImage', method: 'POST')]
    public function createEventImage()
    {
        header('Content-Type: application/json');
         $requiredFields = ['file', 'estado'];

         foreach ($requiredFields as $field) {
             if ($field === 'file' && empty($_FILES[$field])) {
                 return json_encode(['error' => 'El archivo es obligatorio.']);
             } elseif ($field !== 'file' && empty($_POST[$field])) {
                 return json_encode(['error' => "El campo '{$field}' es obligatorio."]);
             }
         }
 
 
         // Pasar todos los datos al servicio
         $result = $this->eventimageService->handleEventImageUpload(
            $_FILES['file'],
             $_POST['estado'],
             
         );
         
         if ($result) {
             http_response_code(200);
             echo json_encode([$result], JSON_PRETTY_PRINT);
         } else {
             http_response_code(403);
             echo json_encode(['message' => 'Error al crear el producto']);
         }
    }

    #[Route('/eventimage/getAllEventImage', method: 'GET')]
    public function getAllEventImage()
    {
        $dtonewsletter = $this->eventimageService->getAllEventImage();
        header('Content-Type: application/json');
        echo json_encode($dtonewsletter,JSON_PRETTY_PRINT);
    }

    #[Route('/eventimage/getEventImageByEventImage', method: 'GET')]
    public function getEventImageByName()
    {
        $eventimage = $_GET['eventimage'] ?? null;
        header('Content-Type: application/json');
        if ($eventimage) {
            $eventi = $this->eventimageService->getEventImageByEventImage($eventimage);
            if ($eventi) {

                echo json_encode($eventi, JSON_PRETTY_PRINT);
               
            } else {
                echo json_encode(['message' => 'EventImage not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'eventimage is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/eventimage/deleteEventImage', method: 'DELETE')]
    public function deleteEventImage()
    {
        $eventimage = $_GET['eventimage'] ?? null;
        header('Content-Type: application/json');
        if ($eventimage) {
            $result = $this->eventimageService->deleteEventImage($eventimage);
            if ($result) {
                echo json_encode(['message' => 'EventImage deleted'],JSON_PRETTY_PRINT);
            } else {
                echo json_encode(['message' => 'EventImage not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'EventImage is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/eventimage/state', method: 'GET')]
public function getEventImagesByState()
{
    header('Content-Type: application/json');
    $state = $_GET['state'] ?? null;
    if (empty($state)) {
        echo json_encode(['error' => 'El parámetro estado es obligatorio.'], JSON_PRETTY_PRINT);
        http_response_code(400);
        return;
    }

    $images = $this->eventimageService->getEventImagesByState($state);
    echo json_encode($images, JSON_PRETTY_PRINT);
}

#[Route('/eventimage/Activo', method: 'GET')]
public function getEventImagesActivo()
{
    header('Content-Type: application/json');
    $state="Activo";

    if (empty($state)) {
        echo json_encode(['error' => 'El parámetro estado es obligatorio.'], JSON_PRETTY_PRINT);
        http_response_code(400);
        return;
    }

    $images = $this->eventimageService->getEventImagesByState($state);
    echo json_encode($images, JSON_PRETTY_PRINT);
}

#[Route('/eventimage/Inactivo', method: 'GET')]
public function getEventImagesInactivo()
{
    header('Content-Type: application/json');
    $state="Inactivo";
    if (empty($state)) {
        echo json_encode(['error' => 'El parámetro estado es obligatorio.'], JSON_PRETTY_PRINT);
        http_response_code(400);
        return;
    }

    $images = $this->eventimageService->getEventImagesByState($state);
    echo json_encode($images, JSON_PRETTY_PRINT);
}

#[Route('/eventimage/filename', method: 'GET')]
public function serveEventImage() {
    // Directorio donde se almacenan las imágenes
    $uploadDir = __DIR__ . "/../SERVICE/eventimageupload";

    // Verifica si se ha proporcionado un nombre de archivo
    if (!isset($_GET['filename'])) {
        http_response_code(400);
        echo json_encode(["error" => "Falta el parámetro 'filename'."]);
        exit;
    }

    $filename = basename($_GET['filename']); // Sanitiza el nombre del archivo
    $imagePath = $uploadDir . DIRECTORY_SEPARATOR . $filename;

    // Verifica si el archivo existe
    if (!file_exists($imagePath)) {
        http_response_code(404);
        echo json_encode(["error" => "Archivo no encontrado."]);
        exit;
    }

    // Detecta el tipo de contenido del archivo
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $contentType = finfo_file($finfo, $imagePath);
    finfo_close($finfo);

    if (!$contentType) {
        $contentType = "application/octet-stream";
    }

    // Configura las cabeceras HTTP
    header("Content-Type: " . $contentType);
    header("Content-Disposition: inline; filename=\"" . $filename . "\"");
    header("Content-Length: " . filesize($imagePath));
    header("Cache-Control: public, max-age=3600"); // Mejora el rendimiento de caché

    // Envía el archivo al cliente
    readfile($imagePath);
}

}

?>