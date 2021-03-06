<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appDevUrlMatcher
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appDevUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
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

        if (0 === strpos($pathinfo, '/css/compiled_6d73279')) {
            // _assetic_6d73279
            if ($pathinfo === '/css/compiled_6d73279.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '6d73279',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_6d73279',);
            }

            if (0 === strpos($pathinfo, '/css/compiled_6d73279_')) {
                // _assetic_6d73279_0
                if ($pathinfo === '/css/compiled_6d73279_bootstrap.min_1.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '6d73279',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_6d73279_0',);
                }

                // _assetic_6d73279_1
                if ($pathinfo === '/css/compiled_6d73279_main_2.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '6d73279',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_6d73279_1',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/js/compiled_78cf407')) {
            // _assetic_78cf407
            if ($pathinfo === '/js/compiled_78cf407.js') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '78cf407',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_78cf407',);
            }

            if (0 === strpos($pathinfo, '/js/compiled_78cf407_')) {
                // _assetic_78cf407_0
                if ($pathinfo === '/js/compiled_78cf407_bootstrap.min_1.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '78cf407',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_78cf407_0',);
                }

                // _assetic_78cf407_1
                if ($pathinfo === '/js/compiled_78cf407_common_2.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '78cf407',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_78cf407_1',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/css/compiled_b1222d9')) {
            // _assetic_b1222d9
            if ($pathinfo === '/css/compiled_b1222d9.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'b1222d9',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_b1222d9',);
            }

            if (0 === strpos($pathinfo, '/css/compiled_b1222d9_')) {
                // _assetic_b1222d9_0
                if ($pathinfo === '/css/compiled_b1222d9_bootstrap.min_1.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'b1222d9',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_b1222d9_0',);
                }

                // _assetic_b1222d9_1
                if ($pathinfo === '/css/compiled_b1222d9_validationEngine.jquery_2.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'b1222d9',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_b1222d9_1',);
                }

                // _assetic_b1222d9_2
                if ($pathinfo === '/css/compiled_b1222d9_main_3.css') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'b1222d9',  'pos' => 2,  '_format' => 'css',  '_route' => '_assetic_b1222d9_2',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/js/compiled_7cd567e')) {
            // _assetic_7cd567e
            if ($pathinfo === '/js/compiled_7cd567e.js') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '7cd567e',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_7cd567e',);
            }

            if (0 === strpos($pathinfo, '/js/compiled_7cd567e_')) {
                // _assetic_7cd567e_0
                if ($pathinfo === '/js/compiled_7cd567e_bootstrap.min_1.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '7cd567e',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_7cd567e_0',);
                }

                if (0 === strpos($pathinfo, '/js/compiled_7cd567e_jquery.validationEngine')) {
                    // _assetic_7cd567e_1
                    if ($pathinfo === '/js/compiled_7cd567e_jquery.validationEngine_2.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '7cd567e',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_7cd567e_1',);
                    }

                    // _assetic_7cd567e_2
                    if ($pathinfo === '/js/compiled_7cd567e_jquery.validationEngine-es_3.js') {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '7cd567e',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_7cd567e_2',);
                    }

                }

                // _assetic_7cd567e_3
                if ($pathinfo === '/js/compiled_7cd567e_common_4.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '7cd567e',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_7cd567e_3',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/_')) {
            // _wdt
            if (0 === strpos($pathinfo, '/_wdt') && preg_match('#^/_wdt/(?P<token>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => '_wdt')), array (  '_controller' => 'web_profiler.controller.profiler:toolbarAction',));
            }

            if (0 === strpos($pathinfo, '/_profiler')) {
                // _profiler_home
                if (rtrim($pathinfo, '/') === '/_profiler') {
                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', '_profiler_home');
                    }

                    return array (  '_controller' => 'web_profiler.controller.profiler:homeAction',  '_route' => '_profiler_home',);
                }

                if (0 === strpos($pathinfo, '/_profiler/search')) {
                    // _profiler_search
                    if ($pathinfo === '/_profiler/search') {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchAction',  '_route' => '_profiler_search',);
                    }

                    // _profiler_search_bar
                    if ($pathinfo === '/_profiler/search_bar') {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchBarAction',  '_route' => '_profiler_search_bar',);
                    }

                }

                // _profiler_purge
                if ($pathinfo === '/_profiler/purge') {
                    return array (  '_controller' => 'web_profiler.controller.profiler:purgeAction',  '_route' => '_profiler_purge',);
                }

                if (0 === strpos($pathinfo, '/_profiler/i')) {
                    // _profiler_info
                    if (0 === strpos($pathinfo, '/_profiler/info') && preg_match('#^/_profiler/info/(?P<about>[^/]++)$#s', $pathinfo, $matches)) {
                        return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_info')), array (  '_controller' => 'web_profiler.controller.profiler:infoAction',));
                    }

                    // _profiler_import
                    if ($pathinfo === '/_profiler/import') {
                        return array (  '_controller' => 'web_profiler.controller.profiler:importAction',  '_route' => '_profiler_import',);
                    }

                }

                // _profiler_export
                if (0 === strpos($pathinfo, '/_profiler/export') && preg_match('#^/_profiler/export/(?P<token>[^/\\.]++)\\.txt$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_export')), array (  '_controller' => 'web_profiler.controller.profiler:exportAction',));
                }

                // _profiler_phpinfo
                if ($pathinfo === '/_profiler/phpinfo') {
                    return array (  '_controller' => 'web_profiler.controller.profiler:phpinfoAction',  '_route' => '_profiler_phpinfo',);
                }

                // _profiler_search_results
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/search/results$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_search_results')), array (  '_controller' => 'web_profiler.controller.profiler:searchResultsAction',));
                }

                // _profiler
                if (preg_match('#^/_profiler/(?P<token>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler')), array (  '_controller' => 'web_profiler.controller.profiler:panelAction',));
                }

                // _profiler_router
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/router$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_router')), array (  '_controller' => 'web_profiler.controller.router:panelAction',));
                }

                // _profiler_exception
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_exception')), array (  '_controller' => 'web_profiler.controller.exception:showAction',));
                }

                // _profiler_exception_css
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception\\.css$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_exception_css')), array (  '_controller' => 'web_profiler.controller.exception:cssAction',));
                }

            }

            if (0 === strpos($pathinfo, '/_configurator')) {
                // _configurator_home
                if (rtrim($pathinfo, '/') === '/_configurator') {
                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', '_configurator_home');
                    }

                    return array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::checkAction',  '_route' => '_configurator_home',);
                }

                // _configurator_step
                if (0 === strpos($pathinfo, '/_configurator/step') && preg_match('#^/_configurator/step/(?P<index>[^/]++)$#s', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_configurator_step')), array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::stepAction',));
                }

                // _configurator_final
                if ($pathinfo === '/_configurator/final') {
                    return array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::finalAction',  '_route' => '_configurator_final',);
                }

            }

        }

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

            // larula_ecodal_contact
            if ($pathinfo === '/contacto') {
                return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::contactAction',  '_route' => 'larula_ecodal_contact',);
            }

        }

        // larula_ecodal_dataset
        if ($pathinfo === '/dataset') {
            return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::datasetAction',  '_route' => 'larula_ecodal_dataset',);
        }

        // larula_ecodal_contact_process
        if ($pathinfo === '/contacto/procesar') {
            return array (  '_controller' => 'LaRula\\EcodalBundle\\Controller\\DefaultController::contactProcessAction',  '_route' => 'larula_ecodal_contact_process',);
        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
