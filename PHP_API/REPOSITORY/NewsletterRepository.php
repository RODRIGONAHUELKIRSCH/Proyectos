<?php

namespace App\Repository;

use App\Entity\Newsletter;
use Doctrine\ORM\EntityRepository;

class NewsletterRepository extends EntityRepository{

    public function findByEmail($email):?Newsletter
    {
        return $this->findOneBy(['email' => $email]);
    }
}

?>