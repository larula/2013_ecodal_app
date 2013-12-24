<?php

/* LaRulaEcodalBundle:Default:index.html.twig */
class __TwigTemplate_b7ca0ecae720ff5ffab372b83738eb1e5521dad475810703e95f90b4ebae8bcb extends Twig_Template
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
\t<div id=\"index-jumbotron\" class=\"jumbotron text-center\">
\t\t<a href=\"http://jugar.ecodal.com.ar\" target=\"_blank\" id=\"btn-play\">
\t\t\tJUGAR
\t\t</a>\t
\t</div>
</div>
<script type=\"text/javascript\">

createjs.Sound.registerSound(\"/audio/bienvenida.mp3\", \"au-bienvenida\");
createjs.Sound.addEventListener(\"fileload\", createjs.proxy(this.loadHandler, this));

var intance = null;

 function loadHandler(event) {

     instance = createjs.Sound.createInstance(\"au-bienvenida\"); 
     instance.volume = 0.5;

     \$(document).ready(function(){
     \t\tinstance.play();
     });
 }

</script>
";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Default:index.html.twig";
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
