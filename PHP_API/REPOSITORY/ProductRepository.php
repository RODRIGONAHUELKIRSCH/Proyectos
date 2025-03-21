<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\ORM\EntityRepository;

class ProductRepository extends EntityRepository{

    public function findByNombre($nombre):?Product
    {
        return $this->findOneBy(['nombre' => $nombre]);
    }

    public function findByCategoria(string $categoria): array
    {
        $dql = "SELECT p FROM App\Entity\Product p WHERE p.categoria = :categoria";
        
        return $this->getEntityManager()
                    ->createQuery($dql)
                    ->setParameter('categoria', $categoria)
                    //->getOneOrNullResult();  // Obtiene un solo producto o null
                    ->getResult();
    }



}

?>