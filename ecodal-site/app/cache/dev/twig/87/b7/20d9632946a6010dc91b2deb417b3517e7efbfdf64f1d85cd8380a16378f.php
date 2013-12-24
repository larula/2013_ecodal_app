<?php

/* LaRulaEcodalBundle:Default:tips.html.twig */
class __TwigTemplate_87b720d9632946a6010dc91b2deb417b3517e7efbfdf64f1d85cd8380a16378f extends Twig_Template
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
\t<div class=\"jumbotron text-center\" style=\"margin:0 auto;\">
\t\t<h1 class=\"text-center\"><span class=\"blue\">Bienvendio a ECOTIPS</span></h1>
\t\t<p>
\t\t\tA continuación encontrarás toda la información que necesitas para poder jugar mucho mejor en ECODAL y para que en tu día a día puedas ayudar a cuidar el medio ambiente.<br> 
\t\t\tTambién puedes compartirlos en Facebook o en Twitter.<br> 
\t\t</p>
\t\t<br>
\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-warning tip\">
\t\t\t\t<h3>Luz</h3> 
\t\t\t\t\tCuando salgas de una habitación y quede desocupada apaga las luces.<br> 
\t\t\t\t\tTener la luz encendida sin necesidad, genera desperdicio y contaminación.<br>
\t\t\t\t\t<br>\t\t\t\t\t
\t\t\t\t\t<span class=\"glyphicon glyphicon-volume-up small-circle white\" id=\"tip-luz\"></span>
\t\t\t\t\t<span class=\"glyphicon glyphicon-volume-off small-circle white\" id=\"tip-luz-stop\"></span>
\t\t\t</div> 
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-warning tip\">
\t\t\t\t<h3>Aire acondicionado</h3> 
\t\t\t\t\tSi hace calor, abre las ventanas de la casa y deja circular el aire libremente.<br>
\t\t\t\t\tAhorrarás en consumo de energía mientras refrescas naturalmente el ambiente.<br>
\t\t\t\t\t<br>
\t\t\t\t\t<span class=\"glyphicon glyphicon-volume-up small-circle white\" id=\"tip-aireacondicionado\"></span> 
\t\t\t\t\t<span class=\"glyphicon glyphicon-volume-off small-circle white\" id=\"tip-aireacondicionado-stop\"></span>
\t\t\t\t\t
\t\t\t</div> \t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-info tip\">
\t\t\t\t<h3>Cepillado de dientes</h3>
\t\t\t\tMientras lavas tus dientes, cierra la llave del agua. Ahorrarás hasta 20 litros de agua limpia.<br>
\t\t\t\t<br>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-up small-circle white\" id=\"tip-banio\"></span>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-off small-circle white\" id=\"tip-banio-stop\"></span>
\t\t\t</div>
\t\t  </div>
\t\t</div>

\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip\">
\t\t\t\t<h3>Ducharse</h3>
\t\t\t\tCuando estés en la ducha no juegues con el agua.  Bañarse dejando correr el agua puede hacerte desperdiciar hasta 100 litros cada 5 minutos.<br>
\t\t\t\t<br>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-up small-circle white\" id=\"tip-ducha\"></span>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-off small-circle white\" id=\"tip-ducha-stop\"></span>
\t\t\t</div>
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-success tip\">
\t\t\t\t<h3>Reciclaje</h3>
\t\t\t\tSepara los desechos en botes de basura diferentes, por ejemplo, orgánico, plástico, papel y vidrio. 
\t\t\t\tAsí disminuyes la contaminación del planeta, evitando la acumulación de residuos en ríos, quebradas y otros espacios naturales.<br>
\t\t\t\t<br>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-up small-circle white\" id=\"tip-reciclaje\"></span>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-off small-circle white\"  id=\"tip-reciclaje-stop\"></span>
\t\t\t</div>\t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-info tip\">
\t\t\t\t<h3>Lavar los platos</h3>
\t\t\t\tCuando laves los platos hazlo en 3 pasos:<br>
\t\t\t\t1. Remoja los platos para dejarlos listos para enjabonar.<br>
\t\t\t\t2. Enjabónalos completamente. Siempre mantén la llave cerrada.<br>
\t\t\t\t3 Enjuaga rápidamente.<br>
\t\t\t\tSi no se siguen estos 3 sencillos pasos puedes gastar hasta 100 litros de agua cada 10 minutos.<br>
\t\t\t\t<br>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-up small-circle white\" id=\"tip-lavarlosplatos\"></span>
\t\t\t\t<span class=\"glyphicon glyphicon-volume-off small-circle white\" id=\"tip-lavarlosplatos-stop\"></span>
\t\t\t</div>
\t\t  </div>

