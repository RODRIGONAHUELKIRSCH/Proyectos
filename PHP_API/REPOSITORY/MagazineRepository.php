<?php 

namespace App\Repository;

use Doctrine\ORM\EntityRepository;
use App\Entity\Magazine;

class MagazineRepository extends EntityRepository{

    public function findByNombre($nombre):?Magazine
    {
        return $this->findOneBy(['nombre' => $nombre]);
    }


    public function findRevistasByAnioRange(string $startYear, string $endYear): array
    {
        $dql = "SELECT m FROM App\Entity\Magazine m WHERE m.anio BETWEEN :startYear AND :endYear";
        
        return $this->getEntityManager()
                    ->createQuery($dql)
                    ->setParameter('startYear', $startYear)
                    ->setParameter('endYear', $endYear)
                    ->getResult();
    }

    public function findLastMagazine(): ?Magazine
{
    $dql = "SELECT m FROM App\Entity\Magazine m ORDER BY m.fecha DESC";
    
    return $this->getEntityManager()
                ->createQuery($dql)
                ->setMaxResults(1)
                ->getOneOrNullResult();
}

}

?>