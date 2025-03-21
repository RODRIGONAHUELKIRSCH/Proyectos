<?php

namespace App\Mapper;

use App\Entity\Magazine;
use App\DTO\DTOMagazine;

class MagazineMapper{

    public static function MagazinetoDTO(Magazine $magazine){
        return new DTOMagazine(
            $magazine->getNombre(),
            $magazine->getDescripcion(),
            $magazine->getAño(),
            $magazine->getimagestring(),
            $magazine->getEnlace(),
            $magazine->getFecha()
        );
    }

    public static function DTOtoMagazine(DTOMagazine $dTOMagazine)  {
        return new Magazine(
            $dTOMagazine->getNombre(),
            $dTOMagazine->getDescripcion(),
            $dTOMagazine->getAño(),
            $dTOMagazine->getimagestring(),
            $dTOMagazine->getEnlace(),
        );
    }

}

?>