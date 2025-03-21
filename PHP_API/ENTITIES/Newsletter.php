<?php 

namespace App\Entity;

use Ramsey\Uuid\Uuid;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\NewsletterRepository;

#[ORM\Entity(repositoryClass: NewsletterRepository::class)] // Esto usa atributos de PHP 8
#[ORM\Table(name: "newsletter")]
class Newsletter{

    #[ORM\Id]
    #[ORM\Column(type:"string")]
    #[ORM\GeneratedValue(strategy:"NONE")]
    private $id;

    #[ORM\Column(type:"string",unique: true)]
    private $email;

    public function __construct($email) {
    $this->id = Uuid::uuid4()->toString();
    $this->email = $email;
    }

    //Getters y Setters
    public function getId() {return $this->id;}

    public function getEmail() {return $this->email;}
    public function setEmail($email) {$this->email;}

}


?>