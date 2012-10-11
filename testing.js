module("Core");
test("Test Adjuntar archivo", function() {
    $("body").append('<div id="div_adjuntos"></div>');
    
    // Test 1
    $("#div_adjuntos").html('<select id="adjuntos"></select>');
    equal(Core.archAdj("#adjuntos"), "", "Sin archivos adjuntos");
    $("#adjuntos").remove();
    
    // Test 2
    $("#div_adjuntos").html('<select id="adjuntos"><option value="text1.text">text1.text</option></select>');
    equal(Core.archAdj("#adjuntos"), "text1.text", "Un solo archivo adjunto");
    $("#adjuntos").remove();
    
    // Test 3
    $("#div_adjuntos").html('<select id="adjuntos"><option value="text1.text">text1.text</option><option value="text2.pdf">text2.pdf</option></select>');
    equal(Core.archAdj("#adjuntos"), "text1.text,text2.pdf", "Dos archivos adjuntos");
    $("#adjuntos").remove();
    
    // Test 4
    $("#div_adjuntos").html('<select id="adjuntos"><option value="text1.text">text1.text</option><option value=""></option><option value="text2.pdf">text2.pdf</option></select>');
    equal(Core.archAdj("#adjuntos"), "text1.text,text2.pdf", "Dos archivos adjuntos y un option value vacio");
    $("#adjuntos").remove();
})
var calculos = new Calculos();
module("Separacion de miles");
test("Test separacion de miles con punto(.)", function() {
    equal( calculos.lp("567500"), 567500 );
    equal( calculos.lp("110.000"), 110000 );
    equal( calculos.lp("110.000.000"), 110000000 );
    /*equal( calculos.lp("110.000.000,25"), 110000000.25 );
    equal( calculos.lp("567000.25"), 567000.25 );
    equal( calculos.lp("567000.255555"), 567000.255555 );*/
   
     
})

module("Cotizaciones - calculos");

test("Test subtotal sin descuento", function() {
   /* var n1 = 566700.25;
    console.log( parseInt( n1 ) );
    if( parseInt( n1 ) != n1 ){
        console.log("Diferente");
    }*/
     
    equal(calculos.subtotalSinDescuento("", ""), 0);  
    equal(calculos.subtotalSinDescuento(0, 0), 0);  
    equal(calculos.subtotalSinDescuento(15000, 2), 30000);  
    equal(calculos.subtotalSinDescuento(650000, 2), 1300000);  
    equal(calculos.subtotalSinDescuento("300.000,5", "2"), 600001);
    equal(calculos.subtotalSinDescuento("650000", "2"), 1300000);
    equal(calculos.subtotalSinDescuento("650000a", "2"), 0);
    equal(calculos.subtotalSinDescuento("650000a", "a2"), 0);
    equal(calculos.subtotalSinDescuento("12.500", "2"), 25000);
    equal(calculos.subtotalSinDescuento("12.500", "2"), 25000);
    equal(calculos.subtotalSinDescuento("12.500,2", "2"), 25000.40);
    equal(calculos.subtotalSinDescuento("999999", "2"), 1999998);
    equal(calculos.subtotalSinDescuento("999999999", "2"), 1999999998);
})
test("Test Valor descuento", function() {
    equal(calculos.valorDescuento("", ""), 0);  
    equal(calculos.valorDescuento(0, 0), 0);  
    equal(calculos.valorDescuento(15000, 2), 300);  
    equal(calculos.valorDescuento(65000, 2), 1300);  
    equal(calculos.valorDescuento("65000", "2"), 1300);
    equal(calculos.valorDescuento("650000a", "2"), 0);
    equal(calculos.valorDescuento("650000a", "a2"), 0);
    equal(calculos.valorDescuento("12.500", "2"), 250);
    equal(calculos.valorDescuento("12.500,2", "2"), 250.00400000000002);
    equal(calculos.valorDescuento("999999", "2"), 19999.98);
    equal(calculos.valorDescuento("999999999", "2"), 19999999.98);
    equal(calculos.valorDescuento("999.999.999.10", "2"),1999999998.2);
    equal(calculos.valorDescuento("5.000", "2.5"),125);
    equal(calculos.valorDescuento("5.000.000", "5.50"),275000);
    equal(calculos.valorDescuento("10.000.000", "0"),0);
    equal(calculos.valorDescuento("10.000.000", "0.1"),10000);
    
})
test("Test Subtotal con descuento", function() {
    equal(calculos.subTotalConDescuento("", ""), 0);  
    equal(calculos.subTotalConDescuento(0, 0), 0);  
    equal(calculos.subTotalConDescuento("15.000", "2"), 14700);  
    equal(calculos.subTotalConDescuento("650000a", "2"), 0);
    equal(calculos.subTotalConDescuento("650000a", "a2"), 0);
})
test("Test Valor cotizacion", function() {
    equal(calculos.sumarValores([5000]), 5000);
    equal(calculos.sumarValores([5000, 2000]), 7000);
    equal(calculos.sumarValores(["5000", "2000"]), 7000);
    equal(calculos.sumarValores(["5000", "2000", 5000]), 12000);
    equal(calculos.sumarValores(["5.000", "2.000", "5.000"]), 12000);
    equal(calculos.sumarValores(["5.000", "2.000a", "5.000"]), 10000);
    equal(calculos.sumarValores(["a5.000", "2.000a", "5.0j00"]), 0);
    equal(calculos.sumarValores(["5.000,25", "5.000,25"]), 10000.5);
    equal(calculos.sumarValores(["", "5000"]), 5000);
    equal(calculos.sumarValores([]), 0);
    
})
test("Test convertir a SMMLV", function() {
    equal( calculos.convertirASMML("567500", 567500), 1 );
    equal( calculos.convertirASMML("567500", 567500), 1 );
    equal( calculos.convertirASMML("1135000", 567500), 2 );
    equal( calculos.convertirASMML("1.135.000", 567500), 2 );
    equal( calculos.convertirASMML("", 567500), 0 );
    equal( calculos.convertirASMML(0, 567500), 0 );
    equal( calculos.convertirASMML(567500, 0), false );
    equal( calculos.convertirASMML(567500, "0"), false );
    equal( calculos.convertirASMML("1.135.000,25", 567500), 2.0000004405286345  );
    equal( calculos.convertirASMML("567.500,25", 567500), 1.0000004405286345   );
    equal( calculos.convertirASMML("567500,25", "566700"), 1.0014121228163049    );
    equal( calculos.convertirASMML("567500.25", "566700"), 1.0014121228163049    );
})


