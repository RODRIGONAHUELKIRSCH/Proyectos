<?php

namespace App\DTO;

use JsonSerializable;

class DTONewsletter implements JsonSerializable{

    public $email;

    public function __construct($email) {
        $this->email = $email;
    }

    //Getters y Setters
    
    public function getEmail() {return $this->email;}
    public function setEmail($email) {$this->email = $email;}


    public function jsonSerialize(): array
    {
        return [
            'email' => $this->email,
        ];
    }
}

?>