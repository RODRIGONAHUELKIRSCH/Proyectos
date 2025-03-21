<?php

namespace App\Entity;

use Ramsey\Uuid\Uuid;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;

#[ORM\Entity(repositoryClass: UserRepository::class)] // Esto usa atributos de PHP 8
#[ORM\Table(name: "users")]
class User {
    #[ORM\Id] // Indica que esta es la clave primaria
    #[ORM\Column(type: "string", length: 36)] // Define la columna como cadena
    #[ORM\GeneratedValue(strategy:'NONE')] // Uuid será generado manualmente
    private $id;

    #[ORM\Column(type: "string", length: 50)] // Define una columna de tipo string
    private $username;

    #[ORM\Column(type: "string")] // Define una columna para la contraseña
    private $password;

    #[ORM\Column(type: "string", unique: true)] // Define una columna única para el email
    private $email;

    #[ORM\Column(type: "string", length: 20)] // Columna para el teléfono
    private $telefono;

    #[ORM\Column(type: "string", length: 20,unique:true)] // Columna para la matrícula
    private $matricula;

    // Constructor
    public function __construct($telefono, $username, $password, $email,$matricula) {
        $this->id = Uuid::uuid4()->toString();
        $this->username = $username;
        $this->password = password_hash($password, PASSWORD_BCRYPT);
        $this->email = $email;
        $this->telefono=$telefono;
        $this->matricula=$matricula;
    }

    // Getters y setters
    public function getId() {return $this->id;}

    public function getUsername() { return $this->username; }
    public function setUsername($username) { $this->username = $username; }

    public function getPassword() { return $this->password; }
    public function setPassword($password) { $this->password = $password; }

    public function getEmail() { return $this->email; }
    public function setEmail($email) { $this->email = $email; }

    public function getTelefono(){return $this->telefono;}
    public function setTelefono($telefono){return $this->telefono = $telefono;}

    public function getMatricula(){return $this->matricula;}
    public function setMatricula($matricula){return $this->matricula = $matricula;}


        //Sujeto a cambios
        // Método para verificar la contraseña durante el login
        public function verifyPassword($password) {
            return password_verify($password, $this->password);
        }

}



?>

