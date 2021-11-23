<?php   

    //include 'conexion_be.php';//conexion a base de datos

    $tipo_form=$_POST['tipo'];//variable que recibe el tipo de formulario que se va a cargar

//---------------------------------------------------------------------------------
//establezco de que formulario vienen los datos con el id campo tipo
//---------------------------------------------------------------------------------
    if ($tipo_form=="1") {//formulario registro cliente nuevo

    echo "formulario registro Cliente nuevo   TIPO = 1";

    }

//---------------------------------------------------------------------------------
    if ($tipo_form=="2") {//formulario registro producto nuevo

    echo "formulario registro producto nuevo TIPO = 2";

    }

//---------------------------------------------------------------------------------
    if ($tipo_form=="3") {//formulario registro factura nuevo

    echo "formulario registro factura nuevo  TIPO = 3";

    }







?>