<?php 

namespace App\DTO;

use JsonSerializable;

class DTOUser implements JsonSerializable{

    private $username;
    private $password;
    private $email;
    private $telefono;
    private $matricula;

    // Constructor
    public function __construct($telefono, $username, $password, $email,$matricula) {

        $this->username = $username;
        $this->password = $password;
        $this->email = $email;
        $this->telefono=$telefono;
        $this->matricula=$matricula;
    }

    //Getters y Setters

    public function getUsername(){return $this->username;}
    public function setUsername($username){return $this->username=$username;}

    public function getPassword(){return $this->password;}
    public function setPassword($password){return $this->password=$password;}

    public function getEmail(){return $this->email;}
    public function setEmail($email){return $this->email=$email;}

    public function getTelefono(){return $this->telefono;}
    public function setTelefono($telefono){return $this->telefono=$telefono;}

    public function getMatricula(){return $this->matricula;}
    public function setMatricula($matricula){$this->matricula=$matricula;}

    public function jsonSerialize(): array
    {
        return [
            'telefono' => $this->telefono,
            'username' => $this->username,
            'email' => $this->email,
            'matricula' => $this->matricula,
        ];
    }

}

?>