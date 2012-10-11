/*$.mockjax({
    url : 'plantillasController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "plantillas" ){
            this.responseText = datosPlantillasTest;
        }
        
    }
});


$.mockjax({
    url : 'Crud',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "lista" ){
            this.responseText = lista;
        }
        if( settings.data.op == "nuevo" ){
            this.responseText = nuevo;
        }
        if( settings.data.op == "editar" ){
            this.responseText = {
                "editar" : "test"
            };
        }
        if( settings.data.op == "eliminar" ){
            lista = listaeliminar;
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});

*/



/*
$.mockjax({
    url : 'productosclienteController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "lista" ){
            this.responseText = productoscliente_lista;
        }
        // Ok - ver - modificar
        if( settings.data.op == "busPro" ){
            this.responseText = productoscliente_editar;
        }
        if( settings.data.op == "valorproducto" ){
            this.responseText = valorproducto;
        }

        
        if( settings.data.op == "nuevo" ){
       
        }
        if( settings.data.op == "editar" ){
            
        }
        if( settings.data.op == "eliminar" ){
      
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});

/*
$.mockjax({
    url : 'cotizacionesController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "configCot" ){
            this.responseText = cotizaciones_config;
        }
        if( settings.data.op == "nuevo" ){
       
        }
        if( settings.data.op == "editar" ){
       
        }
        if( settings.data.op == "eliminar" ){
      
        }
        if( settings.data.op == "vars_contacto" ){
            this.responseText = vars_contacto;
        }
        if( settings.data.op == "generar_pdf" ){
            this.responseText = generar_pdf;
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});


$.mockjax({
    url : 'plantillasController',
    contentType : 'text/json',
    response : function( settings ) {
        // Ok
        if( settings.data.op == "lista" ){
            this.responseText = plantilladocumento_lista;
        }
        // Ok - ver - modificar
        if( settings.data.op == "busPla" ){
            this.responseText = plantilladocumento_editar
        }
        // 
        if( settings.data.op == "del" ){
            this.responseText = {
                error : false,
                "m" : "Mensaje informativo"
            }
        }
        
        if( settings.data.op == "config" ){
            this.responseText = plantilladocumento_nuevo;
        }
        
        
        if( settings.data.op == "add_mod" ){
            this.responseText = plantilladocumento_validacion
            
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});

 

$.mockjax({
    url : 'contactosController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "lista" ){
            this.responseText = contacto_lista;
        }
        if( settings.data.op == "nuevo" ){
            this.responseText = contacto_nuevo;
        }
   
        
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});
*/

/*
$.mockjax({
    url : 'plantillamensajeController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "lista" ){
            this.responseText = plantillamensaje_lista;
        }
        if( settings.data.op == "nuevo" ){
            this.responseText = contacto_nuevo;
        }
        if( settings.data.op == "busPla" ){
            this.responseText = plantillamensaje_editar;
        }
        
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});
*/
/*
$.mockjax({
    url : 'valorproductoController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "lista" ){
            this.responseText = valorproducto_lista;
        }
        if( settings.data.op == "add_mod" ){
            this.responseText = valorproducto_validacion;
        }
        if( settings.data.op == "busVal" ){
            this.responseText = valorproducto_editar;
        }
        if( settings.data.op == "config" ){
            this.responseText = valorproducto_nuevo;
        }
        
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});*/
/*
$.mockjax({
    url : 'clientesController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "lista" ){
            this.responseText = cliente_lista;
        }
        // Ok - ver - modificar
        if( settings.data.op == "busPro" ){
            this.responseText = producto_editar; 
            console.log( producto_editar );
        }
        if( settings.data.op == "valorproducto" ){
            this.responseText = valorproducto;
        }
        if( settings.data.op == "add_mod" ){
            this.responseText = producto_validacion
            
        }
        
        if( settings.data.op == "config" ){
            this.responseText = producto_nuevo; 
        }
        if( settings.data.op == "editar" ){
            
        }
        if( settings.data.op == "eliminar" ){
      
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});*/
/*
$.mockjax({
    url : 'productosController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "listaTodos" ){
            this.responseText = producto_lista;
        }
        // Ok - ver - modificar
        if( settings.data.op == "busPro" ){
            this.responseText = producto_editar; 
            console.log( producto_editar );
        }
        if( settings.data.op == "valorproducto" ){
            this.responseText = valorproducto;
        }
        if( settings.data.op == "add_mod" ){
            this.responseText = producto_validacion
            
        }
        
        if( settings.data.op == "config" ){
            this.responseText = producto_nuevo; 
        }
        if( settings.data.op == "editar" ){
            
        }
        if( settings.data.op == "eliminar" ){
      
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});*/
/*
$.mockjax({
    url : 'contactosController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "mails" ){
            this.responseText = ([]);
        }
   
        console.log("Settings",this.responseText );
        console.log( settings );
        
        
                
    }
});
*/
/*

$.mockjax({
    url : 'estadoCuentaController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "seguimientos" ){
            this.responseText = seguimientos;
        }
        if( settings.data.op == "gestiones" ){
            this.responseText = gestiones;
        }
   
        console.log("Settings",this.responseText );
        console.log( settings );
        
        
                
    }
});
*/

