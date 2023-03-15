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

        $articles = [
            [
                'title' => 'Pioupiou',
                'description' => "Pioupiou est un Tweeter-like en PHP. C'est un réseau social simple où l'on peut créer un compte, publier et commenter des posts (contenant des médias), personnaliser son profil (ajouter une description, changer sa photo de profil, sa photo de bannière). Ce projet est encore en cours de développement.",
                'link' => 'https://thomastestaud.sites.3wa.io/PROJET%20FINAL/2.1/index.php?route=welcome&action=login',
                'techs' => ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Modèle MVC', 'Ajax'],
                'shape' => 'phone',
            ],
            [
                'title' => 'DNT V.C.',
                'description' => "Créé pour équipe de rédacteur.e.s, DNT VisualChecker est mon premier projet en cours de développement pour une entreprise. C'est une app de traitement de texte qui sert à éditer les balises dnt (do not translate), utiles dans les logiciels de TAO (Traduction Assistée par Ordinateur).",
                'link' => 'https://www.thomastestaud.fr/-/DntVisualChecker/index.php',
                'techs' => ['PHP', 'JavaScript', 'HTML', 'CSS'],
                'shape' => 'square',
            ],
            [
                'title' => 'MemoList',
                'description' => "MemoList est une application en PHP qui favorise l'apprentissage des langues étrangères. L'app affiche un mot aléatoirement pour lequel il faut trouver son équivalent. L'utilisateur peut librement ajouter ou supprimer des termes dans la base de données, au fur et à mesure de sa progression.",
                'link' => 'https://www.thomastestaud.fr/-/MemoList/index.php',
                'techs' => ['PHP', 'MySQL', 'HTML', 'CSS'],
                'shape' => 'phone',
            ],
            [
                'title' => 'CarCity',
                'description' => "CarCity est un mini GTA-like en JavaScript. On y incarne un petit bonhomme bleu que peut se promener à sa guise, enter et conduire des petites voitures HTML/CSS.",
                'link' => 'https://www.thomastestaud.fr/-/CarCity/index.html',
                'techs' => ['JavaScript', 'HTML', 'CSS'],
                'shape' => 'square',
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