<?php

echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
include 'modules/products/utils/functions_products.inc.php';

if ($_POST) {
    $result = validate_products();

    if ($result['result']) {
        $arrArgument = array(
            'serial_number' => ucfirst($result['data']['serial_number']),
            'category' => ($result['data']['category']),
            'trademark' => $result['data']['trademark'],
            'model' => $result['data']['model'],
            'date_entry' => $result['data']['date_entry'],
            'date_exit' => $result['data']['date_exit'],
            'purchase_price' => $result['data']['purchase_price'],
            'sale_price' => $result['data']['sale_price'],
            'provider' => ucfirst($result['data']['provider']),
            'weight' => $result['data']['weight'],
            'height' => $result['data']['height'],
            'width' => $result['data']['width'],
            'description' => ucfirst($result['data']['description']),
            'status' => $result['data']['status'],
            'warranty' => $result['data']['warranty'],
        );

        $mensaje = "User has been successfully registered";

        $_SESSION['products'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;

        $callback = "index.php?module=products&view=results_products";
        redirect($callback);
    } else {
        $error = $result['error'];
    }
}
include 'modules/products/view/create_products.php';