module("Cotizaciones");
test("Test Validacion porcentaje de descuento digitado", function() {
    for( var n = 0; n <= 200; n++ ) {
        var op = n  * 0.1;
        var op = op.toString().replace(",", ".");
        equal(Cotizaciones.v_porcentaje( op ), Cotizaciones.v_porcentaje( op ), "Descuento: " + op + " :  " + Cotizaciones.v_porcentaje( op ) );
    }
})
test("Test Validacion de numeros", function() {
    equal(Core.valid("10s", 1), false, "El valor contiene letras '10s'");
    equal(Core.valid("10", 1), true, "El valor es un String valido '10'");
    equal(Core.valid(5, 1), true, "El valor es un int valido 5");
    equal(Core.valid(5.5, 2), true, "El valor es un descuento valido 5.5");
    equal(Core.valid("5.5s", 2), false, "El valor es un descuento invalido 5.5s");
    equal(Core.valid("s", 1), false, "El valor es un String 's' invalido");
})
test("Test tabla dinamica de productos", function() {
    equal(Cotizaciones.geEn({
        "Descripcion" : "pro_productodescrip_"
    }), '<tr><td style="text-align:center">Descripcion</td></tr>', "Filas encabezados generadas 1, Descripcion");
    equal(Cotizaciones.geEn({
        "Valor" : "pro_valor_"
    }), '<tr><td style="text-align:center">Valor</td></tr>', "Filas encabezados generadas 1, Valor");
    
    equal(Cotizaciones.geEn({
        "Descripcion" : "pro_productodescrip_",
        "Valor" : "pro_valor_"
    }), '<tr><td style="text-align:center">Descripcion</td><td style="text-align:center">Valor</td></tr>', "Filas encabezados generadas 2, Descripcion, valor");
    
    equal(Cotizaciones.geFi({
        "Descripcion" : "pro_codigo_"
    }, "1"), '<tr><td style="text-align:left">{{= pro_codigo_1}}</td></tr>', "Filas generadas 1, Codigo");
    equal(Cotizaciones.geFi({
        "Descripcion" : "pro_descripcion_"
    }, "2"), '<tr><td style="text-align:left">{{= pro_descripcion_2}}</td></tr>', "Filas generadas 1, Descripcion");
    equal(Cotizaciones.geFi({
        "Descripcion" : "pro_descripcion_",
        "Valor" : "pro_codigo_"
    }, "2"), '<tr><td style="text-align:left">{{= pro_descripcion_2}}</td><td style="text-align:right">{{= pro_codigo_2}}</td></tr>', "Filas generadas 1, Descripcion, Valor");
  
})

