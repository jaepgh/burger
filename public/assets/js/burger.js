// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoureBurger").on("click", function (event) {
    var id = $(this).data("id");

    var devouredBurger = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  (function () {
    'use strict';

    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault();

          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {

            var newBurger = {
              burger_name: $("#burgerName").val().trim(),
            };
      
            // Send the POST request.
            $.ajax("/api/burger", {
              type: "POST",
              data: newBurger
            }).then(
              function () {
                location.reload();
              }
            );
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

});
