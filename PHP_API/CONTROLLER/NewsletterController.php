<?php 

namespace App\Controller;

use App\Service\NewsletterService;
use App\Attribute\Route;
use App\Entity\Newsletter;

class NewsletterController {

    private $newsletterService;

    public function __construct(NewsletterService $newsletterService)
    {
        $this->newsletterService = $newsletterService;
    }

    #[Route('/newsletter/createNewsletter', method: 'POST')]
    public function createNewsletter()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $dtoNewsletter = $this->newsletterService->createNewsletter(
            $data['email'],

        );
        header('Content-Type: application/json');
        echo json_encode($dtoNewsletter, JSON_PRETTY_PRINT);
    }

    #[Route('/newsletter/getAllNewsletter', method: 'GET')]
    public function getAllNewsletter()
    {
        $dtonewsletter = $this->newsletterService->getAllNewsletter();
        header('Content-Type: application/json');
        echo json_encode($dtonewsletter,JSON_PRETTY_PRINT);
    }

    #[Route('/newsletter/deleteNewsletter', method: 'DELETE')]
    public function deleteNewsletter()
    {
        $email = $_GET['email'] ?? null;
        header('Content-Type: application/json');
        if ($email) {
            $result = $this->newsletterService->deleteNewsletter($email);
            if ($result) {
                echo json_encode(['message' => 'Newsletter deleted'],JSON_PRETTY_PRINT);
            } else {
                echo json_encode(['message' => 'Newslettr not found'],JSON_PRETTY_PRINT);
            }
        } else {
            echo json_encode(['message' => 'Email is required'],JSON_PRETTY_PRINT);
        }
    }

    #[Route('/newsletter/getNewsletterByEmail',method:'GET')]
    public function getNewsletterByEmail(){
        header('Content-Type: application/json');
        // Leer el cuerpo de la solicitud JSON
        $data = json_decode(file_get_contents('php://input'), true);

        if (!isset($data['email']) ) {
            http_response_code(400);
            echo json_encode(['error' => 'Email and password are required']);
            return;
        }

        $email = $data['email'];
        $newsletter= $this->newsletterService->getNewsletterByEmail($email);
        if ($newsletter) {
            http_response_code(200);
            echo json_encode( $newsletter,JSON_PRETTY_PRINT);
        } else {
            http_response_code(403);
            echo json_encode(['message' => 'Correo no encontrado: El usuario no existe o hubo un error']);
        }
    }
}

?>