test("Test Remover variables de contacto", function() {
    var v_con_con =  {
        "sys_prueba" : "ss",
        "pro_producto" : "sadad",
        "con_dasd" : "asdasd"
    }
    var v_sin_con = {
        "sys_prueba" : "ss",
        "pro_producto" : "sadad"
    }
    deepEqual(Cotizaciones.borrar_vars_contacto(v_con_con), v_sin_con, "Sin variables de contacto test 1");
    var v_con_con_1 =  {
        "sys_kksd" : "ss",
        "con_sss" : "sdsd",
        "con_aa" : "sdasd"
    }
    var v_sin_con_1 = {
        "sys_kksd" : "ss"
    }
    deepEqual(Cotizaciones.borrar_vars_contacto(v_con_con_1), v_sin_con_1, "Sin variables de contacto test 2");
   
})
test("Test Validacion para agregar nuevo producto", function() {
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_3_cotizacion" value="1">')
    var idp_1 = Cotizaciones.proNoSel();
    // Test 1
    equal(idp_1.length, 0, "Todos los productos se encuentran seleccionados");
    deepEqual(idp_1, [], "Id de elementos no seleccionados 0");
    $("#productos_1").remove();
    // Test 2
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="">')
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_3_cotizacion" value="">')
    var idp_2 = Cotizaciones.proNoSel();
    equal(idp_2.length, 2, "Dos de los productos agregados no se encuentra definido");
    deepEqual(idp_2, ["#h_idproducto_2_cotizacion", "#h_idproducto_3_cotizacion"], "Id de elementos no seleccionados 2");
    $("#productos_1").remove();
})

