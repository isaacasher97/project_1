$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userInput = $("input[name='country']").val(); // Get the user's input from the text input field

        $.ajax("http://api.citybik.es/v2/networks")
        .then(function(data) {
            let found = false;
            let locationInfo;

            for (let i = 0; i < data.networks.length; i++) {
                if (
                    data.networks[i].location.city === userInput ||
                    data.networks[i].location.country === userInput
                ) {
                    found = true;
                    locationInfo = data.networks[i].location;
                    break;
                }
            }

            // Remove any previous result
            $(".keyimg .answer").remove();

            if (found) {
                // Render the location information in the keyimg div
                let popupContent = "<h2>Location Information</h2>";
                popupContent += "<p><strong>City:</strong> " + locationInfo.city + "</p>";
                popupContent += "<p><strong>Country:</strong> " + locationInfo.country + "</p>";
                popupContent += "<p><strong>Latitude:</strong> " + locationInfo.latitude + "</p>";
                popupContent += "<p><strong>Longitude:</strong> " + locationInfo.longitude + "</p>";
                $(".keyimg").append("<div class='answer'>" + popupContent + "</div>");
            } else {
                // Render the error message in the keyimg div
                const errorMessage = "Error, 404. No information found.";
                $(".keyimg").append("<div class='answer error'>" + errorMessage + "</div>");
            }
        });
    });
});