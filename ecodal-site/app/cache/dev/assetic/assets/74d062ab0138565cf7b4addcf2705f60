/**
 * Common library
 * Description: 
 *               - Ajax utilities
 *               - Modal utilities
 *               
 * Author: Lucas Vazquez
 * Date create: 9 April 2013              
 */

;var Common = function(){
    
    /**
     * Selector que identifica donde se insertara la respuesta
     * @type String
     */
    this.selector = '';
    
    /**
     * Identifica el contenedor de la modal
     * @type String
     */
    this.modalId = 'modal-site';
    
    /**
     * Determina si se muestra la imagen de carga
     * @type bool
     */
    this.showLoadImg = true;
      
    /**
     * Setea los parametros por defecto
     * @returns {undefined}
     */  
    this.setDefault = function(){
        this.modalId = 'modal-site';
        this.showLoadImg = true;
    };
    
    /**
     * Realiza las peticiones ajax 
     * Extendiendo las funciones ajaxRequestDone, ajaxRequestFail y ajaxRequestAlways se puede definir la tareas 
     * que debe realizar el sistema luego de cada llamada
     * @param {type} url
     * @param {type} params
     * @param {type} selector
     * @param {type} dataType
     */
    this.ajaxRequest = function(url, params, selector, dataType, showLoadImg ){
       
       var me = this;
       if(showLoadImg){
            this.showLoad(selector);
       }
       $.post( url, $.param(params), function(data, textStatus, jqXHR){          
            
            me.selector = selector;
            
            jqXHR.done(function(data, textStatus, jqXHR){
                if(dataType === 'html'){ $(me.selector).html(data); }
                me.ajaxRequestDone(data, textStatus, jqXHR);     
                me.ajaxRequestDone = function(data, textStatus, jqXHR){ }
            });            
            jqXHR.fail(function(data, textStatus, jqXHR){
                me.ajaxRequestFail(data, textStatus, jqXHR);   
                me.ajaxRequestFail = function(data, textStatus, jqXHR){ };
            });
            jqXHR.always(function(data, textStatus, jqXHR){                
                me.ajaxRequestAlways(data, textStatus, jqXHR);    
                me.ajaxRequestAlways = function(data, textStatus, jqXHR){ }; 
            });
            
       },dataType);
    };

    /**
     * Submite el formulario y serializa la información
     * @param string form
     */
    this.submitForm = function(form, selector, dataType ){   
       
        var me = this;
       // this.showLoad(selector);
       
       $.post( form.attr('action'), form.serialize(), function(data, textStatus, jqXHR){          
            
            me.selector = selector;
            
            jqXHR.done(function(data, textStatus, jqXHR){
                if(dataType === 'html'){ $(me.selector).html(data); }
                me.ajaxRequestDone(data, textStatus, jqXHR);     
                me.ajaxRequestDone = function(data, textStatus, jqXHR){ }
            });            
            jqXHR.fail(function(data, textStatus, jqXHR){
                me.ajaxRequestFail(data, textStatus, jqXHR);   
                me.ajaxRequestFail = function(data, textStatus, jqXHR){ };
            });
            jqXHR.always(function(data, textStatus, jqXHR){                
                me.ajaxRequestAlways(data, textStatus, jqXHR);    
                me.ajaxRequestAlways = function(data, textStatus, jqXHR){ }; 
            });
            
       },dataType);       
    };
    
    /**
     * INTERFACE (Esta funciön puede extenderse para realizar tareas puntuales)
     * Implementa la funcionalidad de una peticion ajax exitosa
     * @param {type} data
     * @param {type} textStatus
     * @param {type} jqXHR
     */
    this.ajaxRequestDone = function(data, textStatus, jqXHR){ };
    
    /**
     * INTERFACE (Esta funciön puede extenderse para realizar tareas puntuales)
     * Implementa la funcionalidad luego de una peticion ajax con errores
     * @param {type} data
     * @param {type} textStatus
     * @param {type} jqXHR
     */
    this.ajaxRequestFail = function(data, textStatus, jqXHR){ };
    
    /**
     * INTERFACE (Esta funciön puede extenderse para realizar tareas puntuales)
     * Implementa la funcionalidad que se ejecutara siempre despues de una peticion
     * @param {type} data
     * @param {type} textStatus
     * @param {type} jqXHR
     */
    this.ajaxRequestAlways = function(data, textStatus, jqXHR){ };   
    
    /***************************************************************************************************/
    /************************************* MODAL *******************************************************/
    /***************************************************************************************************/
    
    /**
     * Set el id de la modal
     */
    this.setModalId = function(id){
        this.modalId = id;
    };
    
    /**
     * Retorna el id del contenedor de la modal
     * @returns string
     */
    this.getModalId = function(){
        return this.modalId;
    };
    
    /**
     * Inserta en el body el codigo de la modal
     */
    this.putModalContainer = function(){
        
        var html = '<div id="'+this.modalId+'" style="width:823px !important; margin-left: -413px" class="modal hide fade"></div>';        
        $('body').append(html); 
    };    
    
    /**
     * Define el contenido de la modal
     * @param string html   
     */
    this.setModalContent = function(content){
        $('#'+this.modalId).empty().append(content);
    };
    
    /**
     * Verifica si existe la modal
     * @returns {Boolean}
     */
    this.existModal = function(){
        var foundModal = $('body').find('#'+this.modalId);
        
        if(foundModal.length === 0){  
            return false;
        }
        
        return true;
    };
    
    /**
     * Muestra la modal
     * @param {obj} options
     */
    this.showModal = function(content,options){
        
        if(!this.existModal())
        {   
            this.putModalContainer();
        }
        
        if( content !== null)
        {
            this.setModalContent(content);
        }
        
        $('#'+this.modalId).modal(options);
    };
    
    /**
     * Muestra el icono de carga
     * @param string selector
     */
    this.showLoad = function(selector){        
        $(selector).append(this.getLoadContent(selector));
    };
    
    /**
     * Obtiene el contenedor de carga con la imagen
     * @returns {String}
     */
    this.getLoadContent = function(selector){
        
        var loadContent;
        
        if(selector!== null)
        {
            loadContent = '<div style="position:absolute;top:40%;left:50%;margin:auto"><img src="/img/loader.gif" /></div>'
        } else {
            loadContent = '<div style="background-color:#FFF; width:150px; height:150px; margin:auto; padding-top:80px; text-align:center;"><img src="/img/loader.gif" /></div>';
        }
        
        return loadContent;
    };
    
    /**
     * Oculta el icono de carga
     * @param string selector
     */
    this.hideLoad = function(selector){
        $(selector).html();
    };
    
    /**
     * Setea si se desea mostrar la imagen de carga en las consultas ajax
     * @param bool show
     */
    this.setShowLoadImg = function(show){
        this.showLoadImg = show;
    };
    
    /**
     * Obtiene el parametro showLoadImg
     * @returns bool
     */
    this.getShowLoadImg = function(){
        return this.showLoadImg;
    };

    /**
     * Coloca los errores en el formulario
     * @param {type} $form
     * @param {type} $err
     * @returns {undefined}
     */
    this.putError = function(err){

        $.each(err,function(index, value){            
            $('#'+index).validationEngine('showPrompt', value, 'red','topRight',true);   
        });       
    };
    
    this.block = function(container){
        container.block({ 
                    message: '<img src="/img/loader.gif" />',
                    overlayCSS: {opacity: 0.0 },
                    css: {border: '0px solid #000', width:'',backgroundColor: ''}
        }); 
    };
    
}; var common = new Common();