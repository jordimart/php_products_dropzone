<?php
/* Esta es la versión que debe quedar para poder comunicar entre cliente y servidor
simplemente activamos la función en el cliente, este contacta con el controller php y si
conecta nos responderá con un console el mensaje que metamos en json_encode*/
/*Con esta prueba lo que logramos es entender el flujo de trabajo simplificado, ahora se
introduciran validaciones y funciones de imagen*/

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

    if (($result['result'])) {
        $arrArgument = array(
            'serial_number' => ucfirst($result['data']['serial_number']),

        );

        $mensaje = "User has been successfully registered";

        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['product'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;
        $callback = "index.php?module=products&view=results_products";

        $jsondata["success"] = true;
        $jsondata["redirect"] = $callback;
        console.log("estamos en php y redirijo a js para imprimir");
        echo json_encode($jsondata);
        exit;
    } else {
        //$error = $result['error'];
        //$error_avatar = $result_avatar['error'];
        $jsondata["success"] = false;
        $jsondata["error"] = $result['error'];
        //$jsondata["error_avatar"] = $result_avatar['error'];

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

        upload_files();
}

if (isset($_GET["delete"]) && $_GET["delete"] == true) {
        remove_files();

}

if (isset($_GET["load"]) && $_GET["load"] == true) {

  $jsondata["success"] = true;
  $jsondata["redirect4"] = "hola he comunicado con load";
  echo json_encode($jsondata);

    exit;
}

if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {

  $jsondata["success"] = true;
  $jsondata["redirect5"] = "hola he comunicado con load_data";
  echo json_encode($jsondata);

    exit;
}