/*
$.mockjax({
    url : 'cotizacionesController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "rencot" ){
            this.responseText = cotizaciones_config;
        }
        if( settings.data.op == "nuevo" ){
       
        }
        if( settings.data.op == "editar" ){
       
        }
        if( settings.data.op == "eliminar" ){
      
        }
        if( settings.data.op == "vars_contacto" ){
            this.responseText = vars_contacto;
        }
        if( settings.data.op == "generar_pdf" ){
            this.responseText = generar_pdf;
        }
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});
*/
/*
$.mockjax({
    url : 'servletMocks',
    contentType : 'text/json',
    response : function( settings ) {
        
        this.responseText = {
            "r": [],
            "m": "ALGUN_MENSAJE_EN_CASO_DE_ERROR_O_EXITO",
            "archivo" : "nodejs-1440x900.png",
            "alert": "success",
            "error": false,
            "cod": "127"
        };
        
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});
*/
/*
$.mockjax({
    url : 'contratosController',
    contentType : 'text/json',
    response : function( settings ) {
        if( settings.data.op == "configCon" ){
            this.responseText = contrato_config;
            console.log("Config cotizacion");
        }
        if( settings.data.op == "contratobase" ){
            this.responseText = contratobase;
            console.log("Contrato base");
        }
        if( settings.data.op == "productoscotizados" ){
            this.responseText = productos_cotizacion;
            console.log("Productos cotizacion");
        }
        
        if( settings.data.op == "busConBase" ){
            this.responseText = usar_contrato_base;
            console.log("Productos cotizacion");
        }
        
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});*/
/*
$.mockjax({
    url : 'cotizacionesController',
    contentType : 'text/json',
    response : function( settings ) {
        
        if( settings.data.op == "cotizacionesactivas" ){
            this.responseText = cotizacion_esactivas;
            console.log( cotizacion_esactivas );
        }
        if( settings.data.op == "productoscotizados" ){
            this.responseText = productos_cotizacion;
        }
        if( settings.data.op == "rencot" ){
            this.responseText = cotizaciones_config;
        }
     
        console.log("Settings")
        console.log( settings );
        
        
                
    }
});*/
/*
$.mockjax({
    url: 'reporteController',
    contentType: 'text/json',
    response: function(settings) {
        if (settings.data.op == "generar_pdf") {
            this.responseText = {
                "nombreArchivo": "LOGO_EMPRESA.jpg",
                "m": "Mensaje de exito en la generacion o fallido...",
                "error": false
            }
        }
        if (settings.data.op == "ver") {
            this.responseText = {
                "reporte_th": [{
                    "th": "Columna 1",
                    "th": "Coumn 2",
                    "th": "Columna 3"
                }],
                "reporte_da": [
                    ["col1",

                    "col2", "col3"],
                    ["col1", "col2", "col3"]
                ]
            }
        }

        if (settings.data.op == "lista") {
            this.responseText = {
                "cant": "100",
                "cantpag": "99",
                "reporte_th": [{
                    "th": "Tipo reporte"
                }],
                "reporte_ta": [{
                    "idreporte_pk": "1",
                    "nombre": "Productos cliente"
                }, {
                    "idreporte_pk": "2",
                    "nombre": "Otro reporte."
                }]
            }
        }



        console.log("Settings")
        console.log(settings);



    }
});*/


$.mockjax({
    url: 'varsMocks',
    contentType: 'text/json',
    response: function(settings) {
        if (settings.data.op == "vars") {
            this.responseText = variables;
        }
       


        console.log("Settings")
        console.log(settings);



    }
});