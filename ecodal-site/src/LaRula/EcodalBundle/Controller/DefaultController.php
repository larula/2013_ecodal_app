<?php

namespace LaRula\EcodalBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:index.html.twig', array('pageHome'=>true));
    }

    public function academicAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:academic.html.twig',array('pageAcademic'=>true));
    }

    public function credentialAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:credential.html.twig',array('pageCredential'=>true));
    }

    public function contactAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:contact.html.twig',array('pageContact'=>true));
    }

    public function datasetAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:dataset.html.twig',array('pageDataset'=>true));
    }

    public function projectAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:project.html.twig',array('pageProject'=>true));
    }

    public function tipsAction()
    {
        return $this->render('LaRulaEcodalBundle:Default:tips.html.twig',array('pageTips'=>true));
    }    
}
