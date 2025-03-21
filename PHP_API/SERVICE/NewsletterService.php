<?php 

namespace App\Service;

use App\Entity\Newsletter;
use App\Repository\NewsletterRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Mapper\NewsletterMapper;
require_once __DIR__ . '/../sendWelcomeEmail.php';

class NewsletterService{

    private $newsletterRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(NewsletterRepository $newsletterRepository, EntityManagerInterface $entityManager)
    {
        $this->newsletterRepository = $newsletterRepository;
        $this->entityManager = $entityManager;
    }

    public function createNewsletter($email)
    {
        $newsletter= new Newsletter($email);
        $this->entityManager->persist($newsletter);  // Usamos persist() de Doctrine
        $this->entityManager->flush(); // Confirmamos los cambios en la base de datos
        sendWelcomeEmail($email); 
        return NewsletterMapper::NewsletterToDTO($newsletter);  // Devolvemos el DTO
    }

    public function getAllNewsletter()
    {
        $newsletter = $this->newsletterRepository->findAll();  // Método findAll() de Doctrine
        return array_map([NewsletterMapper::class, 'NewslettertoDTO'], $newsletter);  // Convertimos todos los usuarios en DTOs
    }

    public function deleteNewsletter($email)
    {
        $newsletter = $this->newsletterRepository->findByEmail($email);  // Buscamos al usuario por email
        if ($newsletter) {
            $this->entityManager->remove($newsletter);  // Usamos remove() de Doctrine
            $this->entityManager->flush(); 
            // Confirmamos los cambios
            return true;
        }
        return false;
    }

    public function getNewsletterByEmail($email){

        $newsletter = $this->newsletterRepository->findByEmail($email);

        if ($newsletter) {

            return NewsletterMapper::NewsletterToDTO($newsletter);
            
        }
    }

}

?>