<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    #[Route('/Portfolio', name: 'app_portfolio')]
    public function index(): Response
    {
        session_start();
        $articles = [
            [
                'title' => 'Events on Time',
                'description' => "Events on Time est une application qui sert à enregistrer des récurrences d'événement au cours du temps et de les monitorer grâce à des graphiques. Cette application fonctionne avec une architecture découplée. Le front-end est en Vue.js et le back-end est une Rest API en PHP sécurisée avec des JSON Web Token.",
                'link' => 'https://events-on-time.thomastestaud.com/',
                'techs' => ['Vue.js', 'Rest API', 'PHP', 'JWT', 'MySQL', 'HTML/CSS', 'Ajax'],
                'shape' => 'phone',
                'github' => 'https://github.com/ThomasTestaud',
            ],
            [
                'title' => 'Pioupiou',
                'description' => "Pioupiou est un Tweeter-like en PHP. C'est un réseau social simple où l'on peut créer un compte, publier et commenter des posts et personnaliser son profil. /!\Noter que le rendu sur ce site empêche l'aplication de fonctionner correctement./!\ ",
                'link' => 'https://thomastestaud.sites.3wa.io/PROJET%20FINAL/2.5/index.php?route=dashboard&invite="dd"',
                'techs' => ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Modèle MVC', 'Ajax'],
                'shape' => 'phone',
                'github' => 'https://github.com/ThomasTestaud/Pioupiou/blob/main/Pioupiou/index.php',
            ],
            [
                'title' => 'CarCity',
                'description' => "CarCity est un mini GTA-like en JavaScript. On y incarne un petit bonhomme bleu que peut se promener à sa guise, enter et conduire des petites voitures HTML/CSS.",
                'link' => 'https://thomastestaud.sites.3wa.io/CarCity_PIOU.1/car.phtml',
                'techs' => ['JavaScript', 'HTML', 'CSS', 'POO'],
                'shape' => 'square',
                'github' => 'https://github.com/ThomasTestaud/CarCity/blob/main/CarCity/Car.js',
            ],
            [
                'title' => 'thomas testaud .com',
                'description' => "",
                'link' => 'https://thomastestaud.com',
                'techs' => ['JavaScript', 'HTML', 'CSS', 'Symfony', 'PHP', 'Ajax', 'API'],
                'shape' => 'phone',
                'github' => 'https://github.com/ThomasTestaud/thomastestaud.fr_2.0',
            ],
            [
                'title' => 'API Talker',
                'description' => "REST_API_Talker est une application pour faire différents types de requêtes auprès d'APIs et visualiser le JSON qui en retourne.",
                'link' => 'https://api-talker.thomastestaud.com/',
                'techs' => ['PHP', 'AJAX', 'JavaScript', 'HTML', 'CSS'],
                'shape' => 'square',
                'github' => 'https://github.com/ThomasTestaud/API_Talker',
            ]
        ];

        return $this->render(
            'portfolio/index.html.twig',
            [
                'articles' => $articles,
                'length' => count($articles),
            ]
        );
    }
}
