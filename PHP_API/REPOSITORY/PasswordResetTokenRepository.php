<?php 

namespace App\Repository;

use Doctrine\ORM\EntityRepository;
use App\Entity\User;

class PasswordResetTokenRepository extends EntityRepository
{
    public function findByToken($token)
    {
        return $this->findOneBy(['token' => $token]);
    }

    public function deleteByUser(User $user)
    {
        $entityManager = $this->getEntityManager();
        $existingToken = $this->findOneBy(['user' => $user]);

        if ($existingToken) {
            $entityManager->remove($existingToken);
            $entityManager->flush();
        }
    }
}


?>