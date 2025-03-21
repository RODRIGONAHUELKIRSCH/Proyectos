<?php

namespace App\Mapper;

use App\Entity\Newsletter;
use App\DTO\DTONewsletter;

class NewsletterMapper {

    public static function NewslettertoDTO(Newsletter $newsletter) {
       
        return new DTONewsletter(
            $newsletter->getEmail(),
        );
    }

    public static function DTOtoNewsletter(DTONewsletter $newsletterdto) {
        return new Newsletter(
            $newsletterdto->getEmail(),
        );
    }
}

?>