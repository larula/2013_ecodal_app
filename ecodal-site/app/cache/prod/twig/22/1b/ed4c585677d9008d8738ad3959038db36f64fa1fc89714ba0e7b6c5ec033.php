<?php

/* LaRulaEcodalBundle:Layout:nav.html.twig */
class __TwigTemplate_221bed4c585677d9008d8738ad3959038db36f64fa1fc89714ba0e7b6c5ec033 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!-- Static navbar -->
<div class=\"navbar navbar-default navbar-static-top\">
\t<div class=\"container\">
\t\t<a class=\"navbar-brand\" href=\"";
        // line 4
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_home");
        echo "\" style=\"padding:0;\" ><img src=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("/img/logo-ecodal.png"), "html", null, true);
        echo "\"></a>
\t\t<div class=\"navbar-header\">
\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">
\t\t\t\t<span class=\"icon-bar\"></span>
\t\t\t\t<span class=\"icon-bar\"></span>
\t\t\t\t<span class=\"icon-bar\"></span>
\t\t\t</button>
\t\t</div>
\t\t<div class=\"navbar-collapse collapse\">
\t\t\t<ul id=\"nav-main\" class=\"nav navbar-nav\">
\t\t\t\t<!--li class=\"";
        // line 14
        if (array_key_exists("pageHome", $context)) {
            echo "active";
        }
        echo "\">
\t\t\t\t\t<a href=\"";
        // line 15
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_home");
        echo "\"><span class=\"glyphicon glyphicon-home\"></span><span><strong>&nbsp;Inicio</strong></span></a>
\t\t\t\t</li-->
\t\t\t\t<li class=\"";
        // line 17
        if (array_key_exists("pageProject", $context)) {
            echo "active";
        }
        echo "\">
\t\t\t\t\t<a href=\"";
        // line 18
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_project");
        echo "\"><span class=\"glyphicon glyphicon-bullhorn green\"></span><span><strong>&nbsp;ECODAL</strong></span></a>
\t\t\t\t</li>
\t\t\t\t<li class=\"";
        // line 20
        if (array_key_exists("pageTips", $context)) {
            echo "active";
        }
        echo "\">
\t\t\t\t\t<a href=\"";
        // line 21
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_tips");
        echo "\"><span class=\"glyphicon glyphicon-ok blue\"></span><span><strong>&nbsp;EcoTips</strong></span></a>
\t\t\t\t</li>
\t\t\t\t<li class=\"";
        // line 23
        if (array_key_exists("pageAcademic", $context)) {
            echo "active";
        }
        echo "\">
\t\t\t\t\t<a href=\"";
        // line 24
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_academic");
        echo "\"><span class=\"glyphicon glyphicon-book yellow\"></span><span><strong>&nbsp;EcoEscolar</strong></span></a>
\t\t\t\t</li>
\t\t\t\t<!--li class=\"";
        // line 26
        if (array_key_exists("pageCredential", $context)) {
            echo "active";
        }
        echo "\">
\t\t\t\t\t<a href=\"";
        // line 27
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_credencial");
        echo "\"><span class=\"glyphicon glyphicon-credit-card red\"></span><span><strong>&nbsp;ECO Datos</strong></span></a>
\t\t\t\t</li-->
\t\t\t\t<li class=\"";
        // line 29
        if (array_key_exists("pageContact", $context)) {
            echo "active";
        }
        echo "\">
\t\t\t\t\t<a href=\"";
        // line 30
        echo $this->env->getExtension('routing')->getUrl("larula_ecodal_contact");
        echo "\"><span class=\"glyphicon glyphicon-earphone red\"></span><span><strong>&nbsp;Contáctanos</strong></span></a>
\t\t\t\t</li>
\t\t\t</ul>
\t\t</div>
\t</div>
</div>";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Layout:nav.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 29,  89 => 27,  83 => 26,  78 => 24,  72 => 23,  56 => 18,  24 => 4,  19 => 1,  215 => 45,  209 => 29,  203 => 16,  197 => 10,  178 => 60,  141 => 58,  137 => 51,  131 => 47,  129 => 45,  118 => 37,  114 => 36,  110 => 35,  100 => 30,  98 => 29,  92 => 28,  87 => 30,  85 => 29,  79 => 28,  75 => 30,  73 => 29,  67 => 21,  63 => 30,  61 => 20,  55 => 28,  51 => 21,  43 => 16,  34 => 10,  23 => 1,  60 => 12,  54 => 7,  50 => 17,  47 => 8,  45 => 15,  42 => 6,  39 => 14,  36 => 4,  31 => 2,  28 => 3,);
    }
}