\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Agua utilizada por día</h3>
\t\t\t\tLa Organización Mundial de la Salud dice que son necesarios entre 50 y 100 litros de agua por persona, en un día para cubrir las necesidades básicas.<br>
\t\t\t</div>
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Los dentitas dicen...</h3>
\t\t\t\tLos dentistas dicen que la duración del lavado de los dientes puede ser  de 1 minuto aproximadamente.<br>
\t\t\t</div>\t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Ahorrar agua mientras lavo los platos</h3>
\t\t\t\tPuedes lavar los platos de una familia de 4 personas en 5 minutos. Y si tienes la llave cerrada mientras lavas, ahorras un 40% del agua. En este caso 20 litros de agua.
\t\t\t</div>
\t\t</div>

\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Duchas de 5 minutos</h3>
\t\t\t\tLa Puedes tomar duchas de 5 minutos y quedar impecable. Primera te mojas luego te enjabonas y finalmente retiras el jabón.
\t\t\t</div>
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Lavar tus manos</h3>
\t\t\t\t\tPuedes lavar tus manos en el mismo tiempo que cantas el cumpleaños feliz. Si lo haces con la llave cerrada, ahorras hasta litro y medio de agua.
\t\t\t</div>\t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Lavar la ropa por la noche</h3>
\t\t\t\tLavar la ropa en horas de la noche ayuda a que el consumo de agua sea inferior.
\t\t\t</div>
\t\t  </div>
\t\t</div>

\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Llave de agua goteando</h3>
\t\t\t\tUna llave de agua goteando desperdicia 320 litros de agua por semana. Si evitas este desperdicio, ahorras el equivalente a la cantidad de agua que necesita una persona para cubrir sus necesidades básicas durante seis días.
\t\t\t</div>
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-warning tip tip-without-song\">
\t\t\t\t<h3>Batería del celular</h3>
\t\t\t\t\tSiempre que no estés cargando la batería de tu celular, desconecta el cargador. Si lo dejas conectado continuará su consumo desperdiciando energía.
\t\t\t</div>\t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-warning tip tip-without-song\">
\t\t\t\t<h3>Antes de prender el aire acondicionado</h3>
\t\t\t\t\tRecuerda siempre antes de prender el aire acondicionado, revisar si abriendo las ventanas del lugar puedes generar ventilación natural.
\t\t\t</div>
\t\t  </div>
\t\t</div>

\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-warning tip tip-without-song\">
\t\t\t\t<h3>Alimentos calientes</h3>
\t\t\t\tNo guardes alimentos calientes en la nevera. Así ayudarás a que su motor no gaste más energía de la necesaria para enfriarlo.
\t\t\t</div>
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Si tu papá se afeita</h3>
\t\t\t\t\tMientras tu papá se afeita, dile que cierre la llave del agua. Ahorrará hasta 20 litros de agua.
\t\t\t</div>\t\t  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">
\t\t  \t<div class=\"alert alert-info tip tip-without-song\">
\t\t\t\t<h3>Según tus deshechos</h3>
\t\t\t\t\tCuando utilices el inodoro diferencia tu descarga según tus deshechos, así ahorras hasta 22 litros por descarga.
\t\t\t</div>
\t\t  </div>
\t\t</div>

\t\t<div class=\"row\">
\t\t  <div class=\"col-md-4\">
\t\t\t<div class=\"alert alert-warning tip tip-without-song\">
\t\t\t\t<h3>Evita prender el extractor</h3>
\t\t\t\ttienes una ventana en el cuarto de baño, cuando te duches ábrela y evita prender el extractor. Ahorrarás energía eléctrica y tendrás aire puro para ventilar.
\t\t\t</div>
\t\t  </div>
\t\t  <div class=\"col-md-4\">
  \t
