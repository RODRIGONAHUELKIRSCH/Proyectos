<?php 

namespace App\Service;

use App\Repository\UserRepository;
use App\Entity\User;
use App\Mapper\UserMapper;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;
use App\Repository\PasswordResetTokenRepository;
use App\Entity\PasswordResetToken;
require_once __DIR__ . '/../sendResetEmail.php';
require_once __DIR__ . '/../sendLoginEmail.php';
class UserService
{
    private $userRepository;
    private EntityManagerInterface $entityManager;
    public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }

    public function createUser($username, $password, $email, $telefono, $matricula)
    {
        $user = new User($telefono, $username, $password, $email, $matricula);
        $this->entityManager->persist($user);  // Usamos persist() de Doctrine
        $this->entityManager->flush();  // Confirmamos los cambios en la base de datos
        return UserMapper::UserToDTO($user);  // Devolvemos el DTO
    }

    public function getUserByEmail($email)
    {

        // $user= $this->entityManager->getRepository(User::class)->findByEmail($email);  // Método findByEmail de UserRepository
        // return UserMapper::UserToDTO($user);
        $user = $this->userRepository->findByEmail($email);

        if ($user) {

            sendLoginEmail( $user->getUsername() );
            $dto=UserMapper::UserToDTO($user);
            return $dto->getUsername();
        }
    }
    public function getUserEntityByEmail($email)
    {

        // $user= $this->entityManager->getRepository(User::class)->findByEmail($email);  // Método findByEmail de UserRepository
        // return UserMapper::UserToDTO($user);
        $user = $this->userRepository->findByEmail($email);

        if ($user) {

            sendLoginEmail( $user->getUsername() );
            return UserMapper::UserToDTO($user);
            
        }
    }

    public function getAllUsers()
    {
        $users = $this->userRepository->findAll();  // Método findAll() de Doctrine
        return array_map([UserMapper::class, 'UsertoDTO'], $users);  // Convertimos todos los usuarios en DTOs
    }

    public function deleteUser($email)
    {
        $user = $this->userRepository->findByEmail($email);  // Buscamos al usuario por email
        if ($user) {
            $this->entityManager->remove($user);  // Usamos remove() de Doctrine
            $this->entityManager->flush();  // Confirmamos los cambios
            return true;
        }
        return false;
    }

    public function processPasswordResetRequest(string $email): bool
    {
        // Obtener el repositorio de PasswordResetToken
        $tokenRepository = $this->entityManager->getRepository(PasswordResetToken::class);
        // Obtener el repositorio del usuario
        $userRepository = $this->entityManager->getRepository(User::class);
        $user = $userRepository->findByEmail($email);
        if (!$user) {
            return false; // El usuario no existe
        }

        // Verificar y eliminar cualquier token anterior
        $existingToken = $tokenRepository->deleteByUser($user);
        if ($existingToken) {
            $this->entityManager->remove($existingToken);
            $this->entityManager->flush();
        }

        // Crear nuevo token
        $tokenString = Uuid::uuid4()->toString();

        // Obtener el repositorio del usuario

        $resetToken = new PasswordResetToken($user,$tokenString);
        $this->entityManager->persist($resetToken);
        $this->entityManager->flush();

        // Enlace para restablecer la contraseña
        $resetLink = "http://localhost:5173/passwordreset?token=" . $tokenString;
        // Enviar el correo utilizando la función ya configurada en send_email.php

        sendResetEmail($user->getEmail(), $user->getUsername(), $resetLink);
        return  true;
    }

    public function resetPassword($token, $newPassword) {
        // Verificar que la nueva contraseña no esté vacía
        if (empty($newPassword)) {
            return ["error" => "La contraseña no puede estar vacía."];
        }
        $tokenRepository = $this->entityManager->getRepository(PasswordResetToken::class);
        // Buscar el token de reset de contraseña
        $passwordResetToken = $tokenRepository->findByToken($token);
    
        if (!$passwordResetToken) {
            return ["error" => "Token inválido o expirado."];
        }
    
        // Obtener el usuario relacionado con el token
        $user = $passwordResetToken->getUser();
    
        // Hashear la nueva contraseña
        $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);
    
        // Establecer la nueva contraseña hasheada en el usuario
        $user->setPassword($hashedPassword);
    
        // Guardar el usuario con la nueva contraseña
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        echo "dentro del suer service";
        // Eliminar el token después de usarlo
        $tokenRepository->deleteByUser($user);
    
        return ["Operacion Exitosa" => "Contraseña actualizada correctamente."];
    }
}

?>