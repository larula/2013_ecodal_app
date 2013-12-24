<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * appProdUrlGenerator
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    static private $declaredRoutes = array(
        'larula_ecodal_home' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::indexAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/',    ),  ),  4 =>   array (  ),),
        'larula_ecodal_project' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::projectAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/proyecto',    ),  ),  4 =>   array (  ),),
        'larula_ecodal_academic' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::academicAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/academico',    ),  ),  4 =>   array (  ),),
        'larula_ecodal_tips' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::tipsAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/tips',    ),  ),  4 =>   array (  ),),
        'larula_ecodal_credencial' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::credentialAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/credencial',    ),  ),  4 =>   array (  ),),
        'larula_ecodal_contact' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::contactAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/contacto',    ),  ),  4 =>   array (  ),),
        'larula_ecodal_contact_process' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::contactProcessAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/contacto/procesar',    ),  ),  4 =>   array (  ),),
    );

    /**
     * Constructor.
     */
    public function __construct(RequestContext $context, LoggerInterface $logger = null)
    {
        $this->context = $context;
        $this->logger = $logger;
    }

    public function generate($name, $parameters = array(), $referenceType = self::ABSOLUTE_PATH)
    {
        if (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens);
    }
}