test("Test tipo venta no seleccionado", function() {
    var idtp = 0;
    // Test 1
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0" selected>Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    idtp = Cotizaciones.proNoTipoVenta();
    equal(idtp.length, 1, "Un producto seleccionado, no tiene definido el tipo de venta");
    $("#productos_1").remove();
    
    // Test 2
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0" selected>Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_2_cotizacion" name="idtipovalorproducto"><option value="0" selected>Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    idtp = Cotizaciones.proNoTipoVenta();
    equal(idtp.length, 2, "Dos productos seleccionados, no tiene definido el tipo de venta");
    $("#productos_1").remove();
    
    // Test 3
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_2_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1" selected>VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    idtp = Cotizaciones.proNoTipoVenta();
    equal(idtp.length, 1, "Uno de los dos productos seleccionados, no tiene definido el tipo de venta");
    $("#productos_1").remove();

    // Test 4
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    $("#productos_1").append('<select class="span2" id="p_tipoventa_2_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1" selected>VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');
    idtp = Cotizaciones.proNoTipoVenta();
    deepEqual(idtp, ["#p_tipoventa_1_cotizacion"], "Id tipo de venta no seleccionado");
    $("#productos_1").remove();
    
});
test("Test Dos productos con el mismo tipo  de venta", function() {
    
    // Test 1
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2" selected>ARRENDO</option><option value="3">PRUEBA</option></select>');
    
    equal(Cotizaciones.proTipoVentaIgual("p_tipoventa_1_cotizacion", "1").length, 0, "El tipo de venta no se encuentra en uso en otro producto");
    deepEqual(Cotizaciones.proTipoVentaIgual("p_tipoventa_1_cotizacion","1" ), [], "Id del elemento que ya tiene en uso al tipo de venta");
    $("#productos_1").remove();

    // Test 2
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2" selected>ARRENDO</option><option value="3">PRUEBA</option></select>');
    
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_2_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2" selected>ARRENDO</option><option value="3">PRUEBA</option></select>');
    
    equal(Cotizaciones.proTipoVentaIgual("p_tipoventa_2_cotizacion","1" ).length, 1, "El tipo de venta se encuentran en uso por otro producto");
    deepEqual(Cotizaciones.proTipoVentaIgual("p_tipoventa_2_cotizacion","1" ), ["#p_productodescrip_1_cotizacion"], "Id del elemento que ya tiene en uso al tipo de venta");
    
    $("#productos_1").remove();
    
    // Test 3
    
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2" selected>ARRENDO</option><option value="3">PRUEBA</option></select>');
    
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_2_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3" selected>PRUEBA</option></select>');
    
    equal(Cotizaciones.proTipoVentaIgual("p_tipoventa_2_cotizacion","1" ).length, 0, "El tipo de venta no se encuentran en uso por otro elemento");
    deepEqual(Cotizaciones.proTipoVentaIgual("p_tipoventa_2_cotizacion","1" ), [], "Id del elemento en uso, vacio porque no hay quien lo use");
    $("#productos_1").remove();
    
    // Test 4
    
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2" selected>ARRENDO</option><option value="3">PRUEBA</option></select>');
    
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="2">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_2_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1">VENTA</option><option value="2" selected>ARRENDO</option><option value="3">PRUEBA</option></select>');
    
    equal(Cotizaciones.proTipoVentaIgual("p_tipoventa_2_cotizacion","2" ).length, 0, "El tipo de venta no se encuentran en uso por otro elemento");
    deepEqual(Cotizaciones.proTipoVentaIgual("p_tipoventa_2_cotizacion","2" ), [], "Id del elemento en uso, vacio porque no hay quien lo use");
    $("#productos_1").remove();
    
    // Test 5
    $("body").append('<div id="productos_1"></div>');
    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_1_cotizacion" name="idtipovalorproducto"><option value="0">Seleccione</option><option value="1" selected>VENTA</option><option value="2">ARRENDO</option><option value="3">PRUEBA</option></select>');

    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_4_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_4_cotizacion" name="idtipovalorproducto"><option value="0" selected="selected">Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3" selected>PRUEBA</option></select>');

    $("#productos_1").append('<input type="hidden" name="idproducto" id="h_idproducto_5_cotizacion" value="1">')
    $("#productos_1").append('<select class="span2" id="p_tipoventa_5_cotizacion" name="idtipovalorproducto"><option value="0" selected="selected">Seleccione</option><option value="1">VENTA</option><option value="2">ARRENDO</option><option value="3" selected>PRUEBA</option></select>');    
    
    equal(Cotizaciones.proTipoVentaIgual("p_tipoventa_5_cotizacion","1" ).length, "1", "El tipo de venta se encuentra en uso por otro elemento");
    deepEqual(Cotizaciones.proTipoVentaIgual("p_tipoventa_5_cotizacion","1" ), ["#p_productodescrip_4_cotizacion"], "Id del elemento en uso, vacio porque no hay quien lo use");
    $("#productos_1").remove();
})
test("Test envio del String anterior y el producto nuevo", function() {
    // Test 1
    $("body").append('<div id="actualizacion"></div>');
    // Producto anterior
    $("#actualizacion").append('<input type="hidden" name="ant" id="h_ant_1_cotizacion" value="ant">')
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="3">')
    // Producto nuevo
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    
    equal(Cotizaciones.proact(), "3{_,}1", "Un solo producto para actualizacion");
    
    // Test 2
    $("#actualizacion").html("");
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="3">')
    // Producto nuevo
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    equal(Cotizaciones.proact(), "", "Ningun producto para actualizacion");
    
    // Test 3
    $("#actualizacion").html("");
    // Producto anterior 1
    $("#actualizacion").append('<input type="hidden" name="ant" id="h_ant_1_cotizacion" value="ant">')
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="3">')
    // Producto nuevo 1
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    
    // Producto anterior 2
    $("#actualizacion").append('<input type="hidden" name="ant" id="h_ant_3_cotizacion" value="ant">')
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_3_cotizacion" value="5">')
    // Producto nuevo 2
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_4_cotizacion" value="6">')
    equal(Cotizaciones.proact(), "3{_,}1{:}5{_,}6", "Dos productos para la actualizacion");
    
    // Test 4
    $("#actualizacion").html("");
    // Producto anterior 1
    $("#actualizacion").append('<input type="hidden" name="ant" id="h_ant_1_cotizacion" value="ant">')
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_1_cotizacion" value="3">')
    // Producto nuevo 1
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_2_cotizacion" value="1">')
    // Producto anterior 2
    $("#actualizacion").append('<input type="hidden" name="ant" id="h_ant_3_cotizacion" value="ant">')
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_3_cotizacion" value="5">')
    // Producto nuevo 2
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_4_cotizacion" value="6">')
    // Producto anterior 2
    $("#actualizacion").append('<input type="hidden" name="ant" id="h_ant_4_cotizacion" value="ant">')
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_4_cotizacion" value="9">')
    // Producto nuevo 2
    $("#actualizacion").append('<input type="hidden" name="idproducto" id="h_idproducto_5_cotizacion" value="10">')
    
    equal(Cotizaciones.proact(), "3{_,}1{:}5{_,}6{:}9{_,}10", "Tres productos para la actualizacion");
})
test("Test recuperar archivos adjuntos", function() {
    // Test 1
    $("body").append('<select id="adjuntos"></select>');
    Core.recuperar_adjuntos("#adjuntos", {});
    equal( $("#adjuntos").html(), '', "Sin adjuntos para recuperar" );
    $("#adjuntos").remove();
    
    // Test 2
    $("body").append('<select id="adjuntos"></select>');
    Core.recuperar_adjuntos("#adjuntos", {
        "adjuntos" : ["Archivo 1.text"]
    });
    equal( $("#adjuntos").html(), '<option value="Archivo 1.text">Archivo 1.text</option>', "Un archivo adjunto" );
    $("#adjuntos").remove();
    
    // Test 3
    $("body").append('<select id="adjuntos"></select>');
    Core.recuperar_adjuntos("#adjuntos", {
        "adjuntos" : ["Archivo 1.text", "Archivo 2.doc"]
    });
    equal( $("#adjuntos").html(), '<option value="Archivo 1.text">Archivo 1.text</option><option value="Archivo 2.doc">Archivo 2.doc</option>', "Dos archivos adjunto" );
    $("#adjuntos").remove();
})



