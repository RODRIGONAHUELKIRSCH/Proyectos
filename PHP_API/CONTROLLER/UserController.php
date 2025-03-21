<?php 

// src/Controller/UserController.php
namespace App\Controller;


use App\Service\UserService;
use App\Mapper\UserMapper;
use Doctrine\Migrations\Configuration\Migration\JsonFile;
use App\Attribute\Route;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Entity\User;
use App\Repository\PasswordResetTokenRepository;
use App\Entity\PasswordResetToken;
use Exception;

require_once __DIR__."/../sendResetEmail.php";

class UserController
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    #[Route('/user/createUser', method: 'POST')]
    public function createUser()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $dtoUser = $this->userService->createUser(
            $data['username'],
            $data['password'],
            $data['email'],
            $data['telefono'],
            $data['matricula']
        );
        header('Content-Type: application/json');
        echo json_encode($dtoUser, JSON_PRETTY_PRINT);
    }

    #[Route('/user/getAllUsers', method: 'GET')]
    public function getAllUsers()
    {
        $dtousers = $this->userService->getAllUsers();
        header('Content-Type: application/json');
        echo json_encode($dtousers,JSON_PRETTY_PRINT);
    }

    #[Route('/user/deleteUser', method: 'DELETE')]
    public function deleteUser()
    {
        $email = $_GET['email'] ?? null;
        header('Content-Type: application/json');
        if ($email) {
            $result = $this->userService->deleteUser($email);
            if ($result) {
                echo json_encode(['message' => 'User deleted'],JSON_PRETTY_PRINT);
            } else {
                echo json_encode(['message' => 'User not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'Email is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/user/LoginUser', method: 'POST')]
    public function loginUser()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        header('Content-Type: application/json');
        if (!isset($data['email']) || !isset($data['password'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email and password are required']);
            return;
        }

        $email = $data['email'];
        $password = $data['password'];

        $user = $this->userService->getUserEntityByEmail($email);
        try{
            if (!$user) {
                http_response_code(404);
                echo json_encode(['error' => 'User not found']);
                return;
            }
    
            if (!password_verify($password, $user->getPassword())) {
                http_response_code(403);
                echo json_encode(['error' => 'Invalid credentials']);
                return;
            }
    
            $jwt = $this->generateJWT($user);
    
            http_response_code(200);
            echo json_encode(['jwt' => $jwt]);
        }catch(Exception $e){
            echo 'Error: ' . $e->getMessage();
        }
 
    }


    private function generateJWT($user)
    {
        $payload = [
            'iss' => 'example',
            'sub' => "anotherexample",
            'email' => $user->getEmail(),
            'iat' => time(),
            'exp' => time() + (1000 * 60 * 60 * 10) // Token expira en 10 hora
        ];

        $secretKey = 'heregoesyoursecretkey'; // Reemplaza esto por tu clave secreta segura
        return JWT::encode($payload, $secretKey, 'HS256',JSON_PRETTY_PRINT);
    }

#[Route('/user/getUserByEmail', method: 'GET')]
public function requestPasswordReset()
{
    header('Content-Type: application/json');
    // Leer el cuerpo de la solicitud JSON
    $email = isset($_GET['email']) ? $_GET['email'] : null;
    
    // Validar que se envió el campo de email
    if (empty($email)) {
        http_response_code(403);
        echo json_encode(['message' => 'Correo no enviado: Email es requerido']);
        return;
    }

    // Procesar la solicitud de restablecimiento de contraseña
    $result = $this->userService->processPasswordResetRequest($email);
    $username= $this->userService->getUserByEmail($email);
    if ($result) {
        http_response_code(200);
        echo json_encode(['nombre' => $username],JSON_PRETTY_PRINT);
    } else {
        http_response_code(403);
        echo json_encode(['message' => 'Correo no enviado: El usuario no existe o hubo un error']);
    }
}

#[Route('/user/resetPassword', method: 'POST')]
public function resetPassword() {
    header('Content-Type: application/json');
      // Obtener el token de la URL
      $token = isset($_GET['token']) ? $_GET['token'] : null;
    echo $token;
      // Verificar que el token esté presente
      if (empty($token)) {
          echo json_encode(['error' => 'Falta el token.']);
          http_response_code(400); // Bad Request
          exit;
      }

      // Obtener la nueva contraseña desde el cuerpo de la solicitud (JSON)
      $data = json_decode(file_get_contents('php://input'), true);
      $newPassword = isset($data['new_password']) ? $data['new_password'] : null;
      echo $newPassword;
      // Verificar que la nueva contraseña esté presente
      if (empty($newPassword)) {
          echo json_encode(['error' => 'Falta la nueva contraseña.']);
          http_response_code(400); // Bad Request
          exit;
      }
      echo "dentro del usercontroller";
    // Llamar al UserService para procesar el reset de la contraseña
    $result = $this->userService->resetPassword($token, $newPassword);

    // Responder con el resultado
    echo json_encode($result);
    }   
}

?>