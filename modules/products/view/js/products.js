/* Esta es la versión que debe quedar para poder comunicar entre cliente y
servidor
simplemente activamos la función en el cliente, este contacta con el controller
php y si
conecta nos responderá con un console el mensaje que metamos en json_encode*/
/*Con esta prueba lo que logramos es entender el flujo de trabajo simplificado,
ahora se
introduciran validaciones y funciones de imagen*/

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

    $("#submit_products").click(function() {
      validate_products();
    });

    // Control de seguridad para evitar que al volver atrás de la
    // pantalla results a create, no nos imprima los datos
    /*$.get(
      "modules/products/controller/controller_products.class.php?load_data=true",
      // cogemos por get
      function(response) {
        console.log(response);
      }, "json");*/

    /*  // Dropzone function //////////////////////////////////
      $("#dropzone")
        .dropzone({
          url:
      "modules/products/controller/controller_products.class.php?upload=true",
          addRemoveLinks: true,
          maxFileSize: 1000,
          dictResponseError: "Ha ocurrido un error en el server",
          acceptedFiles:
      'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
          init: function() {
            this.on("success", function(file, response) {
              console.log(response);

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
              url:
      "modules/products/controller/controller_products.class.php?delete=true",
              data: "filename=" + name,
              success: function(data) {
                console.log(data);

              }
            });
          }

        });*/

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

              var json = JSON.parse(data);
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

function validate_products() {
  var result = true;
  var serial_number = document.getElementById('serial_number').value;

  var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;

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

  if (result) {
    var data = {
      "serial_number": serial_number
    };

    var data_products_JSON = JSON.stringify(data);

    $.post('modules/products/controller/controller_products.class.php', {
          alta_products_json: data_products_JSON
        },

        function(response) {
          console.log(response);
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
