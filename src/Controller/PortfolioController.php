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
                'title' => 'Pioupiou',
                'description' => "Pioupiou est un Tweeter-like en PHP. C'est un réseau social simple où l'on peut créer un compte, publier et commenter des posts (contenant des médias), personnaliser son profil (ajouter une description, changer sa photo de profil, sa photo de bannière). Ce projet est encore en cours de développement. /!\Noter que le rendu sur ce site empêche l'aplication de fonctionner correctement./!\ ",
                'link' => 'https://thomastestaud.sites.3wa.io/PROJET%20FINAL/2.5/index.php?route=dashboard&invite="dd"',
                'techs' => ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Modèle MVC', 'Ajax'],
                'shape' => 'phone',
                'github' => 'https://github.com/ThomasTestaud/Pioupiou/blob/main/Pioupiou/index.php',
            ],
            [
                'title' => 'API Talker',
                'description' => "REST_API_Talker est un application pour communiquer et utiliser de manière simple des API ReST.",
                'link' => 'https://api-talker.thomastestaud.com/',
                'techs' => ['PHP', 'AJAX', 'JavaScript', 'HTML', 'CSS'],
                'shape' => 'square',
                'github' => 'https://github.com/ThomasTestaud/API_Talker',
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
                'title' => 'WWCP',
                'description' => 'Wrap_WebApp_Into_client.println(""); est une application simple qui sert à covertir le code de web apps pour mon server web en C++ sur mon ESP32.',
                'link' => 'https://wwcp.thomastestaud.com/index.php?route=home',
                'techs' => ['PHP', 'AJAX', 'JavaScript', 'HTML', 'CSS'],
                'shape' => 'square',
                'github' => 'https://github.com/ThomasTestaud/API_Talker',
            ],
            [
                'title' => 'thomas testaud .com',
                'description' => "Oui oui, c'est le site sur lequel vous êtes actuellement. Un site vitrine plus ou moins basique, réalisé avec le framework symfony.",
                'link' => 'https://thomastestaud.com',
                'techs' => ['Symfony', 'PHP', 'JavaScript', 'HTML', 'CSS'],
                'shape' => 'phone',
                'github' => 'https://github.com/ThomasTestaud/thomastestaud.fr_2.0',
            ],
            [
                'title' => 'DNT V.C.',
                'description' => "Créé pour équipe de rédacteur.e.s, DNT VisualChecker est mon premier projet en cours de développement pour une entreprise. C'est une app de traitement de texte qui sert à éditer les balises dnt (do not translate), utiles dans les logiciels de TAO (Traduction Assistée par Ordinateur). /!\Noter que le rendu sur ce site empêche l'aplication de fonctionner correctement./!\ ",
                'link' => 'https://www.thomastestaud.fr/-/DntVisualChecker/index.php',
                'techs' => ['PHP', 'JavaScript', 'HTML', 'CSS'],
                'shape' => 'square',
                'github' => 'https://github.com/ThomasTestaud/DNT_Visual_Checker/blob/main/DNT_Check/Classes/Scanner.php',
            ],
            [
                'title' => 'MemoList',
                'description' => "MemoList est une application en PHP qui favorise l'apprentissage des langues étrangères. L'app affiche un mot aléatoirement pour lequel il faut trouver son équivalent. L'utilisateur peut librement ajouter ou supprimer des termes dans la base de données, au fur et à mesure de sa progression. /!\Noter que le rendu sur ce site empêche l'aplication de fonctionner correctement./!\ ",
                'link' => 'https://www.thomastestaud.fr/-/MemoList/index.php',
                'techs' => ['PHP', 'MySQL', 'HTML', 'CSS'],
                'shape' => 'phone',
                'github' => 'https://github.com/ThomasTestaud/MemoList/blob/main/MemoList/index.php',
            ],
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
