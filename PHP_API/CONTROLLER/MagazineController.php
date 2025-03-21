<?php

namespace App\Controller;

use App\Service\MagazineService;
use App\Attribute\Route;



class MagazineController{

    private $magazineService;

    public function __construct(MagazineService $magazineService)
    {
        $this->magazineService = $magazineService;
    }

    #[Route('/magazine/getAllMagazine', method: 'GET')]
    public function getAllMagazine()
    {
        $dtomagazine = $this->magazineService->getAllMagazine();
        header('Content-Type: application/json');
        echo json_encode($dtomagazine,JSON_PRETTY_PRINT);
    }

    #[Route('/magazine/getMagazineByNombre', method: 'GET')]
    public function getMagazineByNombre()
    {
        $nombre = $_GET['nombre'] ?? null;
        header('Content-Type: application/json');
        if ($nombre) {
            $magazine = $this->magazineService->getMagazineByNombre($nombre);
            if ($magazine) {

                echo json_encode($magazine, JSON_PRETTY_PRINT);
               
            } else {
                echo json_encode(['message' => 'Magazine not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'Nombre is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/magazine/deleteMagazine', method: 'DELETE')]
    public function deleteMagazine()
    {
        $nombre = $_GET['nombre'] ?? null;
        header('Content-Type: application/json');
        if ($nombre) {
            $result = $this->magazineService->deleteMagazine($nombre);
            if ($result) {
                echo json_encode(['message' => 'Magazine deleted'],JSON_PRETTY_PRINT);
            } else {
                echo json_encode(['message' => 'Magazine not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'Nombre is required'],JSON_PRETTY_PRINT);
        }
    }
    
    #[Route('/magazine/createMagazine', method: 'POST')]
    public function uploadMagazine()
    {
        header('Content-Type: application/json');
        // Validar que todos los datos fueron enviados en el form-data
        $requiredFields = ['file', 'nombre', 'descripcion', 'año', 'enlace'];
    
        foreach ($requiredFields as $field) {
            if ($field === 'file' && empty($_FILES[$field])) {
                return json_encode(['error' => 'El archivo es obligatorio.']);
            } elseif ($field !== 'file' && empty($_POST[$field])) {
                return json_encode(['error' => "El campo '{$field}' es obligatorio."]);
            }
        }
    
        // Pasar todos los datos al servicio
        $result = $this->magazineService->handleMagazineUpload(
            $_POST['nombre'],
            $_POST['descripcion'],
            $_POST['año'],
            $_FILES['file'],
            $_POST['enlace']
        );
        if ($result) {
            http_response_code(200);
            echo json_encode( $result,JSON_PRETTY_PRINT);
        } else {
            http_response_code(403);
            echo json_encode(['message' => 'Error al crear la Revista']);
        }
      
    }

    #[Route('/magazine/rangoMagazine', method: 'GET')]
public function getMagazinesByYearRange()
{
    header('Content-Type: application/json');

    $startYear = $_GET['startYear'] ?? null;
    $endYear = $_GET['endYear'] ?? null;

    if (empty($startYear) || empty($endYear)) {
        echo json_encode(['error' => 'Los parámetros startYear y endYear son obligatorios.'], JSON_PRETTY_PRINT);
        http_response_code(400);
        return;
    }

    $magazines = $this->magazineService->getMagazinesByYearRange($startYear, $endYear);
    if($magazines){
        echo json_encode($magazines, JSON_PRETTY_PRINT);
    }else{
        echo json_encode([], JSON_PRETTY_PRINT);
    }
}

    #[Route('/magazine/ultimoenlace', method: 'GET')]
    public function getMagazineUltimoEnlace(){
        header('Content-Type: application/json');

    $enlace=$this->magazineService->getUltimoEnlaceMagazine();

    if($enlace){
        echo json_encode([$enlace], JSON_PRETTY_PRINT);
    }else{
        echo json_encode(['message'=> 'No se encontro la ultima revista'], JSON_PRETTY_PRINT);
    }

    } 

    #[Route('/magazine/getultimolink', method: 'GET')]
    public function getMagazineUltimoLink(){
        header('Content-Type: application/json');

        $link=$this->magazineService->obtenerUltimoLink();

        if($link){
            echo json_encode($link, JSON_PRETTY_PRINT);
        }else{
            echo json_encode(["message"=>"Error al obtener el link"],JSON_PRETTY_PRINT);    
        }
    }
    

    #[Route('/magazine/filename', method: 'GET')]
    public function getMagazineImage(){
        header('Content-Type: application/json');

        $uploadDir = __DIR__ . "/../SERVICE/magazineupload";

        // Verifica si el parámetro 'filename' está presente en la URL
        if (!isset($_GET['filename'])) {
            http_response_code(400);
            echo "Falta el parámetro 'filename'.";
            exit;
        }
        
        $filename = basename($_GET['filename']); // Sanitiza el nombre del archivo
        $imagePath = $uploadDir . DIRECTORY_SEPARATOR . $filename;

        // Verifica si el archivo existe
        if (!file_exists($imagePath)) {
            http_response_code(404);
            echo "Archivo no encontrado.";
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
        
        // Envía el archivo al cliente
        readfile($imagePath);
    }
    
}

?>