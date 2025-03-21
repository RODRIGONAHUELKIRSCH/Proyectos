<?php

namespace App\Entity;

use Ramsey\Uuid\Uuid;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\EventImageRepository;

#[ORM\Entity(repositoryClass: EventImageRepository::class)] // Esto usa atributos de PHP 8
#[ORM\Table(name: "eventimage")]
class EventImage{

    #[ORM\Id]
    #[ORM\Column(type:"string")]
    #[ORM\GeneratedValue(strategy:"NONE")]
    private $id;

    #[ORM\Column(type:"string")]
    private $estado;

    #[ORM\Column(type:"string")]
    private $eventimage;

    public function __construct($estado, $eventimage) {
       $this->id=Uuid::uuid4()->toString();
       $this->estado=$estado;
       $this->eventimage=$eventimage; 
    }

    //Getters y Setters

    public function getId() {return $this->id;}

    public function getEstado() {return $this->estado;}
    public function setEstado($estado){$this->estado;}

    public function getEventImage() {return $this->eventimage;}
    public function setEventImage($eventimage){$this->eventimage=$eventimage;}

}

?>