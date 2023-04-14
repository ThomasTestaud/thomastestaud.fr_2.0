<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        $profile = [
            'name' => 'Thomas Testaud',
            'title' => 'Développeur Web FullStack Junior',
            'photo' => 'photoCV.jpg',
        ];

        return $this->render('home/index.html.twig', [
            'profile' => $profile,
        ]);
    }
}
