function load_product_ajax() {
  $.ajax({
      type: 'GET',
      url: "modules/products/controller/controller_products.class.php?load=true",
      // dataType: 'json',
      async: false
    })
    .done(function(data) {
      console.log(data);
      var json = JSON.parse(data);

      paint_product(json);

    })
    .fail(function(xhr) {
      alert(xhr.responseText);
    });
};

$(document)
  .ready(function() {
    load_product_ajax();

  });

function paint_product(json) {

  var content = document.getElementById("content");
  var div_product = document.createElement("div");
  var parrafo = document.createElement("p");

  var msje = document.createElement("div");
  msje.innerHTML = "msje = ";
  msje.innerHTML += json.msje;

  var serial_number = document.createElement("div");
  serial_number.innerHTML = "serial_number = ";
  serial_number.innerHTML += json.product.serial_number;

  var cad = json.product.serial_number;
  console.log(cad);
  var cad = cad.toLowerCase();
  var img = document.createElement("div");
  var html = '<img src="' + cad + '" height="75" width="75"> ';
  img.innerHTML = html;
  // alert(html);

  div_product.appendChild(parrafo);
  parrafo.appendChild(msje);
  parrafo.appendChild(serial_number);

  content.appendChild(div_product);
  content.appendChild(img);
}
