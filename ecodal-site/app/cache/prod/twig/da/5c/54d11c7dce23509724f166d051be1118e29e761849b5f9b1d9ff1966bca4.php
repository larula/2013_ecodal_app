<?php

/* LaRulaEcodalBundle:Layout:base.html.twig */
class __TwigTemplate_da5c54d11c7dce23509724f166d051be1118e29e761849b5f9b1d9ff1966bca4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'metatags' => array($this, 'block_metatags'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->
<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->
<!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->
<!--[if gt IE 8]><!--> <html class=\"no-js\"> <!--<![endif]-->
    <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">
        
        <title>";
        // line 10
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        
        <!-- METATAGS --> 
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">      
        <link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\" />

        ";
        // line 16
        $this->displayBlock('metatags', $context, $blocks);
        // line 17
        echo "        <!-- /METATAGS --> 
        
        <!-- CSS -->   
        <link href='http://fonts.googleapis.com/css?family=Ranchers' rel='stylesheet' type='text/css'>   
        ";
        // line 21
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "b1222d9_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_b1222d9_0") : $this->env->getExtension('assets')->getAssetUrl("css/compiled_b1222d9_bootstrap.min_1.css");
            // line 28
            echo "            <link rel=\"stylesheet\" href=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\" />               
            ";
            // line 29
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 30
            echo "        ";
            // asset "b1222d9_1"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_b1222d9_1") : $this->env->getExtension('assets')->getAssetUrl("css/compiled_b1222d9_validationEngine.jquery_2.css");
            // line 28
            echo "            <link rel=\"stylesheet\" href=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\" />               
            ";
            // line 29
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 30
            echo "        ";
            // asset "b1222d9_2"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_b1222d9_2") : $this->env->getExtension('assets')->getAssetUrl("css/compiled_b1222d9_main_3.css");
            // line 28
            echo "            <link rel=\"stylesheet\" href=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\" />               
            ";
            // line 29
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 30
            echo "        ";
        } else {
            // asset "b1222d9"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_b1222d9") : $this->env->getExtension('assets')->getAssetUrl("css/compiled_b1222d9.css");
            // line 28
            echo "            <link rel=\"stylesheet\" href=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\" />               
            ";
            // line 29
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 30
            echo "        ";
        }
        unset($context["asset_url"]);
        echo " 
        <!-- /CSS -->
        
        <!-- JavaScript plugins (requires jQuery) -->
        <script src=\"//code.jquery.com/jquery-2.0.3.min.js\"></script>
        <script>window.jQuery || document.write('<script src=\"";
        // line 35
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("lib/jquery-2.0.3.min.js"), "html", null, true);
        echo "\"><\\/script>')</script>
        <script src=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("lib/createjs-2013.09.25.min.js"), "html", null, true);
        echo "\"></script>
        <script src=\"";
        // line 37
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/main.js"), "html", null, true);
        echo "\"></script>
        <!-- JS -->

    </head>
    <body>        
        <!--[if lt IE 7]>
            <p class=\"chromeframe\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> or <a href=\"http://www.google.com/chromeframe/?redirect=true\">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        ";
        // line 45
        $this->displayBlock('body', $context, $blocks);
        // line 47
        echo "     
        <!-- JS -->

        <!-- Include all compiled plugins (below), or include individual files as needed -->
        ";
        // line 51
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "7cd567e_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_7cd567e_0") : $this->env->getExtension('assets')->getAssetUrl("js/compiled_7cd567e_bootstrap.min_1.js");
            // line 58
            echo "            <script src=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\"></script> 
        ";
            // asset "7cd567e_1"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_7cd567e_1") : $this->env->getExtension('assets')->getAssetUrl("js/compiled_7cd567e_jquery.validationEngine_2.js");
            echo "            <script src=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\"></script> 
        ";
            // asset "7cd567e_2"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_7cd567e_2") : $this->env->getExtension('assets')->getAssetUrl("js/compiled_7cd567e_jquery.validationEngine-es_3.js");
            echo "            <script src=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\"></script> 
        ";
            // asset "7cd567e_3"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_7cd567e_3") : $this->env->getExtension('assets')->getAssetUrl("js/compiled_7cd567e_common_4.js");
            echo "            <script src=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\"></script> 
        ";
        } else {
            // asset "7cd567e"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_7cd567e") : $this->env->getExtension('assets')->getAssetUrl("js/compiled_7cd567e.js");
            echo "            <script src=\"";
            if (isset($context["asset_url"])) { $_asset_url_ = $context["asset_url"]; } else { $_asset_url_ = null; }
            echo twig_escape_filter($this->env, $_asset_url_, "html", null, true);
            echo "\"></script> 
        ";
        }
        unset($context["asset_url"]);
        // line 60
        echo "
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-43031018-2', 'ecodal.com.ar');
          ga('send', 'pageview');

        </script>
        
        <!-- /JS -->
        
    </body>
</html>";
    }

    // line 10
    public function block_title($context, array $blocks = array())
    {
        echo "Ecodal";
    }

    // line 16
    public function block_metatags($context, array $blocks = array())
    {
        echo " ";
    }

    // line 29
    public function block_stylesheets($context, array $blocks = array())
    {
        echo " ";
    }

    // line 45
    public function block_body($context, array $blocks = array())
    {
        echo "             
        ";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Layout:base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  215 => 45,  209 => 29,  203 => 16,  197 => 10,  178 => 60,  141 => 58,  137 => 51,  131 => 47,  129 => 45,  118 => 37,  114 => 36,  110 => 35,  100 => 30,  98 => 29,  92 => 28,  87 => 30,  85 => 29,  79 => 28,  75 => 30,  73 => 29,  67 => 28,  63 => 30,  61 => 29,  55 => 28,  51 => 21,  43 => 16,  34 => 10,  23 => 1,  60 => 12,  54 => 7,  50 => 9,  47 => 8,  45 => 17,  42 => 6,  39 => 5,  36 => 4,  31 => 2,  28 => 3,);
    }
}
