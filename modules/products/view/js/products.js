// Plugin
jQuery.fn.fill_or_clean = function() {
  this.each(function() {

    if ($("#serial_number").attr("value") == "") {
      $("#serial_number").attr("value", "Input serial number");
      $("#serial_number")
        .focus(function() {
          if ($("#serial_number").attr("value") ==
            "Input serial number") {
            $("#serial_number").attr("value", "");
          }
        });
    }
    $("#serial_number")
      .blur(function() { // Onblur se activa cuando el usuario retira el foco
        if ($("#serial_number").attr("value") == "") {
          $("#serial_number").attr("value", "Input serial number");
        }
      });

    if ($("#date_entry").attr("value") == "") {
      $("#date_entry").attr("value", "Input date entry");
      $("#date_entry")
        .focus(function() {
          if ($("#date_entry").attr("value") == "Input date entry") {
            $("#date_entry").attr("value", "");
          }
        });
    }
    $("#date_entry")
      .blur(function() {
        if ($("#date_entry").attr("value") == "") {
          $("#date_entry").attr("value", "Input date entry");
        }
      });
    if ($("#date_exit").attr("value") == "") {
      $("#date_exit").attr("value", "Input date exit");
      $("#date_exit")
        .focus(function() {
          if ($("#date_exit").attr("value") == "Input date exit") {
            $("#date_exit").attr("value", "");
          }
        });
    }
    $("#date_exit")
      .blur(function() {
        if ($("#date_exit").attr("value") == "") {
          $("#date_exit").attr("value", "Input date exit");
        }
      });
    if ($("#purchase_price").attr("value") == "") {
      $("#purchase_price").attr("value", "Input purchase price");
      $("#purchase_price")
        .focus(function() {
          if ($("#purchase_price").attr("value") ==
            "Input purchase price") {
            $("#purchase_price").attr("value", "");
          }
        });
    }
    $("#purchase_price")
      .blur(function() {
        if ($("#purchase_price").attr("value") == "") {
          $("#purchase_price").attr("value", "Input purchase price");
        }
      });
    if ($("#sale_price").attr("value") == "") {
      $("#sale_price").attr("value", "Input sale price");
      $("#sale_price")
        .focus(function() {
          if ($("#sale_price").attr("value") == "Input sale price") {
            $("#sale_price").attr("value", "");
          }
        });
    }
    $("#sale_price")
      .blur(function() {
        if ($("#sale_price").attr("value") == "") {
          $("#sale_price").attr("value", "Input sale price");
        }
      });
    if ($("#provider").attr("value") == "") {
      $("#provider").attr("value", "Input provider");
      $("#provider")
        .focus(function() {
          if ($("#provider").attr("value") == "Input provider") {
            $("#provider").attr("value", "");
          }
        });
    }
    $("#provider")
      .blur(function() {
        if ($("#provider").attr("value") == "") {
          $("#provider").attr("value", "Input provider");
        }
      });
    if ($("#weight").attr("value") == "") {
      $("#weight").attr("value", "Input weight");
      $("#weight")
        .focus(function() {
          if ($("#weight").attr("value") == "Input weight") {
            $("#weight").attr("value", "");
          }
        });
    }
    $("#weight")
      .blur(function() {
        if ($("#weight").attr("value") == "") {
          $("#weight").attr("value", "Input weight");
        }
      });
    if ($("#height").attr("value") == "") {
      $("#height").attr("value", "Input height");
      $("#height")
        .focus(function() {
          if ($("#height").attr("value") == "Input height") {
            $("#height").attr("value", "");
          }
        });
    }
    $("#height")
      .blur(function() {
        if ($("#height").attr("value") == "") {
          $("#height").attr("value", "Input height");
        }
      });
    if ($("#width").attr("value") == "") {
      $("#width").attr("value", "Input width");
      $("#width")
        .focus(function() {
          if ($("#width").attr("value") == "Input width") {
            $("#width").attr("value", "");
          }
        });
    }
    $("#width")
      .blur(function() {
        if ($("#width").attr("value") == "") {
          $("#width").attr("value", "Input width");
        }
      });
    if ($("#description").attr("value") == "") {
      $("#description").attr("value", "Input description");
      $("#description")
        .focus(function() {
          if ($("#description").attr("value") == "Input description") {
            $("#description").attr("value", "");
          }
        });
    }
    $("#description")
      .blur(function() {
        if ($("#description").attr("value") == "") {
          $("#description").attr("value", "Input description");
        }
      });

  }); // each
  return this;

}; // function

