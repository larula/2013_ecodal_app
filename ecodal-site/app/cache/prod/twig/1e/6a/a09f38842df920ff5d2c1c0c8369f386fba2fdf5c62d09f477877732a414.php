<?php

/* LaRulaEcodalBundle:Default:academic.html.twig */
class __TwigTemplate_1e6aa09f38842df920ff5d2c1c0c8369f386fba2fdf5c62d09f477877732a414 extends Twig_Template
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
\t<div class=\"jumbotron\">
\t\t<h1 class=\"text-center\"><span class=\"yellow\">ECO ESCOLAR</span></h1>
\t\t<P>
\t\t\tSi quieres tener tu licencia ECOESCOLAR es porque eres docente y perteneces a una  institución educativa.<br>
\t\t\tCon ECOESCOLAR como herramienta de enseñanza podrás convocar a tus estudiantes y tener una clase interactiva, divertida y con la posibilidad de orientar y medir el aprendizaje de los chicos durante su uso.<br>
\t\t\tPara solicitar tu licencia ECOESCOLAR, contáctate con nosotros enviando un mensaje a: quieromilenciaecoescolar@ecodal.com.ar<br>
\t\t</P>\t
\t</div>
</div> <!-- /container --> 
";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Default:academic.html.twig";
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
