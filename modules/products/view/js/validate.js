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

$(document)
  .ready(function() {

    $(this)
      .fill_or_clean(); // siempre que creemos un plugin debemos llamarlo,
    // sino no funcionará

    var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;
    var date_reg =
      /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
    var price_reg = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
    var measure_reg = /^[0-9]\d{1,4}?$/;
    var desc_reg = /^[A-Za-z0-9- -.]{2,80}$/;

    $("#submit_products")
      .click(function() {
        $(".error").remove();
        if ($("#serial_number").val() == "" ||
          $("#serial_number").val() == "Input serial number") {
          $("#serial_number")
            .focus()
            .after("<span class='error'>Input serial number</span>");
          return false;
        } else if (!string_reg.test($("#serial_number").val())) {
          $("#serial_number")
            .focus()
            .after(
              "<span class='error'>Serial number must be 2 to 20 characters,no admit special characters</span>"
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
              "<span class='error'>error format date (dd-mm-yyyy)</span>");
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
              "<span class='error'>error format date (dd-mm-yyyy)</span>");
          return false;
        } else if ($("#purchase_price").val() == "" ||
          $("#purchase_price").val() == "Input purchase price") {
          $("#purchase_price")
            .focus()
            .after("<span class='error'>Input purchase price</span>");
          return false;
        } else if (!price_reg.test($("#purchase_price").val())) {
          $("#purchase_price")
            .focus()
            .after(
              "<span class='error'>The price format is wrong,example 000000.0000</span>"
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
              "<span class='error'>The price format is wrong,example 000000.0000</span>"
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
              "<span class='error'>Provider must be 2 to 20 characters,no admit special characters</span>"
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
              "<span class='error'>The weight format is wrong,you can not use more than 4 digits</span>"
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
              "<span class='error'>The height format is wrong,you can not use more than 4 digits</span>"
            );
          return false;
        }

        if ($("#width").val() == "" || $("#width").val() == "Input width") {
          $("#width")
            .focus()
            .after("<span class='error'>Input width</span>");
          return false;
        } else if (!measure_reg.test($("#width").val())) {
          $("#width")
            .focus()
            .after(
              "<span class='error'>The width format is wrong,you can not use more than 4 digits.</span>"
            );
          return false;
        }

        if ($("#description").val() == "" ||
          $("#description").val() == "Input description") {
          $("#description")
            .focus()
            .after("<span class='error'>Input description</span>");
          return false;
        } else if (!desc_reg.test($("#description").val())) {
          $("#description")
            .focus()
            .after(
              "<span class='error'>The description format is wrong,you can not use spaecial characters.</span>"
            );
          return false;
        }

        $("#form_products").submit();
        $("#form_products").val("action", "index.php?module=products");

      });

    // realizamos funciones para que sea más práctico nuestro formulario
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

  });
