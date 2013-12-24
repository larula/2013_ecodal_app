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
            // asset "6d73279_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_6d73279_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/compiled_6d73279_bootstrap.min_1.css");
            // line 27
            echo "            <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\" />               
            ";
            // line 28
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 29
            echo "        ";
            // asset "6d73279_1"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_6d73279_1") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/compiled_6d73279_main_2.css");
            // line 27
            echo "            <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\" />               
            ";
            // line 28
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 29
            echo "        ";
        } else {
            // asset "6d73279"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_6d73279") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/compiled_6d73279.css");
            // line 27
            echo "            <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\" />               
            ";
            // line 28
            $this->displayBlock('stylesheets', $context, $blocks);
            // line 29
            echo "        ";
        }
        unset($context["asset_url"]);
        echo " 
        <!-- /CSS -->
        
        <!-- JavaScript plugins (requires jQuery) -->
        <script src=\"//code.jquery.com/jquery-2.0.3.min.js\"></script>
        <script>window.jQuery || document.write('<script src=\"";
        // line 34
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("lib/jquery-2.0.3.min.js"), "html", null, true);
        echo "\"><\\/script>')</script>
        <script src=\"";
        // line 35
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("lib/createjs-2013.09.25.min.js"), "html", null, true);
        echo "\"></script>
        <script src=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/main.js"), "html", null, true);
        echo "\"></script>
        <!-- JS -->

    </head>
    <body>        
        <!--[if lt IE 7]>
            <p class=\"chromeframe\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> or <a href=\"http://www.google.com/chromeframe/?redirect=true\">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        ";
        // line 44
        $this->displayBlock('body', $context, $blocks);
        // line 46
        echo "     
        <!-- JS -->

        <!-- Include all compiled plugins (below), or include individual files as needed -->
        ";
        // line 50
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "78cf407_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_78cf407_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/compiled_78cf407_bootstrap.min_1.js");
            // line 55
            echo "            <script src=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\"></script> 
        ";
            // asset "78cf407_1"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_78cf407_1") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/compiled_78cf407_common_2.js");
            echo "            <script src=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\"></script> 
        ";
        } else {
            // asset "78cf407"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_78cf407") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/compiled_78cf407.js");
            echo "            <script src=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\"></script> 
        ";
        }
        unset($context["asset_url"]);
        // line 57
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

    // line 28
    public function block_stylesheets($context, array $blocks = array())
    {
        echo " ";
    }

    // line 44
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
        return array (  183 => 44,  177 => 28,  171 => 16,  165 => 10,  146 => 57,  126 => 55,  122 => 50,  116 => 46,  114 => 44,  103 => 36,  99 => 35,  95 => 34,  85 => 29,  83 => 28,  78 => 27,  73 => 29,  71 => 28,  66 => 27,  62 => 29,  60 => 28,  55 => 27,  51 => 21,  45 => 17,  43 => 16,  34 => 10,  23 => 1,);
    }
}
