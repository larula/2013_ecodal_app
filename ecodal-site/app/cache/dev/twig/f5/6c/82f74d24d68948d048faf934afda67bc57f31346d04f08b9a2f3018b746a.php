<?php

/* LaRulaEcodalBundle:Default:dataset.html.twig */
class __TwigTemplate_f56c82f74d24d68948d048faf934afda67bc57f31346d04f08b9a2f3018b746a extends Twig_Template
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
\t<div class=\"jumbotron\">
\t\t<h1 class=\"text-center\"><span class=\"red\">DATASET</span></h1>
\t\t<p>
\t\t\t¡Hola! Si estás aquí es porque estás interesado en tener toda la información sobre el cuidado del medio ambiente.<br>
\t\t\tA continuación encontrarás los formatos disponibles para realizar la descarga.<br>
\t\t\tHaz clic en el que necesites, guarda el archivo en tu pc o tableta y listo.<br> 
\t\t</p>
\t\t<br>
\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-success tip-without-song tip\">
\t\t\t\t<h3>Tips (CSV)</h3> 
\t\t\t\t\tDescargue los tips para el cuidado del medio ambiente en un archivo con format <strong>CSV</strong><br>
\t\t\t\t\t<br>\t\t\t\t\t
\t\t\t\t\t<a href=\"/data/tips.csv\" target=\"_blank\" ><span class=\"glyphicon glyphicon-arrow-down small-circle white\" ></span></a>
\t\t\t</div> 
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-success tip-without-song tip\">
\t\t\t\t<h3>Tips (XLS)</h3> 
\t\t\t\t\tDescargue los tips para el cuidado del medio ambiente en un archivo con format <strong>XLS</strong><br>
\t\t\t\t\t<br>\t\t\t\t\t
\t\t\t\t\t<a href=\"/data/tips.xls\" target=\"_blank\" ><span class=\"glyphicon glyphicon-arrow-down small-circle white\" ></span></a>
\t\t\t</div> \t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-danger tip-without-song tip\">
\t\t\t\t<h3>Tips (PDF)</h3> 
\t\t\t\t\tDescargue los tips para el cuidado del medio ambiente en un archivo con format <strong>PDF</strong><br>
\t\t\t\t\t<br>\t\t\t\t\t
\t\t\t\t\t<a href=\"/data/tips.pdf\" target=\"_blank\" ><span class=\"glyphicon glyphicon-arrow-down small-circle white\" ></span></a>
\t\t\t</div> \t
\t\t  </div>
\t\t</div>
\t</div>
</div> <!-- /container --> 
";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Default:dataset.html.twig";
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
