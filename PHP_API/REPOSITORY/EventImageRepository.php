<?php 

namespace App\Repository;

use Doctrine\ORM\EntityRepository;
use App\Entity\EventImage;

class EventImageRepository extends EntityRepository
{
    public function findByState(string $state): array
    {
        return $this->findBy(['estado' => $state]);
    }

    public function findByEventImage(string $eventImage): ?EventImage
    {
        return $this->findOneBy(['eventimage' => $eventImage]);
    }

}

?>