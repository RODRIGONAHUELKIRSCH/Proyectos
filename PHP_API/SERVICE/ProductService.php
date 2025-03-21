<?php

namespace App\Service;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Mapper\ProductMapper;
use Exception;

class ProductService {

    private $productRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(ProductRepository $productRepository, EntityManagerInterface $entityManager)
    {
        $this->productRepository = $productRepository;
        $this->entityManager = $entityManager;
    }
    
    public function getProductByName($name)
    {

        $product = $this->productRepository->findByNombre($name);

        if ($product) {
            return  ProductMapper::ProductToDTO($product);
        }
    }

    public function getAllProducts()
    {
        $products = $this->productRepository->findAll();  // Método findAll() de Doctrine
        return array_map([ProductMapper::class, 'ProducttoDTO'], $products);  // Convertimos todos los usuarios en DTOs
    }

    public function deleteProduct($name)
    {
        $product = $this->productRepository->findByNombre($name);  // Buscamos al usuario por email

        if ($product) {
            $image = $product->getImageProduct(); // Asegúrate de que existe un método getImagePath()
            $uploadDir = __DIR__ . '/productupload/';  
            $imagePath = $uploadDir . $image;  
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
       
            $this->entityManager->remove($product);  // Usamos remove() de Doctrine
            $this->entityManager->flush();  // Confirmamos los cambios
            return true;
        }
        return false;
    }
    
public function handleProductUpload($nombre, $marca, $categoria, $imageFile)
{
    // Definir directorio de almacenamiento
    $uploadDir = __DIR__ . '/productupload';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Generar un nombre único para la imagen
    $fileName = uniqid() . '_' . basename($imageFile['name']);
    $filePath = $uploadDir . DIRECTORY_SEPARATOR . $fileName;

    // Mover el archivo al directorio de destino
    if (!move_uploaded_file($imageFile['tmp_name'], $filePath)) {
        return ['error' => 'Error al subir la imagen.'];
    }

    // Crear el objeto de producto
    $product = new Product($nombre, $marca, $categoria, $fileName);

    // Guardar el producto en la base de datos
    $this->entityManager->persist($product);
    $this->entityManager->flush();

    return [
        'success' => true,
        'message' => 'Producto subido correctamente.',
        'product' => ProductMapper::ProductToDTO($product)
    ];
}
   
public function getProductsByCategoria(string $categoria): array
{
    $products = $this->productRepository->findByCategoria($categoria);
    
    return array_map(fn($product) => $product->getImageProduct(), $products);
}

}

?>