\t\t  </div>
\t\t  <div class=\"col-md-4\">

\t\t  </div>
\t\t</div>

\t</div>
</div> <!-- /container --> 
<script type=\"text/javascript\">

createjs.Sound.registerSound(\"/audio/tip-luz.mp3\", \"tip-luz\");
createjs.Sound.registerSound(\"/audio/tip-aireacondicionado.mp3\", \"tip-aireacondicionado\");
createjs.Sound.registerSound(\"/audio/tip-banio.mp3\", \"tip-banio\");
createjs.Sound.registerSound(\"/audio/tip-ducha.mp3\", \"tip-ducha\");
createjs.Sound.registerSound(\"/audio/tip-lavarlosplatos.mp3\", \"tip-lavarlosplatos\");
createjs.Sound.registerSound(\"/audio/tip-reciclaje.mp3\", \"tip-reciclaje\");
createjs.Sound.addEventListener(\"fileload\", createjs.proxy(this.loadHandler, this));

var intance = null;

 function loadHandler(event) {
     // This is fired for each sound that is registered.
     instanceTipLuz = createjs.Sound.createInstance(\"tip-luz\"); 
     instanceTipAireacondicionado = createjs.Sound.createInstance(\"tip-aireacondicionado\"); 
     instanceTipBanio = createjs.Sound.createInstance(\"tip-banio\"); 
     instanceTipDucha = createjs.Sound.createInstance(\"tip-ducha\"); 
     instanceTipLavarlosplatos = createjs.Sound.createInstance(\"tip-lavarlosplatos\"); 
     instanceTipReciclaje = createjs.Sound.createInstance(\"tip-reciclaje\"); 
     //instance.addEventListener(\"complete\", createjs.proxy(this.handleComplete, this));
     instanceTipLuz.volume = 0.5;
     instanceTipAireacondicionado.volume = 0.5;
     instanceTipBanio.volume = 0.5;
     instanceTipDucha.volume = 0.5;
     instanceTipLavarlosplatos.volume = 0.5;
     instanceTipReciclaje.volume = 0.5;

     \$(document).ready(function(){
     \t\t\$('#tip-luz').on('click',function(){
     \t\t\tinstanceTipLuz.play();
     \t\t});     \t\t
     \t\t\$('#tip-aireacondicionado').on('click',function(){
     \t\t\tinstanceTipAireacondicionado.play();
     \t\t});\t\t
     \t\t\$('#tip-banio').on('click',function(){
     \t\t\tinstanceTipBanio.play();
     \t\t});\t\t
     \t\t\$('#tip-ducha').on('click',function(){
     \t\t\tinstanceTipDucha.play();
     \t\t});\t\t
     \t\t\$('#tip-lavarlosplatos').on('click',function(){
     \t\t\tinstanceTipLavarlosplatos.play();
     \t\t});\t\t
     \t\t\$('#tip-reciclaje').on('click',function(){
     \t\t\tinstanceTipReciclaje.play();
     \t\t});

     \t\t\$('#tip-luz-stop').on('click',function(){
     \t\t\tinstanceTipLuz.stop();
     \t\t});     \t\t
     \t\t\$('#tip-aireacondicionado-stop').on('click',function(){
     \t\t\tinstanceTipAireacondicionado.stop();
     \t\t});\t\t
     \t\t\$('#tip-banio-stop').on('click',function(){
     \t\t\tinstanceTipBanio.stop();
     \t\t});\t\t
     \t\t\$('#tip-ducha-stop').on('click',function(){
     \t\t\tinstanceTipDucha.stop();
     \t\t});\t\t
     \t\t\$('#tip-lavarlosplatos-stop').on('click',function(){
     \t\t\tinstanceTipLavarlosplatos.stop();
     \t\t});\t\t
     \t\t\$('#tip-reciclaje-stop').on('click',function(){
     \t\t\tinstanceTipReciclaje.stop();
     \t\t});
     });
 }

</script>
";
    }

    public function getTemplateName()
    {
        return "LaRulaEcodalBundle:Default:tips.html.twig";
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
