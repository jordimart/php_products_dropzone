<?php

    session_start();
$_SESSION['result_avatar'] = array();
    require_once("view/inc/header.php");
    require_once("view/inc/menu.php");

    include 'utils/utils.inc.php';

    //Si no hay ningun modulo en $_GET incluimos la clase main.
    //Si hay algun modulo $_GET y no hay view en $_GET escogera el modulo que haya en $_GET

    if (!isset($_GET['module'])) {
		require_once("modules/main/controller/controller_main.class.php");

	} else	if ( (isset($_GET['module'])) && (!isset($_GET['view'])) ){
		require_once("modules/".$_GET['module']."/controller/controller_".$_GET['module'].".class.php");
	}

	//Si hay un modulo en $_GET y hay una view en $_GET incluira del modulo escogido la vista seleccionada

	if ( (isset($_GET['module'])) && (isset($_GET['view'])) ) {
		require_once("modules/".$_GET['module']."/view/".$_GET['view'].".php");
	}

    require_once("view/inc/footer.html");
