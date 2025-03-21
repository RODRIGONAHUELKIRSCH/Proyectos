<?php 

namespace App\Entity;

use Ramsey\Uuid\Uuid;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProductRepository;

#[ORM\Entity(repositoryClass: ProductRepository::class)] // Esto usa atributos de PHP 8
#[ORM\Table(name: "product")]
class Product{
    
    #[ORM\Id]
    #[ORM\Column(type: "string")]
    #[ORM\GeneratedValue(strategy:"NONE")]
    private $id;

    #[ORM\Column(type:"string",unique: true)]
    private $nombre;

    #[ORM\Column(type:"string")]
    private $marca;

    #[ORM\Column(type:"string",unique: true)]
    private $categoria;

    #[ORM\Column(type:"date")]
    private $localdate;

    #[ORM\Column(type:"string")]
    private $imageproduct;

    public function __construct($nombre,$marca,$categoria,$imageproduct) {
        $this->id = Uuid::uuid4();
        $this->nombre = $nombre;
        $this->marca = $marca;
        $this->categoria = $categoria;
        $this->localdate = \DateTime::createFromFormat('Y-m-d', date('Y-m-d'));; // Establece la fecha y hora actual
        $this->imageproduct=$imageproduct;
    }


    // Getters y setters
    public function getId() {return $this->id;}

    public function getNombre() {return $this->nombre;}
    public function setNombre($nombre){ $this->nombre=$nombre;}

    public function getMarca() {return $this->marca;}
    public function setMarca($marca){$this->marca=$marca;}

    public function getCategoria() {return $this->categoria;}
    public function setCategoria($categoria){$this->categoria=$categoria;}

    public function getLocaldate() {return $this->localdate;}
    public function setLocaldate($localdate){$this->localdate=$localdate;}

    public function getImageproduct() {return $this->imageproduct;}
    public function setImageproduct($imageproduct){$this->imageproduct=$imageproduct;}

}

?>