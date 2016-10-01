<?php
/* Esta es la versión que debe quedar para poder comunicar entre cliente y servidor
simplemente activamos la función en el cliente, este contacta con el controller php y si
conecta nos responderá con un console el mensaje que metamos en json_encode*/
/*Con esta prueba lo que logramos es entender el flujo de trabajo simplificado, ahora se
introduciran validaciones y funciones de imagen*/

include ($_SERVER['DOCUMENT_ROOT'] . "/php_products/modules/products/utils/functions_products.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/php_products/utils/upload.php");
session_start();

if ((isset($_POST['alta_users_json']))) {
  alta_users();
}

	function alta_users() {

        $jsondata["success"] = true;
        $jsondata["redirect1"] = "hola he comunicado con alta";
        echo json_encode($jsondata);
        exit;
}

if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {

        $jsondata["success"] = true;
        $jsondata["redirect2"] = "hola he comunicado con upload";
        echo json_encode($jsondata);
        exit;
}

if (isset($_GET["delete"]) && $_GET["delete"] == true) {
        $jsondata["success"] = true;
        $jsondata["redirect3"] = "hola he comunicado con delete";
        echo json_encode($jsondata);
        exit;

}


