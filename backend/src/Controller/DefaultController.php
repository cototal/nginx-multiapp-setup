<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api')]
class DefaultController extends AbstractController
{
    #[Route('/default', name: 'app_default')]
    public function index(Request $request): JsonResponse
    {
        return $this->json([
            'increments' => $request->getSession()->get('incrementer'),
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/DefaultController.php',
        ]);
    }

    #[Route('/one/two')]
    public function oneTwo(): JsonResponse
    {
        return $this->json([
            'one' => 'two'
        ]);
    }

    #[Route('/add-to-session')]
    public function addToSession(Request $request): JsonResponse
    {
        $current = $request->getSession()->get('incrementer');
        ++$current;
        $request->getSession()->set('incrementer', $current);
        return $this->json(['success' => true]);
    }
}