module("Contratos");
test("Test identificacion de proximo contrato", function() {
    $("body").append('<div id="proximo_contrato"></div>');
    // Test 1
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos"><button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button><button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button><button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button></div>');
    equal(Contratos.proximo_contrato(), 'Contrato tarjeta debito (oustorcing)');
    $("#tiposcontratos").remove();
    
    // Test 2
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos"><button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button><button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button><button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button></div>');
    equal(Contratos.proximo_contrato(), 'Contrato Transacciones inusuales');
    $("#tiposcontratos").remove();
    
    // Test 3
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.proximo_contrato(), 'Contrato Confidencialidad');
    $("#tiposcontratos").remove();
    
    // Test 4
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.proximo_contrato(), 'Contrato Transacciones inusuales');
    $("#tiposcontratos").remove();
    
    // Test 5
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.proximo_contrato(), 'Contrato Confidencialidad');
    $("#tiposcontratos").remove();
    
    
    // Test 6
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="true" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.proximo_contrato(), '');
    $("#tiposcontratos").remove();
})
test("Chekear contrato", function() {
    // Test 1
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    Contratos.chekear_contrato()
    
    equal(
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn btn-success">Contrato Confidencialidad (Opcional)</button>'+
        '', $("#tiposcontratos").html());
    $("#tiposcontratos").remove();
    
    // Test 2
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_5" class="btn">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    Contratos.chekear_contrato()
    
    equal(
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>', $("#tiposcontratos").html());
    $("#tiposcontratos").remove();
    
    // Test 3
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="false" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    Contratos.chekear_contrato()
    equal(
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="false" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>', $("#tiposcontratos").html());
    $("#tiposcontratos").remove();
})
test("Test Proximo contrato y avanzar contrato", function() {
    $("#proximo_contrato").html("");
    
    // Test 1
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.proximo_contrato(), 'Contrato Confidencialidad');
    
    Contratos.chekear_contrato()
    equal(
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="false" data-obli="false" id="btn_mul_7" class="btn btn-success">Contrato Confidencialidad (Opcional)</button>', $("#tiposcontratos").html());
    $("#tiposcontratos").remove();
    
    $("#proximo_contrato").remove();
})
test("Test Debe seleccionar almenos un tipo de contrato", function() {
    // Test 1
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="false" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.sel_uncontrato(), false);
    $("#tiposcontratos").remove();
    
    
    // Test 2
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="false" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.sel_uncontrato(), true);
    $("#tiposcontratos").remove();
})
test("Test todos los contratos ya se encuentran creados", function(){
    // Test 1
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="true" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.contratos_creados(), true);
    $("#tiposcontratos").remove();
    
    
    // Test 2
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="true" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.contratos_creados(), false);
    $("#tiposcontratos").remove();
    
    
    // Test 3
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="true" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.contratos_creados(), true);
    $("#tiposcontratos").remove();
    
    // Test 4
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="true" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="true" data-creado="true" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.contratos_creados(), false);
    $("#tiposcontratos").remove();
    
    
    // Test 5
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="true" data-creado="true" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="false" data-creado="true" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.contratos_creados(), true);
    $("#tiposcontratos").remove();
    
    // Test 6
    $("body").append('<div class="btn-group" data-toggle="buttons-checkbox" id="tiposcontratos">'+
        '<button type="button" data-nombre="Contrato tarjeta debito (oustorcing)" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_5" class="btn btn-success">Contrato tarjeta debito (oustorcing) (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Transacciones inusuales" data-crear="false" data-creado="false" data-obli="true" id="btn_mul_6" class="btn btn-success">Contrato Transacciones inusuales (Obligatorio)</button>'+
        '<button type="button" data-nombre="Contrato Confidencialidad" data-crear="false" data-creado="false" data-obli="false" id="btn_mul_7" class="btn">Contrato Confidencialidad (Opcional)</button>'+
        '</div>');
    equal(Contratos.contratos_creados(), false);
    $("#tiposcontratos").remove();
    
})








