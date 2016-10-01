function load_product_ajax() {
  $.ajax({
      type: 'GET',
      url: "modules/products/controller/controller_products.class.php?load=true",
      // dataType: 'json',
      async: false
    })
    .done(function(data) {
      console.log(data);
      // var json = JSON.parse(data);

      // paint_product(json);

    })
    .fail(function(xhr) {
      alert(xhr.responseText);
    });
}

function load_products_get() {
  $.get("modules/products/controller/controller_products.class.php?load=true",
    function(data, status) {
      var json = JSON.parse(data);
      //$( "#content" ).html( json.msje );
      // alert("Data: " + json.user.usuario + "\nStatus: " + status);

      paint_product(json);
    });
}

$(document)
  .ready(function() {
    load_product_ajax();

  });

function paint_product(json) {
  console.log("pintamos");
  // alert(data.user.avatar);
  var content = document.getElementById("content");
  var div_product = document.createElement("div");
  var parrafo = document.createElement("p");

  var msje = document.createElement("div");
  msje.innerHTML = "msje = ";
  msje.innerHTML += json.msje;

  var serial_number = document.createElement("div");
  serial_number.innerHTML = "serial number = ";
  serial_number.innerHTML += json.product.serial_number;

  var cad = data.user.avatar;
  // console.log(cad);
  // var cad = cad.toLowerCase();
  var img = document.createElement("div");
  var html = '<img src="' + cad + '" height="75" width="75"> ';
  img.innerHTML = html;
  // alert(html);

  div_product.appendChild(parrafo);
  parrafo.appendChild(msje);
  parrafo.appendChild(serial_number);

  // content.appendChild(img);
}
