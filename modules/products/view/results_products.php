<br>
<br>
<br>
<br>
<br>
<br>
<br>


<?php
$product = $_SESSION['products'];
$msage = $_SESSION['msje'];

foreach ($product as $index => $valor) {
    if ($index == 'warranty') {
        echo "<br><b>warranty:</b><br>";
        $warranty = $product['warranty'];
        foreach ($warranty as $index => $valor) {
            echo "<b>---> $index</b>: $valor<br>";
        }
    } else {
        echo "<br><b>$index</b>: $valor";
   }
}
echo "<br>" . "<b style='color:green'>" . $msage;
?>
