<?php 

namespace App\Repository;

use Doctrine\ORM\EntityRepository;
use App\Entity\User;

class UserRepository extends EntityRepository
{
    public function findByEmail($email):?User
    {
        return $this->findOneBy(['email' => $email]);
    }
}

?>