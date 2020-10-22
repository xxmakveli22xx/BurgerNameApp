$(function() {
    console.log("this loaded");

    // Add a new burger.
    $(".add-btn").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(response) {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            //location.reload();
            console.log(response)
            location.reload();
        });
    });

    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".delete-btn").on("click", function() {
        let id = $(this).data("id");

        let currentURL = window.location.origin;
        // Send the DELETE request.
        $.ajax(currentURL + "/api/burgers/" + id, {
            type: "DELETE",
        }).then(function() {
            console.log("id: " + id + "is deleted!");
            $(".devoured-burger" + id).remove();
            location.reload();
        });
    });

})