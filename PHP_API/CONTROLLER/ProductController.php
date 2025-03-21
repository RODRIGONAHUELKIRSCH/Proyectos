<?php 

namespace App\Controller;

use App\Repository\ProductRepository;
use App\Service\ProductService;
use App\Attribute\Route;
use App\DTO\DTOProduct;

class ProductController {

    private $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    #[Route('/product/getAllProducts', method: 'GET')]
    public function getAllProducts()
    {
        $dtoproducts = $this->productService->getAllProducts();
        header('Content-Type: application/json');
        echo json_encode($dtoproducts,JSON_PRETTY_PRINT);
    }

    #[Route('/product/getProductByName', method: 'GET')]
    public function getProductByName()
    {
        $name = $_GET['nombre'] ?? null;
        header('Content-Type: application/json');
        if ($name) {
            $product = $this->productService->getProductByName($name);
            if ($product) {

                echo json_encode($product, JSON_PRETTY_PRINT);
               
            } else {
                echo json_encode(['message' => 'Product not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'Name is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/product/deleteProduct', method: 'DELETE')]
    public function deleteProduct()
    {
        $name = $_GET['nombre'] ?? null;
        header('Content-Type: application/json');
        if ($name) {
            $result = $this->productService->deleteProduct($name);
            if ($result) {
                echo json_encode(['message' => 'Product deleted'],JSON_PRETTY_PRINT);
            } else {
                echo json_encode(['message' => 'Product not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'Name is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/product/createProduct', method: 'POST')]
    public function createProduct() {
        header('Content-Type: application/json');
    
        // Validar que todos los datos fueron enviados en el form-data
        $requiredFields = ['file', 'nombre', 'marca', 'categoria'];

        foreach ($requiredFields as $field) {
            if ($field === 'file' && empty($_FILES[$field])) {
                return json_encode(['error' => 'El archivo es obligatorio.']);
            } elseif ($field !== 'file' && empty($_POST[$field])) {
                return json_encode(['error' => "El campo '{$field}' es obligatorio."]);
            }
        }


        // Pasar todos los datos al servicio
        $result = $this->productService->handleProductUpload(
            $_POST['nombre'],
            $_POST['marca'],
            $_POST['categoria'],
            $_FILES['file']
        );
        
        if ($result) {
            http_response_code(200);
            echo json_encode($result, JSON_PRETTY_PRINT);
        } else {
            http_response_code(403);
            echo json_encode(['message' => 'Error al crear el producto']);
        }
    }

    #[Route('/product/getCategoria', method:'GET')]
    public function getCategoriaProduct() {
        header('Content-Type: application/json');
        $categoria =  $_GET['categoria'] ?? null;
        
        $product= $this->productService->getProductsByCategoria($categoria);
        if ($product) {

            echo json_encode(["imageproduct"=> $product], JSON_PRETTY_PRINT);
           
        } else {
            echo json_encode(['message' => 'Categoria not found'],JSON_PRETTY_PRINT);
        }


    }

    #[Route('/product/filename', method: 'GET')]
    public function getProductImage(){
        header('Content-Type: application/json');

        $uploadDir = __DIR__ . "/../SERVICE/productupload";

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