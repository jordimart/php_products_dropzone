<?php


include ($_SERVER['DOCUMENT_ROOT'] . "/php_products/modules/products/utils/functions_products.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/php_products/utils/upload.php");
session_start();

if ((isset($_POST['alta_products_json']))) {

  alta_products();
}

	function alta_products() {
    $jsondata = array();
    $productsJSON = json_decode($_POST["alta_products_json"], true);
    //console.log($productsJSON);
    $result = validate_products($productsJSON);
//si no hay avatar pone laruta de default
    if (empty($_SESSION['result_avatar'])) {
       $_SESSION['result_avatar'] = array('result' => true, 'error' => "", 'data' => 'media/default-avatar.png');
   }
   //coge la url de la foto
   $result_avatar = $_SESSION['result_avatar'];

    if (($result['result']) /*&& ($result_avatar['result'])*/) {
        $arrArgument = array(
            'serial_number' => ucfirst($result['data']['serial_number']),
            'avatar' => $result_avatar['data']
        );

        $mensaje = "Product has been successfully registered";

        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['product'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;
        $callback = "index.php?module=products&view=results_products";

        $jsondata["success"] = true;
        $jsondata["redirect"] = $callback;

        echo json_encode($jsondata);
        exit;
    } else {
        //$error = $result['error'];
        //$error_avatar = $result_avatar['error'];
        $jsondata["success"] = false;
        $jsondata["error"] = $result['error'];
        $jsondata["error_avatar"] = $result_avatar['error'];

        header('HTTP/1.0 400 Bad error');
        echo json_encode($jsondata);
        //exit;
    }

        //$jsondata["success"] = true;
        //$jsondata["redirect1"] = "hola he comunicado con alta";
        //echo json_encode($jsondata);
        //exit;
}

if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {

  $result_avatar = upload_files();
  $_SESSION['result_avatar'] = $result_avatar;
}

if (isset($_GET["delete"]) && $_GET["delete"] == true) {
  $_SESSION['result_avatar'] = array();
$result = remove_files();
if ($result === true) {
  echo json_encode(array("res" => true));
} else {
  echo json_encode(array("res" => false));
}

}

if (isset($_GET["load"]) && $_GET["load"] == true) {

/*  $jsondata["success"] = true;
  $jsondata["redirect4"] = "hola he comunicado con load";
  echo json_encode($jsondata);
    exit;*/

   $jsondata = array();
    if (isset($_SESSION['product'])) {
        //echo debug($_SESSION['user']);
          $jsondata["success"] = true;
        $jsondata["product"] = $_SESSION['product'];
    }
    if (isset($_SESSION['msje'])) {
        //echo $_SESSION['msje'];
        $jsondata["msje"] = $_SESSION['msje'];
    }
    //close_session();//ESTO ME DIO PROBLEMAS
    echo json_encode($jsondata);
    exit;
}

/*if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {

  $jsondata["success"] = true;
  $jsondata["redirect5"] = "hola he comunicado con load_data";
  echo json_encode($jsondata);

    exit;
}*/
