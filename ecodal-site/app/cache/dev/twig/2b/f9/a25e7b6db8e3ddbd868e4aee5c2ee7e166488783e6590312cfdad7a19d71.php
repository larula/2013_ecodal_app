<?php

/* LaRulaEcodalBundle:Default:project.html.twig */
class __TwigTemplate_2bf9a25e7b6db8e3ddbd868e4aee5c2ee7e166488783e6590312cfdad7a19d71 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("LaRulaEcodalBundle:Layout:layout.html.twig");

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "LaRulaEcodalBundle:Layout:layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        echo " 
<div class=\"container\">
\t<!-- Main component for a primary marketing message or call to action -->
\t<div class=\"jumbotron\" id=\"proyect-content\">
\t\t<h1 class=\"text-center\"><span class=\"green\"><span class=\"hide_when_is_small\">Te contamos sobre </span>ECODAL</span></h1>
\t\t<p>\t
\t\t\t<strong>ECODAL</strong> es la plataforma interactiva de educación ambiental para chicos desde los 5 años. 
\t\t<br>
\t\t\tAquí podrán encontrar juegos temáticos y tips para el cuidado del medio ambiente.<br> 
\t\t\tPodrán ver la actividad de otros usuarios en tiempo real e interactuar con ellos en juegos, chat y otros espacios de <strong>ECODAL</strong>. <br>
\t\t</p>
\t\t<p>
\t\t\tEl objetivo es enseñar a los niños buenos hábitos para el cuidado del medio ambiente desde espacios cotidianos como la casa, el colegio o la calle, para reforzar la posterior replica en la vida real.
\t\t</p>
\t\t<p>\t
\t\t\tDentro de los múltiples aprendizajes ofrecidos por la plataforma, los más destacados en la actualidad son: Reciclaje, ahorro de energía, ahorro de agua y limpieza de su entorno.
\t\t</p>
\t\t<br>
\t\t<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/857ZQHkjgFI\" frameborder=\"0\" allowfullscreen></iframe>
\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Default:project.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  28 => 3,);
    }
}
