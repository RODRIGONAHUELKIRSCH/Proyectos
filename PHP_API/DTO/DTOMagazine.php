<?php 

namespace App\DTO;

use JsonSerializable;

class DTOMagazine implements JsonSerializable{

    public $nombre;

    public $descripcion;

    public $año;

    public $imagestring;

    public $enlace;

    public $fecha;

    public function __construct($nombre,$descripcion,$año,$imagestring,$enlace,$fecha){
    
        $this->nombre=$nombre;
        $this->descripcion=$descripcion;
        $this->año=$año;
        $this->imagestring=$imagestring;
        $this->enlace=$enlace;
        $this->fecha=$fecha;

    }    

    //Getters y Setters

    public function getNombre(){return $this->nombre;}
    public function setNombre($nombre){return $this->nombre=$nombre;}

    public function getDescripcion(){return $this->descripcion;}
    public function setDescripcion($descripcion){return $this->descripcion=$descripcion;}

    public function getAño(){return $this->año;}
    public function setAño($año){$this->año=$año;}

    public function getimagestring(){return $this->imagestring;}
    public function setimagestring($imagestring){return $this->imagestring=$imagestring;}

    public function getEnlace(){return $this->enlace;}
    public function setEnlace($enlace){return $this->enlace=$enlace;}

    public function getFecha(){return $this->fecha;}
    public function setFecha($fecha){$this->fecha=$fecha;}

    public function jsonSerialize(): array
    {
        return [
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'año' => $this->año,
            'imagestring' => $this->imagestring,
            'enlace' => $this->enlace,
            'fecha' => $this->fecha,
        ];
    }
}

?>