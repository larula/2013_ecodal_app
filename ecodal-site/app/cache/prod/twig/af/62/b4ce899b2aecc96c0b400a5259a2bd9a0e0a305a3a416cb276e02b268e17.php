<?php

/* LaRulaEcodalBundle:Layout:layout.html.twig */
class __TwigTemplate_af62b4ce899b2aecc96c0b400a5259a2bd9a0e0a305a3a416cb276e02b268e17 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("LaRulaEcodalBundle:Layout:base.html.twig");

        $this->blocks = array(
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'content' => array($this, 'block_content'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "LaRulaEcodalBundle:Layout:base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_stylesheets($context, array $blocks = array())
    {
    }

    // line 4
    public function block_body($context, array $blocks = array())
    {
        // line 5
        echo "\t";
        $this->env->loadTemplate("LaRulaEcodalBundle:Layout:nav.html.twig")->display($context);
        // line 6
        echo "
\t";
        // line 7
        $this->displayBlock('content', $context, $blocks);
        // line 8
        echo "
\t";
        // line 9
        $this->env->loadTemplate("LaRulaEcodalBundle:Layout:footer.html.twig")->display($context);
    }

    // line 7
    public function block_content($context, array $blocks = array())
    {
        echo " ";
    }

    // line 12
    public function block_javascripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Layout:layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  60 => 12,  54 => 7,  50 => 9,  47 => 8,  45 => 7,  42 => 6,  39 => 5,  36 => 4,  31 => 2,  28 => 3,);
    }
}
