<?php 

namespace App\DTO;

use JsonSerializable;

class DTOEventImage implements JsonSerializable{

    public $estado;

    public $eventimage;

    public function __construct($estado, $eventimage){
        $this->estado = $estado;
        $this->eventimage = $eventimage;
    }

    //Getters y Setters 

    public function getEstado(){return $this->estado;}
    public function setEstado($estado){return $this->estado=$estado;}

    public function getEventImage(){return $this->eventimage;}
    public function setEventImage($eventimage){return $this->eventimage = $eventimage;}


    public function jsonSerialize(): array
    {
        return [
            'estado' => $this->estado,
            'eventimage' => $this->eventimage,
        ];
    }
}

?>