/* Esta es la versión que debe quedar para poder comunicar entre cliente y servidor
simplemente activamos la función en el cliente, este contacta con el controller php y si
conecta nos responderá con un console el mensaje que metamos en json_encode*/
/*Con esta prueba lo que logramos es entender el flujo de trabajo simplificado, ahora se
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

    $("#submit_products")
      .click(function() {
        validate_products();
});

        // Control de seguridad para evitar que al volver atrás de la
        // pantalla results a create, no nos imprima los datos
        $.get(
          "modules/products/controller/controller_products.class.php?load_data=true", // cogemos por get
          function(response) {
            // alert(response.user);
            console.log("he ido atras");
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
                url: "modules/products/controller/controller_products.class.php?delete=true",
                data: "filename=" + name,
                success: function(data) {
                  console.log(data);
                  
                  
                  
                }
              });
            }
          });
  });
  
  
          function validate_products(){
            var result = true;
          
        if (result) {
          var data = {"name":"holamundo"};

          var data_users_JSON = JSON.stringify(data);
 
          $.post(
              'modules/products/controller/controller_products.class.php', {
                alta_users_json: data_users_JSON
                
              },
             
              function(response) {
                
                console.log(response);
                
              },
              "json")
            .fail(function(xhr) {
              console.log(xhr.responseJSON);
              console.log("no estoy en alta");
            });
        }
  
}
