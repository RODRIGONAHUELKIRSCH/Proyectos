<?php 

require_once __DIR__ . '/vendor/autoload.php';

use App\Attribute\Route;
header("Access-Control-Allow-Origin: *"); // Permitir cualquier origen (ajustar según sea necesario)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Credentials: true");

// Manejo de preflight (cuando el navegador envía una solicitud OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No hay contenido, solo confirmar CORS
    exit();
}
$dependencyFactory = require __DIR__ . "/cli-config.php";
$entityManager = $dependencyFactory->getEntityManager();



// Parseamos la URL para extraer entidad y acción
$basePath = '/PHP_API'; // Ajusta esto si la carpeta tiene otro nombre
$path = trim(str_replace($basePath, '', parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)), '/');

$method = $_SERVER['REQUEST_METHOD'];

$segments = explode('/', $path);

if (count($segments) < 2) {
    die('Ruta inválida. Debe ser /entidad/accion');
}

$entity = ucfirst($segments[0]); // Ej: user -> User
$actionPath = "/{$segments[0]}/{$segments[1]}"; // Ej: /user/createUser

$controllerClass = "App\\Controller\\{$entity}Controller";
$serviceClass = "App\\Service\\{$entity}Service";
$entityClass = "App\\Entity\\{$entity}";

// Verificamos la existencia de las clases
if (!class_exists($controllerClass)) {
    die("El controlador $controllerClass no existe.");
}

if (!class_exists($serviceClass)) {
    die("El servicio $serviceClass no existe.");
}

// Instanciamos el servicio y controlador
$repository = $entityManager->getRepository($entityClass);
$service = new $serviceClass($repository, $entityManager);
$controller = new $controllerClass($service);

// Usamos Reflection para detectar el método que tiene el atributo con la ruta correspondiente
$reflection = new \ReflectionClass($controllerClass);
$methods = $reflection->getMethods(\ReflectionMethod::IS_PUBLIC);

try{

    foreach ($methods as $methodObj) {
        $attributes = $methodObj->getAttributes(Route::class);
    
        foreach ($attributes as $attribute) {
    
            $routeInstance = $attribute->newInstance();
    
            if ($routeInstance->path === $actionPath && $routeInstance->method === $method) {
                // Llamamos al método que coincide con la ruta y método HTTP
                $methodName = $methodObj->getName();
                call_user_func([$controller, $methodName]);

                break 2;
            }
    
        }
}

} catch (Exception $e) {

    echo 'Error: ' . $e->getMessage();

}

?>