Dropzone.autoDiscover = false;
$(document)
  .ready(function() {

    // configuracion datepicker
    $(function() {
      $('#date_entry')
        .datepicker({
          dateFormat: 'dd-mm-yy',
          changeMonth: true,
          changeYear: true,
          defaultDate: 'today',
          maxDate: 'today',
          yearRange: '1900:2016',

        });
    });

    // configuracion datepicker
    $(function() {
      $('#date_exit')
        .datepicker({
          dateFormat: 'dd-mm-yy',
          changeMonth: true,
          changeYear: true,
          yearRange: '1900:2016',

        });
    });

    // validamos productos al pulsar el botón
    $("#submit_products")
      .click(function() {
        validate_products(); // función que utilizamos
      });

    // Control de seguridad para evitar que al volver atrás de la pantalla
    // results a create, no nos imprima los datos
    $.get(
      "modules/products/controller/controller_products.class.php?load_data=true",
      function(response) {
        // alert(response.user);
        if (response.product === "") {
          $("#serial_number").val('');
          $("#category").val('Photovoltaic');
          $("#trademark")
            .val('Sunways'); // ojo sedebe cambiar si filtramospor base de
          // datos
          $("#model")
            .val('3000w/24v'); // ojo sedebe cambiar si filtramospor base
          // de datos
          $("#date_entry").val('');
          $("#date_exit").val('');
          $("#purchase_price").val('');
          $("#sale_price").val('');
          $("#provider").val('');
          $("#weight").val('');
          $("#height").val('');
          $("#width").val('');
          $("#description").val('');
          $("#status").val('');
          var inputElements_radio =
            document.getElementsByClassName('radio');
          for (var i = 0; i < inputElements_radio.length; i++) {
            if (inputElements[i].checked) {
              inputElements[i].checked = false;
            }
          }

          var inputElements_check =
            document.getElementsByClassName('checkbox');
          for (var i = 0; i < inputElements_check.length; i++) {
            if (inputElements[i].checked) {
              inputElements[i].checked = false;
            }
          }

          // siempre que creemos un plugin debemos llamarlo, sino no
          // funcionará
          $(this).fill_or_clean();
        } else {
          $("#serial_number").val(response.product.serial_number);
          $("#category").val(response.product.category);
          $("#trademark").val(response.product.trademark);
          $("#model").val(response.product.model);
          $("#date_entry").val(response.product.date_entry);
          $("#date_exit").val(response.product.date_exit);
          $("#purchase_price").val(response.product.purchase_price);
          $("#sale_price").val(response.product.sale_price);
          $("#provider").val(response.product.provider);
          $("#weight").val(response.product.weight);
          $("#height").val(response.product.height);
          $("#width").val(response.product.width);
          $("#description").val(response.product.description);

          var status = response.product.status;
          var inputElements_radio =
            document.getElementsByClassName('radio_');
          for (var i = 0; i < status.length; i++) {
            for (var j = 0; j < inputElements_radio_.length; j++) {
              if (status[i] === inputElements_radio_[j])
                inputElements_radio_[j].checked = true;
            }
          }

          var warranty = response.product.warranty;
          var inputElements_check =
            document.getElementsByClassName('checkbox_');
          for (var i = 0; i < warranty.length; i++) {
            for (var j = 0; j < inputElements.length; j++) {
              if (warranty[i] === inputElements[j])
                inputElements[j].checked = true;
            }
          }
        }
      },
      "json");

    // Dropzone function //////////////////////////////////
    $("#dropzone")
      .dropzone({
        url: "modules/products/controller/controller_products.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function() {
          this.on("success", function(file, response) {

            $("#progress").show();
            $("#bar").width('100%');
            $("#percent").html('100%');
            $('.msg').text('').removeClass('msg_error');
            $('.msg')
              .text('Success Upload image!!')
              .addClass('msg_ok')
              .animate({
                'right': '300px'
              }, 300);
          });
        },
        complete: function(file) {
          // if(file.status == "success"){
          // alert("El archivo se ha subido correctamente: " + file.name);
          //}
        },
        error: function(file) {
          // alert("Error subiendo el archivo " + file.name);
        },
        removedfile: function(file, serverFileName) {
          var name = file.name;
          $.ajax({
            type: "POST",
            url: "modules/products/controller/controller_products.class.php?delete=true",
            data: "filename=" + name,
            success: function(data) {
              $("#progress").hide();
              $('.msg').text('').removeClass('msg_ok');
              $('.msg').text('').removeClass('msg_error');
              $("#e_avatar").html("");

              var json = data;
              if (json.res === true) {
                var element;
                if ((element = file.previewElement) != null) {
                  element.parentNode.removeChild(file.previewElement);

                } else {
                  false;
                }
              } else { // json.res == false, elimino la imagen también
                var element;
                if ((element = file.previewElement) != null) {
                  element.parentNode.removeChild(file.previewElement);
                } else {
                  false;
                }
              }
            }
          });
        }
      });
  });

