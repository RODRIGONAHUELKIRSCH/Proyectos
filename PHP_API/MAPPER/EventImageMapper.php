<?php 

namespace App\Mapper;

use App\Entity\EventImage;
use App\DTO\DTOEventImage;  

class EventImageMapper{

    public static function EventImagetoDTO(EventImage $eventimage){
        return new DTOEventImage(
            $eventimage->getEstado(),
            $eventimage->getEventImage(),
        );
    }

    public static function DTOtoEventImage(DTOEventImage $DTOeventimage){
        return new EventImage(
            $DTOeventimage->getEstado(),
            $DTOeventimage->getEventImage(),
        );

    }

}

?>