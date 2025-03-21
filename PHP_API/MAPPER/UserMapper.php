<?php

namespace App\Mapper;

use App\Entity\User;
use App\DTO\DTOUser;

class UserMapper {

    // Método para mapear de User a DTOUser
    public static function UsertoDTO(User $user) {
        return new DTOUser(
            $user->getTelefono(),
            $user->getUsername(),
            $user->getPassword(),
            $user->getEmail(),
            $user->getMatricula()
        );
    }

    // Método para mapear de DTOUser a User
    public static function DTOtoUser(DTOUser $dtoUser) {
        return new User(
            $dtoUser->getTelefono(),
            $dtoUser->getUsername(),
            $dtoUser->getPassword(),
            $dtoUser->getEmail(),
            $dtoUser->getMatricula()
        );
    }
    
}


?>