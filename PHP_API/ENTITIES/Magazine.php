<?php

namespace App\Entity;

use Ramsey\Uuid\Uuid;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\MagazineRepository;

#[ORM\Entity(repositoryClass: MagazineRepository::class)] // Esto usa atributos de PHP 8
#[ORM\Table(name: "magazine")]
class Magazine{

    #[ORM\Id]
    #[ORM\Column(type:"string")]
    #[ORM\GeneratedValue(strategy:"NONE")]
    private $id;

    #[ORM\Column(type:"string",unique: true)]
    private $nombre;

    #[ORM\Column(type:"string")]
    private $descripcion;

    #[ORM\Column(type:"string")]
    private $anio;

    #[ORM\Column(type:"string")]
    private $imagestring;

    #[ORM\Column(type:"string")]
    private $enlace;

    #[ORM\Column(type:"date")]
    private $fecha;
    
    public function __construct($nombre,$descripcion,$año,$imagestring,$enlace) {
        $this->id = Uuid::uuid4();
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->anio = $año;
        $this->imagestring = $imagestring;
        $this->enlace = $enlace;
        $this->fecha = \DateTime::createFromFormat('Y-m-d', date('Y-m-d'));;
    }

    //Getters y Setters

    public function getId(){return $this->id;}

    public function getNombre(){return $this->nombre;}
    public function setNombre($nombre){$this->nombre=$nombre;}

    public function getDescripcion() {return $this->descripcion;}
    public function setDescripcion($descripcion) {$this->descripcion = $descripcion;}

    public function getAño() {return $this->anio;}
    public function setAño($año) {$this->anio=$año;}

    public function getimagestring() {return $this->imagestring;}
    public function setimagestring($imagestring) {$this->imagestring = $imagestring;}

    public function getEnlace() {return $this->enlace;}
    public function setEnlace($enlace) {$this->enlace = $enlace;}

    public function getFecha() {return $this->fecha;}
    public function setFecha($fecha) {$this->fecha = $fecha;}

}

?>