/*
test("Operciones de la cotizacion", function() {
  equal(Cotizaciones.ssd(10000, 2), 20000, "Subtotal sin descuento 20000");
  equal(Cotizaciones.ssd(20000, 2), 40000, "Subtotal sin descuento 40000");
  equal(Cotizaciones.ssd(50000, 2), 100000, "Subtotal sin descuento 100000");
  equal(Cotizaciones.ssd("50000", 2), 100000, "El valor digitado es un String y la cantidad un entero");
  equal(Cotizaciones.ssd("5000", "2"), 10000, "El valor digitado es un String y la cantidad tambien");
  equal(Cotizaciones.ssd("a", "2"), 0, "Valor digitado es una letra y la cantidad un String");
  equal(Cotizaciones.ssd("", ""), 0, "El valor digitado y la cantidad estan vacias");
  equal(Cotizaciones.ssd(5000, 2.5), 0, "La cantidad es un decimal");
  equal(Cotizaciones.ssd(100.25, 5), 501, "El valor digitado contiene una parte decimal y debe ser dedondeado");
  equal(Cotizaciones.ssd(100.100, 5), 501, "El valor digitado contiene una parte decimal y debe ser redondeado");
});
*/







/*
module("Scaffold js");
var sca = new scaffold(); 
$.mockjax({
    url : 'pruebaController',
    contentType : 'text/json',
    response : function( settings ) {
        this.responseText =  ["hola"];
        
    }
});
sca.configEx({
    "modelo" : {
        "ta" : "prueba"
    },
    "reemplazar" : "#div_prueba",
    "controller" : "pruebaController"
               
});

test("Paginacion", function() {
    equal(sca.cantPaginas(20, 2), 10, "Cantidad de paginas a mostrar 20/2 = 10");
    equal(sca.cantPaginas(30, 2), 15, "Cantidad de paginas a mostrar  30/2 = 15");
    equal(sca.cantPaginas(50, 2), 25, "Cantidad de paginas a mostrar  50/2 = 25");
    equal(sca.mostrarPaginacion(1), false, "Mostrar div de paginacion no");
    equal(sca.mostrarPaginacion(0), false, "Mostrar div de paginacion no");
    equal(sca.mostrarPaginacion(2), true, "Mostrar div de paginacion si");
    equal(sca.linkAtras(1), false, "Mostrar link atras no");
    equal(sca.linkAtras(0), false, "Mostrar link atras no");
    equal(sca.linkAtras(2), true, "Mostrar link atras si");
    equal(sca.linkAde(1, 3), true, "Mostrar link adelante si");
    equal(sca.linkAde(2, 3), true, "Mostrar link adelante si");
    equal(sca.linkAde(3, 3), false, "Mostrar link adelante no");
});
/*
asyncTest("Modelo de datos", function() {
    expect(1);
    setTimeout( function() {
        equal(sca.modelo(function(data){
            }, {}), true, "Conexion al modelo de datos Ok");
        start();
    }, 1000 )
})

*/