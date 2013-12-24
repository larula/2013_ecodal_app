<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appProdUrlMatcher
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    /**
     * Constructor.
     */
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($pathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($pathinfo);

        // larula_ecodal_home
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', 'larula_ecodal_home');
            }

            return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::indexAction',  '_route' => 'larula_ecodal_home',);
        }

        // larula_ecodal_project
        if ($pathinfo === '/proyecto') {
            return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::projectAction',  '_route' => 'larula_ecodal_project',);
        }

        // larula_ecodal_academic
        if ($pathinfo === '/academico') {
            return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::academicAction',  '_route' => 'larula_ecodal_academic',);
        }

        // larula_ecodal_tips
        if ($pathinfo === '/tips') {
            return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::tipsAction',  '_route' => 'larula_ecodal_tips',);
        }

        if (0 === strpos($pathinfo, '/c')) {
            // larula_ecodal_credencial
            if ($pathinfo === '/credencial') {
                return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::credentialAction',  '_route' => 'larula_ecodal_credencial',);
            }

            if (0 === strpos($pathinfo, '/contacto')) {
                // larula_ecodal_contact
                if ($pathinfo === '/contacto') {
                    return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::contactAction',  '_route' => 'larula_ecodal_contact',);
                }

                // larula_ecodal_contact_process
                if ($pathinfo === '/contacto/procesar') {
                    return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::contactProcessAction',  '_route' => 'larula_ecodal_contact_process',);
                }

            }

        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