var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;
var date_reg =
  /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
var price_reg = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
var measure_reg = /^[0-9]\d{1,4}?$/;
var desc_reg = /^[A-Za-z0-9- -.]{2,80}$/;

$("#seral_number, #provider")
  .keyup(function() {
    if ($(this).val() != "" && string_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });

$("#date_entry", "#date_exit")
  .keyup(function() {
    if ($(this).val() != "" && date_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });

$("#purchase_price", "#sale_price")
  .keyup(function() {
    if ($(this).val() != "" && price_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });
$("#weight", "#height", "#width")
  .keyup(function() {
    if ($(this).val() != "" && measure_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });
$("#description")
  .keyup(function() {
    if ($(this).val() != "" && desc_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });

function validate_products() {
  var result = true;
  var serial_number = document.getElementById('serial_number').value;
  var category = document.getElementById('category').value;
  var trademark = document.getElementById('trademark').value;
  var model = document.getElementById('model').value;
  var date_entry = document.getElementById('date_entry').value;
  var date_exit = document.getElementById('date_exit').value;
  var purchase_price = document.getElementById('purchase_price').value;
  var sale_price = document.getElementById('sale_price').value;
  var provider = document.getElementById('provider').value;
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var width = document.getElementById('width').value;
  var description = document.getElementById('description').value;
  var status = document.getElementById('status').value;

  /*var status = [];
  var inputElements_radio = document.getElementsByClassName('radio');
  var p = 0;
  for (var i = 0; i < inputElements_radio.length; i++) {
    if (inputElements_radio[i].checked) {
      status[p] = inputElements_radio[i].value;
      j++;
    }
  }*/

  var warranty = [];
  var inputElements_check = document.getElementsByClassName('checkbox_');
  var j = 0;
  for (var i = 0; i < inputElements_check.length; i++) {
    if (inputElements_check[i].checked) {
      warranty[j] = inputElements_check[i].value;
      j++;
    }
  }

  var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;
  var date_reg =
    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
  var price_reg = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
  var measure_reg = /^[0-9]\d{1,4}?$/;
  var desc_reg = /^[A-Za-z0-9- -.]{2,80}$/;

  $(".error").remove();
  if ($("#serial_number").val() == "" ||
    $("#serial_number").val() == "Entry serial number") {
    $("#serial_number")
      .focus()
      .after("<span class='error'>Entry serial number</span>");
    result = false;
    return false;
  } else if (!string_reg.test($("#serial_number").val())) {
    $("#serial_number")
      .focus()
      .after("<span class='error'>Name must be 2 to 20 letters js</span>");
    result = false;
    return false;
  }
  $(".error").remove();
  if ($("#date_entry").val() == "" ||
    $("#date_entry").val() == "Entry date entry") {
    $("#date_entry")
      .focus()
      .after("<span class='error'>Entry date entry</span>");
    result = false;
    return false;
  } else if (!date_reg.test($("#date_entry").val())) {
    $("#date_entry")
      .focus()
      .after("<span class='error'>error format date (dd-mm-yyyy) js</span>");
    result = false;
    return false;
  }

  $(".error").remove();
  if ($("#date_exit").val() == "" ||
    $("#date_exit").val() == "Entry date of birth") {
    $("#date_exit").focus().after("<span class='error'>Input date exit</span>");
    result = false;
    return false;
  } else if (!date_reg.test($("#date_exit").val())) {
    $("#date_exit")
      .focus()
      .after("<span class='error'>error format date (dd-mm-yyyy)</span>");
    result = false;
    return false;
  } else if ($("#purchase_price").val() == "" ||
    $("#purchase_price").val() == "Input purchase price") {
    $("#purchase_price")
      .focus()
      .after("<span class='error'>Input purchase price</span>");
    result = false;
    return false;
  } else if (!price_reg.test($("#purchase_price").val())) {
    $("#purchase_price")
      .focus()
      .after(
        "<span class='error'>The price format is wrong,example 000000.0000</span>"
      );
    result = false;
    return false;
  }

  if ($("#sale_price").val() == "" ||
    $("#sale_price").val() == "Input sale price") {
    $("#sale_price")
      .focus()
      .after("<span class='error'>Input sale price</span>");
    result = false;
    return false;
  } else if (!price_reg.test($("#sale_price").val())) {
    $("#sale_price")
      .focus()
      .after(
        "<span class='error'>The price format is wrong,example 000000.0000</span>"
      );
    result = false;
    return false;
  }

  if ($("#provider").val() == "" || $("#provider").val() == "Input provider") {
    $("#provider").focus().after("<span class='error'>Input provider</span>");
    result = false;
    return false;
  } else if (!string_reg.test($("#provider").val())) {
    $("#provider")
      .focus()
      .after(
        "<span class='error'>Provider must be 2 to 20 characters,no admit special characters</span>"
      );
    result = false;
    return false;
  }

  if ($("#weight").val() == "" || $("#weight").val() == "Input weight") {
    $("#weight").focus().after("<span class='error'>Input weight</span>");
    result = false;
    return false;
  } else if (!measure_reg.test($("#weight").val())) {
    $("#weight")
      .focus()
      .after(
        "<span class='error'>The weight format is wrong,you can not use more than 4 digits</span>"
      );
    result = false;
    return false;
  }

  if ($("#height").val() == "" || $("#height").val() == "Input height") {
    $("#height").focus().after("<span class='error'>Input height</span>");
    result = false;
    return false;
  } else if (!measure_reg.test($("#height").val())) {
    $("#height")
      .focus()
      .after(
        "<span class='error'>The height format is wrong,you can not use more than 4 digits</span>"
      );
    result = false;
    return false;
  }

  if ($("#width").val() == "" || $("#width").val() == "Input width") {
    $("#width").focus().after("<span class='error'>Input width</span>");
    result = false;
    return false;
  } else if (!measure_reg.test($("#width").val())) {
    $("#width")
      .focus()
      .after(
        "<span class='error'>The width format is wrong,you can not use more than 4 digits.</span>"
      );
    result = false;
    return false;
  }

  if ($("#description").val() == "" ||
    $("#description").val() == "Input description") {
    $("#description")
      .focus()
      .after("<span class='error'>Input description</span>");
    result = false;
    return false;
  } else if (!desc_reg.test($("#description").val())) {
    $("#description")
      .focus()
      .after(
        "<span class='error'>The description format is wrong,you can not use spaecial characters.</span>"
      );
    result = false;
    return false;
  }

  if (result) {
    var data = {
      "serial_number": serial_number,
      "category": category,
      "trademark": trademark,
      "model": model,
      "date_entry": date_entry,
      "date_exit": date_exit,
      "purchase_price": purchase_price,
      "sale_price": sale_price,
      "provider": provider,
      "weight": weight,
      "height": height,
      "width": width,
      "description": description,
      "status": status,
      "warranty": warranty

    };

    var data_products_JSON = JSON.stringify(data);

    $.post('modules/products/controller/controller_products.class.php', {
          alta_products_json: data_products_JSON
        },

        function(response) {
          console.log(response);
          console.log(response.products);

          if (response.success) {
            window.location.href = response.redirect;
          }

        },
        "json")
      .fail(function(xhr) {
        console.log(xhr);
        if (xhr.responseJSON.error.serial_number)
          $("#serial_number")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.serial_number + "</span>");
        if (xhr.responseJSON.error.date_entry)
          $("#date_entry")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.date_entry + "</span>");

        // errores imagen
        if (xhr.responseJSON.success1) {
          if (xhr.responseJSON.img_avatar !==
            "/php_products/media/default-avatar.png") {}
        } else {
          $("#progress").hide();
          $('.msg').text('').removeClass('msg_ok');
          $('.msg')
            .text('Error Upload image!!')
            .addClass('msg_error')
            .animate({
              'right': '300px'
            }, 300);
        }
      });
  }
}
