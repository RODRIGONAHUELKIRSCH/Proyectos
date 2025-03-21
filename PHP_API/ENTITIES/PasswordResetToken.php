<?php

// ENTITIES/PasswordResetToken.php

namespace App\Entity;

use App\Repository\PasswordResetTokenRepository;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use App\Entity\User;
use Doctrine\DBAL\Types\Type;

use function PHPSTORM_META\type;

#[ORM\Entity(repositoryClass: PasswordResetTokenRepository::class)] // Esto usa atributos de PHP 8
#[ORM\Table(name: "password_reset_token")]
class PasswordResetToken
{

    #[ORM\Id]
    #[ORM\Column(type:"string", length: 36)]
    #[ORM\GeneratedValue(strategy:"NONE")]
    private $id;

    #[ORM\Column(type:"string",unique: true)]
    private $token;

    #[ORM\OneToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: "user_id", referencedColumnName: "id", onDelete: "CASCADE")]
    private User $user;

    #[ORM\Column(type:"datetime")]
    private $expirationDate;

    public function __construct(User $user, $token)
    {
        $this->id = Uuid::uuid4()->toString();
        $this->user = $user;
        $this->token = $token;
        $this->expirationDate = (new \DateTime())->modify('+1 hour');
    }

    // Getters y Setters
    public function getId() {
        return $this->id;
    }

    public function getToken() {
        return $this->token;
    }

    public function getUser() {
        return $this->user;
    }

    public function getExpirationDate() {
        return $this->expirationDate;
    }

    public function isExpired() {
        return new \DateTime() > $this->expirationDate;
    }
}

?>