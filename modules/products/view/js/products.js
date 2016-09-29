// Create a plugin

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

    $("#submit_products")
      .click(function() {
        var result = true;

        // Control de seguridad para evitar que al volver atrás de la
        // pantalla results a create, no nos imprima los datos
        $.get(
          "modules/products/controller/controller_products.class.php?load_data=true", // cogemos por get
          function(response) {
            // alert(response.user);
            if (response.user === "") {
              $("#seral_number").val('');

              $(this).fill_or_clean();
            } else {
              $("#serial_number").val(response.user.serial_number);
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
                console.log("estoy en upload");
                // alert(response);
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
              // alert("El archivo se ha subido correctamente: " +
              // file.name);
              //}
            },
            error: function(file) {
              // alert("Error subiendo el archivo " + file.name);
            },
            removedfile: function(file, serverFileName) {
              var name = file.name;
              $.ajax({
                type: "POST",
                url: "modules/users/controller/controller_users.class.php?delete=true",
                data: "filename=" + name,
                success: function(data) {
                  console.log("estoy en delete");
                  $("#progress").hide();
                  $('.msg').text('').removeClass('msg_ok');
                  $('.msg').text('').removeClass('msg_error');
                  $("#e_avatar").html("");

                  var json = JSON.parse(data);
                  if (json.res === true) {
                    var element;
                    if ((element = file.previewElement) != null) {
                      element.parentNode.removeChild(file.previewElement);
                      // alert("Imagen eliminada: " + name);
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

        /*  var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;
                  var date_reg =
                    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[-
                  \/.](19|20)\d\d$/;
                  var price_reg = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
                  var measure_reg = /^[0-9]\d{1,4}?$/;
                  var desc_reg = /^[A-Za-z0-9- -.]{2,80}$/;

                  if ($("#serial_number").val() == "" ||
                    $("#serial_number").val() == "Input serial number") {
                    $("#serial_number")
                      .focus()
                      .after("<span class='error'>Input serial
           number</span>");
                    return false;
                  } else if (!string_reg.test($("#serial_number").val())) {
                    $("#serial_number")
                      .focus()
                      .after(
                        "<span class='error'>Serial number must be 2 to 20
                  characters,no admit special characters</span>"
                      );
                    return false;
                  } else if ($("#date_entry").val() == "" ||
                    $("#date_entry").val() == "Input date entry") {
                    $("#date_entry")
                      .focus()
                      .after("<span class='error'>Input date entry</span>");
                    return false;
                  } else if (!date_reg.test($("#date_entry").val())) {
                    $("#date_entry")
                      .focus()
                      .after(
                        "<span class='error'>error format date
                  (dd-mm-yyyy)</span>");
                    return false;
                  } else if ($("#date_exit").val() == "" ||
                    $("#date_exit").val() == "Introduce date of birth") {
                    $("#date_exit")
                      .focus()
                      .after("<span class='error'>Input date exit</span>");
                    return false;
                  } else if (!date_reg.test($("#date_exit").val())) {
                    $("#date_exit")
                      .focus()
                      .after(
                        "<span class='error'>error format date
                  (dd-mm-yyyy)</span>");
                    return false;
                  } else if ($("#purchase_price").val() == "" ||
                    $("#purchase_price").val() == "Input purchase price") {
                    $("#purchase_price")
                      .focus()
                      .after("<span class='error'>Input purchase
           price</span>");
                    return false;
                  } else if (!price_reg.test($("#purchase_price").val())) {
                    $("#purchase_price")
                      .focus()
                      .after(
                        "<span class='error'>The price format is
           wrong,example
                  000000.0000</span>"
                      );
                    return false;
                  }

                  if ($("#sale_price").val() == "" ||
                    $("#sale_price").val() == "Input sale price") {
                    $("#sale_price")
                      .focus()
                      .after("<span class='error'>Input sale price</span>");
                    return false;
                  } else if (!price_reg.test($("#sale_price").val())) {
                    $("#sale_price")
                      .focus()
                      .after(
                        "<span class='error'>The price format is
           wrong,example
                  000000.0000</span>"
                      );
                    return false;
                  }

                  if ($("#provider").val() == "" ||
                    $("#provider").val() == "Input provider") {
                    $("#provider")
                      .focus()
                      .after("<span class='error'>Input provider</span>");
                    return false;
                  } else if (!string_reg.test($("#provider").val())) {
                    $("#provider")
                      .focus()
                      .after(
                        "<span class='error'>Provider must be 2 to 20
               characters,no
                  admit special characters</span>"
                      );
                    return false;
                  }

                  if ($("#weight").val() == "" ||
                    $("#weight").val() == "Input weight") {
                    $("#weight")
                      .focus()
                      .after("<span class='error'>Input weight</span>");
                    return false;
                  } else if (!measure_reg.test($("#weight").val())) {
                    $("#weight")
                      .focus()
                      .after(
                        "<span class='error'>The weight format is wrong,you
           can
               not
                  use more than 4 digits</span>"
                      );
                    return false;
                  }

                  if ($("#height").val() == "" ||
                    $("#height").val() == "Input height") {
                    $("#height")
                      .focus()
                      .after("<span class='error'>Input height</span>");
                    return false;
                  } else if (!measure_reg.test($("#height").val())) {
                    $("#height")
                      .focus()
                      .after(
                        "<span class='error'>The height format is wrong,you
           can
               not
                  use more than 4 digits</span>"
                      );
                    return false;
                  }

                  if ($("#width").val() == "" || $("#width").val() == "Input
               width")
                  {
                    $("#width")
                      .focus()
                      .after("<span class='error'>Input width</span>");
                    return false;
                  } else if (!measure_reg.test($("#width").val())) {
                    $("#width")
                      .focus()
                      .after(
                        "<span class='error'>The width format is wrong,you
           can
               not
                  use more than 4 digits.</span>"
                      );
                    return false;
                  }

                  if ($("#description").val() == "" ||
                    $("#description").val() == "Input description") {
                    $("#description")
                      .focus()
                      .after("<span class='error'>Input
           description</span>");
                    return false;
                  } else if (!desc_reg.test($("#description").val())) {
                    $("#description")
                      .focus()
                      .after(
                        "<span class='error'>The description format is
           wrong,you
               can
                  not use spaecial characters.</span>"
                      );
                    return false;
                  }
                  console.log("Antes de submit");
                  //$("#form_products").submit();
                  //$("#form_products").val("action",
               "index.php?module=products");
          */
        if (result) {
          var data = {
            "name": "prova alta users"
          };

          var data_users_JSON = JSON.stringify(data);

          $.post(
              'modules/products/controller/controller_products.class.php', {
                alta_users_json: data_users_JSON
              },
              function(response) {
                console.log(response);
                console.log(response.redirect3.name);

              },
              "json")
            .fail(function(xhr) {
              console.log(xhr.responseJSON);

            });
        }

      });

  });
