<?php

namespace App\DTO;

use JsonSerializable;

class DTOProduct implements JsonSerializable{

    public $nombre;

    public $marca;

    public $categoria;

    public $imageproduct;

    public $enlace;

    public $fecha;

    public function __construct($nombre, $marca, $categoria, $imageproduct,$fecha){
        $this->nombre = $nombre;
        $this->marca = $marca;
        $this->categoria = $categoria;
        $this->imageproduct = $imageproduct;
        $this->fecha = $fecha;
    }

    //Getters y Setters 

    public function getNombre(){return $this->nombre;}
    public function setNombre($nombre){return $this->nombre = $nombre;}

    public function getMarca(){return $this->marca;}
    public function setMarca($marca){return $this->marca = $marca;}

    public function getCategoria(){return $this->categoria;}
    public function setCategoria($categoria){return $this->categoria = $categoria;}

    public function getImageproduct(){return $this->imageproduct;}
    public function setImageproduct($imageproduct){return $this->imageproduct = $imageproduct;}

    public function getEnlace(){return $this->enlace;}
    public function setEnlace($enlace){return $this->enlace = $enlace;}

    public function getFecha(){return $this->fecha;}
    public function setFecha($fecha){$this->fecha = $fecha;}

    
    public function jsonSerialize(): array
    {
        return [
            'nombre' => $this->nombre,
            'marca' => $this->marca,
            'categoria' => $this->categoria,
            'imageproduct' => $this->imageproduct,
        ];
    }


}

?>